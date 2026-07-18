export { services } from './services';
export { industries } from './industries';
export { generalPages, faqs } from './pages';
export const primaryNav=[{label:'Services',href:'/services/'},{label:'Industries',href:'/industries/'},{label:'How We Work',href:'/how-we-work/'},{label:'About',href:'/about/'},{label:'Resources',href:'/resources/'},{label:'Service Areas',href:'/service-areas/'}] as const;
export const site={name:'Cleanital',domain:'cleanital.com',url:'https://cleanital.com',description:'Commercial janitorial and facility-cleaning services for organizations in North Carolina and South Carolina.',territory:'North Carolina and South Carolina',qualification:'Service availability depends on facility location, scope, scheduling requirements, route density, and current operational capacity.'} as const;
