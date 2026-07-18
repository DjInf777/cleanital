import { appendFile, chmod, mkdir } from 'node:fs/promises';
import { createHmac, randomBytes } from 'node:crypto';
import { join } from 'node:path';

const requiredByKind={
 assessment:['contactName','organizationName','email','phone','state','facilityType','serviceNeeded','message','consent'],
 contact:['contactName','email','phone','state','message','consent'],
 career:['contactName','email','phone','state','message','consent'],
 contractor:['contactName','email','phone','state','message','consent']
};
const allowedKinds=new Set(Object.keys(requiredByKind));
const max={contactName:120,organizationName:160,email:254,phone:40,state:40,facilityType:100,serviceNeeded:120,desiredFrequency:80,message:3000};
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitize(value, limit=500){return String(value??'').replace(/[\u0000-\u001f\u007f]/g,' ').replace(/\s+/g,' ').trim().slice(0,limit);}
export function validateSubmission(kind,input){
 if(!allowedKinds.has(kind)) return {ok:false,message:'Unsupported form.'};
 if(sanitize(input.website)) return {ok:false,message:'Submission rejected.'};
 const started=Number(input.startedAt||0);if(!Number.isFinite(started)||Date.now()-started<2500) return {ok:false,message:'Please review the form and try again.'};
 const clean={};for(const [key,limit] of Object.entries(max)) clean[key]=sanitize(input[key],limit);
 clean.consent=sanitize(input.consent,10);
 for(const field of requiredByKind[kind]) if(!clean[field]) return {ok:false,message:'Complete all required fields.'};
 if(!emailPattern.test(clean.email)) return {ok:false,message:'Enter a valid email address.'};
 if(clean.message.length<20) return {ok:false,message:'Please provide a little more detail.'};
 if(clean.consent!=='yes') return {ok:false,message:'Consent is required to respond to this request.'};
 return {ok:true,data:clean};
}
function ref(){const d=new Date();const day=d.toISOString().slice(0,10).replaceAll('-','');return `CLN-${day}-${randomBytes(5).toString('hex').toUpperCase()}`;}
function hashIp(ip,key){return createHmac('sha256',key).update(ip||'unknown').digest('hex').slice(0,24);}
export async function processSubmission({kind,input,ip,userAgent,storageDir,ipHashKey,notify}){
 const validated=validateSubmission(kind,input);if(!validated.ok)return validated;
 if(!storageDir||!ipHashKey||ipHashKey==='replace-with-a-secret')return {ok:false,message:'The request service is not configured. No success was recorded.'};
 const reference=ref();const now=new Date();const record={reference,kind,receivedAt:now.toISOString(),status:'received',data:validated.data,abuse:{ipHash:hashIp(ip,ipHashKey),userAgent:sanitize(userAgent,300)}};
 await mkdir(storageDir,{recursive:true,mode:0o700});
 const file=join(storageDir,`${now.toISOString().slice(0,10)}.jsonl`);
 await appendFile(file,JSON.stringify(record)+'\n',{encoding:'utf8',mode:0o600});await chmod(file,0o600);
 let notification='not-configured';
 if(notify){try{await notify(record);notification='sent';}catch{notification='failed';}}
 return {ok:true,reference,notification};
}
