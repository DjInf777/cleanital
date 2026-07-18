# Cleanital Website Page Content Matrix

**Document ID:** CLN-WEB-IMP-002  
**Version:** 1.0.0  
**Status:** Ready for implementation after merge  
**Owner:** Website Business Owner  
**Authority:** CLN-WEB-STD-003 and the ratified Website Governance Phase 1.2 corpus  
**Companion Artifact:** `CLEANITAL-WEBSITE-IMPLEMENTATION-SPECIFICATION-v1.0.md`  
**Change Tier:** Tier 2 implementation artifact; it does not amend the canonical sitemap

---

## 1. Purpose

This Matrix defines the job, audience, required content, calls to action, evidence burden, dependencies, owner, review interval, and release state for every approved page.

It is the working control for content drafting, design, implementation, review, and page acceptance.

---

## 2. Status and Ownership Codes

### Release Codes

- **R1:** Required for the initial public release.
- **C1:** Conditional Release 1 page; publish only after the stated activation condition passes.
- **D:** Deferred until real content or capability exists.

### Workflow Status

- **Planned:** Approved page purpose; content and build not complete.
- **Blocked:** Work may begin, but publication depends on an unresolved blocker.
- **Inactive:** Do not publicly expose until activation.

### Owner Codes

- **WBO:** Website Business Owner — Edgar Henderson until reassigned.
- **TO:** Technical Owner — Edgar Henderson until reassigned.
- **LR:** Qualified legal reviewer.
- **CO:** Assigned content owner; defaults to WBO until delegated.

### Review Intervals

- **Q:** Quarterly.
- **6M:** Every six months.
- **12M:** Annually.
- A triggering business, legal, service, claim, form, security, or portal event requires earlier review.

---

## 3. Core Pages

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| P-001 | **Home** `/` | R1 / Planned | Commercial decision-maker: “What does Cleanital do, who is it for, where does it operate, and why should I continue?” | Commercial hero; explicit commercial-facility focus; service summary; industry summary; How We Work summary; quality/accountability summary; NC/SC territory with qualification; approved credibility evidence; assessment CTA; active portal utilities only | **Request an Assessment** / Explore Services, View Industries | No residential offer; no unsupported metrics, client logos, guarantees, or portal links; approved brand assets required before production | WBO / 6M |
| P-002 | **About Cleanital** `/about/` | R1 / Planned | Prospect or partner: “Who is Cleanital and how does the company approach service?” | Commercial identity; purpose; approved company history; leadership facts; operating philosophy; service philosophy; NC/SC territory; relationship approach | **Request an Assessment** / How We Work | Company-history and leadership facts must be verified; no invented founding date, size, certifications, or client count | WBO / 12M |
| P-003 | **How We Work** `/how-we-work/` | R1 / Planned | Prospect: “What happens from inquiry through ongoing service?” | Inquiry and qualification; assessment; scope and proposal; service setup; communication; quality verification; corrective action; boundary that inquiry is not acceptance | **Request an Assessment** / Quality Assurance | Must match actual Cleanital process; no promise of fixed timing, automated acceptance, or portal capability | WBO / 6M |
| P-004 | **Quality Assurance** `/quality-assurance/` | R1 / Planned | Operations or facility decision-maker: “How does Cleanital define, verify, and correct quality?” | Expectations; verification approach; communication; issue reporting; corrective-action approach; client role; evidence-backed proof only | **Request an Assessment** / How We Work | Any inspection rate, completion rate, response time, guarantee, or quality statistic requires retained evidence | WBO / 6M |
| P-005 | **Service Areas** `/service-areas/` | R1 / Planned | Prospect: “Does Cleanital potentially serve my facility?” | North Carolina; South Carolina; qualification statement; explanation that actual serviceability depends on location, scope, schedule, and capacity | **Request an Assessment** / Contact | No city/county list, local anchors, coverage guarantee, or clickable city map | WBO / 6M |
| P-006 | **Contact** `/contact/` | R1 / Blocked | General visitor: “How do I reach Cleanital for the correct type of inquiry?” | Contact categories; assessment routing; general contact form; public telephone/email when approved; sensitive-information warning; active portal routes where applicable | **Request an Assessment** for service / Submit General Inquiry | Blocked on approved public fallback contact details, receiving destination, retention, success/failure tests, and legal notice review | WBO + TO / Q |
| P-007 | **Request an Assessment** `/request-an-assessment/` | R1 / Blocked | Commercial prospect: “How do I ask Cleanital to evaluate my facility need?” | Commercial-only disclosure; what an assessment request means; required and optional fields; privacy notice; non-commitment statement; success/failure states; service-area qualification | **Submit Assessment Request** / Explore Services | Blocked on form destination/system of record, access, retention, fallback, spam/rate controls, legal review, and forced-failure test | WBO + TO + LR / 6M |

---

## 4. Service Pages

### Service-Page Rule

Each service page explains service scope, method, variables, assessment inputs, quality approach, and use cases. It shall not become an industry page or publish fixed pricing, guaranteed availability, or unsupported completion times.

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| S-001 | **Services Overview** `/services/` | R1 / Planned | Prospect: “Which Cleanital service category fits my facility need?” | Commercial service introduction; recurring/daytime/floor-care/construction/project distinctions; cards for all approved services; assessment expectations; related industries | **Request an Assessment** / View Industries | Service list must match current capability; no unapproved service category | WBO / 6M |
| S-002 | **Recurring Commercial Janitorial Service** `/services/recurring-commercial-janitorial-service/` | R1 / Planned | Facility decision-maker: “Can Cleanital provide ongoing scheduled janitorial service?” | Definition; recurring scope variables; frequency and schedule factors; facility assessment; service planning; quality and communication; exclusions; related day porter/office/retail services | **Request an Assessment** / How We Work | No universal scope, fixed frequency, instant price, staffing promise, or guaranteed start date | WBO / 6M |
| S-003 | **Day Porter Service** `/services/day-porter-service/` | R1 / Planned | Facility or operations manager: “Can Cleanital support daytime or operating-hour facility needs?” | Definition; daytime support use cases; task and schedule variables; on-site coordination; communication; safety/access dependencies; distinction from recurring after-hours janitorial | **Request an Assessment** / Recurring Janitorial | Claims about coverage hours, response, or staffing require actual capacity and approval | WBO / 6M |
| S-004 | **Office Cleaning** `/services/office-cleaning/` | R1 / Planned | Office decision-maker: “What cleaning service does Cleanital provide for professional workplaces?” | Service definition; workplace scope variables; occupied-space considerations; schedule and access; assessment inputs; quality approach; related recurring and project services | **Request an Assessment** / Offices Industry Page | Must remain service-focused; avoid duplicating the offices industry page; no residential cues | WBO / 6M |
| S-005 | **Retail Cleaning** `/services/retail-cleaning/` | R1 / Planned | Retail operations decision-maker: “How can Cleanital support customer-facing retail environments?” | Service definition; customer-facing conditions; entrances, sales floor, support areas, restrooms, timing/access variables; quality and communication; related porter/floor-care services | **Request an Assessment** / Retail Industry Page | Must remain method/scope focused; no client logos or chain-specific claims without approval | WBO / 6M |
| S-006 | **Commercial Floor Care** `/services/commercial-floor-care/` | R1 / Planned | Facility decision-maker: “Which periodic or restorative floor-care approach may fit the floor condition?” | Parent-category explanation; assessment of floor type/condition/finish; periodic vs restorative care; strip-and-wax and scrub-and-recoat distinctions; preparation/access; outcome variables | **Request an Assessment** / Strip and Wax, Scrub and Recoat | Do not promise suitability without inspection; avoid unsupported floor-life or appearance guarantees | WBO / 6M |
| S-007 | **Strip and Wax** `/services/commercial-floor-care/strip-and-wax/` | R1 / Planned | Facility decision-maker: “When may a full strip-and-wax process be appropriate?” | Definition; candidate conditions; assessment and compatibility; preparation; high-level process; access/drying variables; limitations; related scrub-and-recoat | **Request an Assessment** / Commercial Floor Care | No guarantee that every floor can be stripped/waxed; claims and before/after images require evidence and permission | WBO / 6M |
| S-008 | **Scrub and Recoat** `/services/commercial-floor-care/scrub-and-recoat/` | R1 / Planned | Facility decision-maker: “When may an existing finish be refreshed rather than fully removed?” | Definition; candidate conditions; distinction from strip-and-wax; floor assessment; process overview; limitations; access/drying variables; related floor care | **Request an Assessment** / Strip and Wax | Do not represent as interchangeable with full restoration; no fixed cycle or durability promise | WBO / 6M |
| S-009 | **Post-Construction Cleaning** `/services/post-construction-cleaning/` | R1 / Planned | Contractor, property, or facility decision-maker: “Can Cleanital help prepare a commercial space after construction activity?” | Definition; project stage and readiness; dust/debris/residue scope variables; access and safety prerequisites; phased/final clean distinction where applicable; inspection and acceptance boundaries; related project cleaning | **Request an Assessment** / Construction Industry Page | No hazardous-material handling, regulatory clearance, or guaranteed turnover date unless separately approved | WBO / 6M |
| S-010 | **Project Cleaning** `/services/project-cleaning/` | R1 / Planned | Commercial decision-maker: “Can Cleanital perform a defined non-recurring cleaning project?” | Definition; examples of appropriate project categories without overpromising; scope development; site conditions; schedule/equipment variables; completion verification; distinction from recurring service | **Request an Assessment** / Services Overview | No “any job” language; project must remain within actual capability and approved safety boundaries | WBO / 6M |

---

## 5. Industry Pages

### Industry-Page Rule

Each industry page explains facility context, decision-maker concerns, relevant combinations of services, client responsibilities, and assessment questions. It shall not repeat a service page or promise legal/regulatory compliance.

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| I-001 | **Industries Overview** `/industries/` | R1 / Planned | Prospect: “Does Cleanital understand facilities like mine?” | Why context matters; five approved industry cards; needs vary by facility; relevant service combinations; assessment approach | **Request an Assessment** / Explore Services | No implication that listed industries are exhaustive or uniformly served | WBO / 12M |
| I-002 | **Daycare and Early Education Facilities** `/industries/daycare-and-early-education-facilities/` | R1 / Planned | Owner/operator: “How does Cleanital approach the needs of an early-education facility?” | Occupied and child-centered context; sanitation/presentation concerns; scheduling/access; high-touch and shared-space considerations; relevant services; client policies and responsibilities; assessment questions | **Request an Assessment** / Recurring Janitorial, Day Porter | No claim that cleaning guarantees licensing, inspection, health, or regulatory compliance; avoid children’s personal information | WBO / 12M |
| I-003 | **Retail Facilities** `/industries/retail-facilities/` | R1 / Planned | Retail operations/account manager: “How does Cleanital address customer-facing retail conditions?” | Customer experience and operating-hour context; entrances/sales/support/restroom needs; floor-care combinations; scheduling/access; multi-location variables; assessment questions | **Request an Assessment** / Retail Cleaning, Day Porter, Floor Care | Must differ from Retail Cleaning service page; named accounts/logos require permission | WBO / 12M |
| I-004 | **Offices and Professional Workplaces** `/industries/offices-and-professional-workplaces/` | R1 / Planned | Office/facility manager: “How does Cleanital plan around professional workplace needs?” | Occupied workplace context; shared spaces; privacy/access; schedule; presentation; recurring/project combinations; client responsibilities; assessment questions | **Request an Assessment** / Office Cleaning | Must differ from Office Cleaning service page; no security or confidentiality guarantee beyond actual controls | WBO / 12M |
| I-005 | **Commercial Properties** `/industries/commercial-properties/` | R1 / Planned | Property/facility decision-maker: “How can Cleanital support a commercial property with varied spaces and stakeholders?” | Property context; common/shared areas; tenant/customer considerations; service combinations; access/scheduling; communication; site-by-site assessment questions | **Request an Assessment** / Recurring Janitorial, Day Porter, Floor Care | Avoid implying property-management, maintenance, security, or universal building coverage | WBO / 12M |
| I-006 | **Construction and Post-Construction Projects** `/industries/construction-and-post-construction-projects/` | R1 / Planned | Contractor, owner, or property decision-maker: “How does Cleanital fit into commercial project readiness?” | Project context; sequencing and readiness; coordination; dust/debris/residue needs; relevant post-construction/project services; safety/access prerequisites; responsibility boundaries; assessment questions | **Request an Assessment** / Post-Construction Cleaning, Project Cleaning | No hazardous-remediation, code-compliance, inspection-pass, or turnover guarantee | WBO / 12M |

---

## 6. Resources and Trust Content

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| R-001 | **Resources Overview** `/resources/` | R1 / Planned | Prospect or client: “What practical information can help me understand commercial cleaning and Cleanital’s process?” | Resource purpose; FAQ link; future case-study/insight categories only if active; educational disclaimer; related services | **View Frequently Asked Questions** / Request an Assessment | Do not display empty content categories as active libraries | CO / 12M |
| R-002 | **Frequently Asked Questions** `/resources/frequently-asked-questions/` | R1 / Planned | Prospect: “What should I know before requesting service?” | Commercial focus; assessment meaning; service-area qualification; scheduling/pricing boundaries; service distinctions; portal routing only if active; contact guidance | **Request an Assessment** / Contact | Answers must not create new guarantees, prices, response promises, or city coverage claims | CO / 6M |
| R-003 | **Case Studies** `/resources/case-studies/` | D / Inactive | Prospect: “What documented outcomes has Cleanital produced?” | Publish only when at least one approved study exists; study index; scope/context; results; limitations; permission/anonymization | **Request an Assessment** / Related Service | Blocked on evidence, client permission or anonymization, result context, and approval; no empty index | WBO / 12M |
| R-004 | **Insights** `/resources/insights/` | D / Inactive | Commercial reader: “What useful facility-care guidance does Cleanital provide?” | Publish only with approved original articles; category/index; author/owner; review date; related pages | **Read Article** / Request an Assessment where relevant | No auto-generated volume, legal advice, copied content, or keyword/location page program | CO / 12M |

---

## 7. Opportunities

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| O-001 | **Careers** `/careers/` | R1 / Blocked | Prospective employee: “What employment opportunities and expectations may exist at Cleanital?” | Opportunity overview; general expectations; respectful/equal process language; application boundary; minimal interest form or active applicant route | **Express Career Interest** / Active Applicant Portal when approved | Blocked on intake destination, fields, retention, legal review, and actual opportunity wording; no job/compensation/start promise | WBO + LR / 6M |
| O-002 | **Contractor Opportunities** `/contractor-opportunities/` | R1 / Blocked | Contractor business: “What contractor relationships may Cleanital consider?” | Nature of opportunities; business/operating expectations; independence boundary; review process; minimal interest form or active contractor route | **Express Contractor Interest** / Active Contractor Portal when approved | Blocked on intake destination, fields, retention, legal review, and accurate contractor classification language; no work-volume promise | WBO + LR / 6M |

---

## 8. Portal Routing Pages

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| T-001 | **Client Portal** `/client-portal/` | C1 / Inactive | Existing client: “Where do I securely access my approved client experience?” | Intended users; secure-destination button; privacy-safe outage/fallback guidance; credential warning | **Continue to Client Portal** / Public Contact fallback | Publish only after destination, authentication, authorization, owner, outage, fallback, and privacy-safe URL pass activation | TO + WBO / Q |
| T-002 | **Worker Portal** `/worker-portal/` | C1 / Inactive | Worker: “Where do I securely access my approved worker experience?” | Intended users; secure-destination button; outage/fallback guidance; credential warning | **Continue to Worker Portal** / Approved worker support fallback | Same activation requirements; public page must not expose schedules, assignments, records, or tenant identifiers | TO + WBO / Q |
| T-003 | **Applicant Portal** `/applicant-portal/` | D / Inactive | Applicant: “Where do I continue an active application securely?” | Intended users; secure destination; fallback; credential warning | **Continue to Applicant Portal** | Publish only when applicant workflow exists and passes activation; Careers remains public entry point | TO + WBO / Q |
| T-004 | **Contractor Portal** `/contractor-portal/` | D / Inactive | Contractor: “Where do I access an approved contractor workflow securely?” | Intended users; secure destination; fallback; credential warning | **Continue to Contractor Portal** | Publish only when contractor workflow exists and passes activation; contractor-interest page remains public entry point | TO + WBO / Q |

---

## 9. Legal and Public Policy Pages

| ID | Page and URL | Release / Status | Primary Audience and Visitor Question | Required Content Sections | Primary / Secondary CTA | Claims, Evidence, and Dependencies | Owner / Review |
|---|---|---|---|---|---|---|---|
| L-001 | **Privacy Policy** `/privacy/` | R1 / Blocked | Any visitor: “What data does this implemented website collect, use, share, retain, and protect?” | Actual data categories; purposes; forms; processors; cookies/tracking; retention; choices/requests; contact; effective date | **Privacy Contact Method** | Launch blocker pending implemented data-flow inventory and qualified legal review; must match actual site | WBO + TO + LR / 12M |
| L-002 | **Website Terms of Use** `/terms/` | R1 / Blocked | Any visitor: “What terms govern use of the public website?” | Scope; informational nature; no service commitment; intellectual property; prohibited use; third-party links; disclaimers/limitations as legally approved; governing contact; effective date | None / Contact where appropriate | Launch blocker pending qualified legal review; shall not silently create service-contract terms | WBO + LR / 12M |
| L-003 | **Accessibility Statement** `/accessibility/` | R1 / Blocked | Visitor with an access need: “What accessibility work has actually been performed and how can I report a problem?” | Actual implementation approach; WCAG 2.2 AA target; known status without unsupported conformance claim; contact method; response process; date | **Report an Accessibility Issue** | Blocked on implementation review, public contact method, and legal review of wording | WBO + TO + LR / 12M |
| L-004 | **Cookie or Tracking Notice** `/cookies/` | C1 / Inactive | Any visitor: “What cookies or similar technologies are actually in use?” | Actual categories; purposes; vendors; duration/retention; choices; link to privacy policy; date | **Manage Preferences** when applicable | Publish only when implemented technologies require it; must match tracker/cookie inventory and legal review | WBO + TO + LR / 12M |

---

## 10. Content Drafting Order

Draft in this order because later pages depend on earlier positioning and service definitions:

1. Commercial positioning and approved factual source sheet.
2. Services Overview and individual service briefs.
3. How We Work.
4. Quality Assurance.
5. Request an Assessment instructions and form copy.
6. Home.
7. Service Areas.
8. Industries Overview and individual industry briefs.
9. About.
10. FAQ and Resources Overview.
11. Contact.
12. Careers and Contractor Opportunities.
13. Legal pages with qualified legal review.
14. Conditional portals and tracking notice only when activated.
15. Case studies and insights only when real approved content exists.

---

## 11. Required Page Record Fields

Before a page changes from Planned or Blocked to Approved for publication, record:

- Page ID.
- Canonical title.
- Canonical URL.
- Page family.
- Purpose.
- Intended audience.
- Primary visitor question.
- Content owner.
- Approver.
- Primary CTA.
- Claims and evidence location, or “none.”
- Related canonical pages.
- Form, privacy, portal, legal, and technical dependencies as applicable.
- Last-reviewed date.
- Next-review date.
- Publication status.

---

## 12. Matrix Acceptance Rules

A page may be implemented in staging when its structure is defined and placeholder content is clearly non-production.

A page may be published only when:

- Its Matrix purpose and visitor question are satisfied.
- Required sections are complete.
- Claims are approved and evidenced.
- CTA behavior is real and tested.
- Dependencies are closed.
- Service-area language is compliant.
- Service and industry paired pages pass the distinct-value test.
- Metadata, internal links, accessibility, responsive behavior, and review ownership pass.
- No placeholder asset, inactive portal, empty library, or unreviewed legal copy reaches production.
