# Website Governance Operating and Launch Control

**Document ID:** CLN-WEB-CTL-010  
**Version:** 1.2.0  
**Status:** Ready for Founder Ratification  
**Authority:** CLN-WEB-CON-001  
**Owner:** Website Business Owner  
**Applies To:** Governance corpus control, proportionality, materiality, pre-launch validation, minimum technical controls, and Phase 2 planning  
**Effective Date:** Upon ratification  
**Review Cycle:** Quarterly during build; annual after stable launch  
**Supersedes:** CLN-WEB-CTL-010 v1.0.0  

---

## 1. Intended Reader

This corpus has two intended uses:

### Primary Implementation Reader

A developer, designer, content writer, contractor, or AI system building or changing `cleanital.com`.

For this reader, the corpus is a constraint set: it defines what may be built, published, collected, promised, or routed.

### Primary Operating Owner

The Cleanital Founder or designated Website Business Owner.

For this reader, the corpus uses proportional controls so routine work remains practical for a micro-sized company.

The corpus shall not be operated as if Cleanital has a large governance department.

---

## 2. Canonical Corpus Control

The canonical governance location is:

`/docs/website-governance/`

in the repository that controls deployment of `cleanital.com`.

Until that repository is established, the latest Founder-ratified package and its durable approval reference are canonical.

Controls:

- One canonical editable copy exists for each document.
- Published or exported copies are informational.
- Every file carries a document ID, version, status, owner, and supersession reference.
- The canonical files reside on a protected default branch where the repository platform supports branch protection.
- Changes to ratified files are made through a pull request or equivalent reviewed change request.
- A `CODEOWNERS` rule or equivalent assigns the Founder or Website Business Owner as required reviewer for `/docs/website-governance/`.
- Direct pushes to the protected branch are disabled where supported.
- Repository administration, recovery methods, and multi-factor authentication remain under Cleanital control.
- Each ratified package is identified by version and a durable release reference, tag, or checksum.
- An emergency direct correction must be documented and reconciled through the applicable change record before the next production release.
- Superseded versions are retained only when needed for governance evidence or rollback.
- Build prompts, temporary review notes, and implementation chats are not governing instruments.
- A newer timestamp does not create authority.
- Cross-references summarize; the named “Canonical Rule Ownership” document controls.

---

## 3. Authority Map

| Doctrine | Normative Home |
|---|---|
| Constitutional authority, canonical domain, role authority | CLN-WEB-CON-001 |
| Website/Corp4ce/internal boundary | CLN-WEB-POL-002 |
| Sitemap, taxonomy, URLs, page distinction | CLN-WEB-STD-003 |
| Exact public service-area rule | CLN-WEB-POL-004 |
| Content lifecycle, claims, evidence | CLN-WEB-STD-005 |
| Voice and public positioning | CLN-WEB-STD-006 |
| Primary conversion and public intake | CLN-WEB-POL-007 |
| Privacy, forms, tracking, processors, incidents | CLN-WEB-POL-008 |
| Material decisions and exceptions | CLN-WEB-REG-009 |
| Materiality, proportionality, repository protection, accessibility target, launch gates, and deferred Phase 2 triggers | CLN-WEB-CTL-010 |

When a summary conflicts with the normative home, the normative home controls.

---

## 4. Materiality Test

A change is **material** when it does one or more of the following:

- Changes a governing rule or public promise.
- Changes the canonical domain.
- Changes the website/Corp4ce/internal boundary.
- Changes a system of record.
- Adds or removes a top-level page family or primary navigation item.
- Changes a canonical URL without a redirect plan.
- Changes the approved service area or geographic presentation model.
- Changes the primary commercial call to action or submission meaning.
- Adds a required field.
- Adds a data category, tracker, cookie, upload, processor, or consent purpose.
- Creates or changes an authenticated route.
- Creates an automated decision, price, schedule, acceptance, or operational state.
- Adds or changes a material public claim, guarantee, testimonial, client identification, certification, or statistic.
- Changes a legal, privacy, security, accessibility, or retention commitment.
- Creates a significant risk of privacy harm, security exposure, false commitment, user exclusion, or duplicate operational records.
- Corrects a live defect that could materially influence a user’s decision or rights.

When uncertain, use the higher tier unless the owner documents why the lower tier is sufficient.

---

## 5. Proportionality Tiers

### Tier 1 — Low Impact

Examples:

- Spelling and grammar.
- Non-substantive formatting.
- Image compression without meaning change.
- Fixing a broken internal link to the intended destination.
- Minor help text that does not change required information or consent.
- Updating a review date after completed review.

Control:

- Lightweight change log.
- Editor verification.
- No Founder decision required.

### Tier 2 — Medium Impact

Examples:

- New resource article.
- Routine service-page rewrite that preserves scope.
- Page creation inside an approved family.
- Non-material URL or navigation-order adjustment.
- New approved image.
- Temporary campaign page within existing rules.
- Form layout change without new data or purpose.

Control:

- Standard change record.
- Owner approval.
- Applicable content, accessibility, and technical validation.

### Tier 3 — High Impact

Examples:

- Any material change under §4.
- Constitutional or policy amendment.
- New system integration or system-of-record assignment.
- Service-area change.
- New required form data or consent.
- Portal activation.
- Public guarantee.
- Legal notice change.
- Incident-driven material correction.

Control:

- Full decision record.
- Required reviewers.
- Founder approval where specified.
- Implementation, validation, and rollback evidence.

---

## 6. Minimum Technical Controls Before Launch

Before `cleanital.com` is declared production-ready:

### Domain and Access

- Domain ownership is under a Cleanital-controlled account.
- Registrar and DNS accounts use multi-factor authentication.
- Recovery methods are controlled and documented.
- Access is limited to necessary administrators.
- No shared default administrator credential remains.

### Transport and Hosting

- Valid TLS is enforced.
- HTTP redirects safely to HTTPS.
- Hosting ownership and renewal are documented.
- Production and development secrets are separated.
- Secrets are not stored in public code.

### Backup and Recovery

- Website content and configuration are backed up.
- Restore steps are documented.
- At least one restore test is completed before launch.
- Rollback to the prior deployment is possible.

### Forms and Routing

- Every public form has successful-delivery and forced-failure tests.
- False success is impossible.
- Spam and rate controls are active.
- The destination owner confirms receipt.
- No sensitive data is logged unnecessarily.

### Portals and Integrations

- Only active portals are linked.
- Authentication and authorization are tested.
- Outage behavior is defined.
- Public URLs expose no private identifiers.
- Integration disable or rollback is documented.

### Operations

- Technical Owner and Website Incident Owner are named.
- Certificate, domain, hosting, and critical vendor renewals are monitored.
- Uptime or availability checking exists.
- Broken-link checking exists.
- Dependencies and plugins have an update owner.
- Production access removal is possible.

---

## 7. Accessibility Baseline

The implementation target is WCAG 2.2 Level AA.

Before launch:

- Keyboard navigation is tested.
- Focus visibility and order are tested.
- Headings and landmarks are logical.
- Forms have labels, instructions, and understandable errors.
- Contrast is checked.
- Meaningful images have alternatives.
- The site works at common mobile widths and zoom levels.
- Critical information is not conveyed by color alone.
- Portal-routing and assessment paths are tested without a mouse.

The public Accessibility Statement shall describe actual status and contact methods.

Do not state “WCAG 2.2 AA compliant” or equivalent unless a supportable conformance evaluation exists.

---

## 8. Legal Review Gate

Before launch, a qualified legal reviewer shall review the actual implemented:

- Privacy notice.
- Website Terms.
- Cookie or tracking notice and consent approach.
- Assessment and contact consent.
- Careers and contractor collection.
- Marketing email practices.
- Call and text practices.
- Accessibility statement wording.
- Claims, guarantees, testimonials, and client disclosures where material.

Internal governance approval does not replace legal review.

---

## 9. Consolidated Pre-Launch Checklist

### 9.1 Gate Labels

- **[B] Launch Blocker:** Failure blocks production launch. A blocker may be excepted only through a Tier 3 Founder-approved exception that is lawful, time-limited, safeguarded, and does not contradict the Constitution.
- **[R] Release Requirement:** Must be completed before launch or have an approved owner, correction date, and written risk disposition. A Release Requirement may not be deferred when the failure also meets the Launch Blocker definition.
- **[A] Advisory:** Recommended operational improvement that may be completed after launch without a formal exception.

A condition is a Launch Blocker when failure could cause a false public commitment, privacy or security harm, loss of domain or administrative control, inaccessible completion of a critical user journey, unlawful or misleading publication, exposure of private records, or violation of a constitutional prohibition.

### Authority and Scope

- [ ] **[B]** The Phase 1.2 package is Founder-ratified.
- [ ] **[B]** The canonical domain is `cleanital.com` and is controlled by Cleanital.
- [ ] **[B]** Every public feature fits CLN-WEB-POL-002.
- [ ] **[B]** No prohibited operational workflow exists.
- [ ] **[B]** Every published Corp4ce portal link passes the activation gate.
- [ ] **[R]** The canonical governance files are stored under the repository protections required by §2.

### Structure and Content

- [ ] **[R]** The sitemap conforms to CLN-WEB-STD-003.
- [ ] **[B]** No prohibited city-level, doorway, or false local-office page exists.
- [ ] **[R]** Service and industry pairs pass the distinct-value review.
- [ ] **[R]** Every substantive page has an owner and review date.
- [ ] **[B]** Every material public claim has current evidence and approval.
- [ ] **[R]** Commercial-facility positioning appears on the Home and assessment pages.
- [ ] **[B]** Geographic statements comply with CLN-WEB-POL-004.
- [ ] **[R]** Broken links, orphan pages, titles, descriptions, redirects, and indexing directives are reviewed.

### Forms and Data

- [ ] **[B]** The form and data inventory is complete.
- [ ] **[B]** Forms collect only approved and necessary data.
- [ ] **[R]** Personal-domain email addresses are accepted for legitimate business inquiries.
- [ ] **[B]** Implemented consent and notice language receives the required legal review.
- [ ] **[B]** Success, forced-failure, retry, duplicate, spam, and rate-control paths are tested.
- [ ] **[B]** Retention, deletion, access, and system-of-record rules are assigned.
- [ ] **[B]** Trackers, cookies, and processors match the public notices and approved inventory.
- [ ] **[B]** No sensitive form content is exposed in URLs, client-side code, analytics, or unnecessary logs.

### Technical and Security

- [ ] **[B]** Domain, registrar, DNS, hosting, and recovery ownership are controlled by Cleanital.
- [ ] **[B]** Multi-factor authentication and least-privilege administrative access are active.
- [ ] **[B]** TLS is valid and HTTPS is enforced.
- [ ] **[B]** Secrets are protected and separated from public code.
- [ ] **[B]** Backups exist and at least one restore test succeeds.
- [ ] **[B]** Production rollback or integration-disable procedures are usable.
- [ ] **[B]** The Technical Owner and Website Incident Owner are named.
- [ ] **[R]** Uptime, certificate, domain, hosting, dependency, and critical-vendor monitoring is assigned.
- [ ] **[R]** Production access can be reviewed and removed promptly.

### Accessibility and Usability

- [ ] **[B]** The assessment, contact, and published portal-routing journeys are operable by keyboard and provide understandable form labels, instructions, focus, and errors.
- [ ] **[B]** No critical content or action depends on color alone.
- [ ] **[B]** No unsupported accessibility-conformance claim is published.
- [ ] **[R]** A WCAG 2.2 Level AA implementation review covers headings, landmarks, contrast, alternatives, zoom, responsive behavior, and other applicable criteria.
- [ ] **[R]** Non-blocking accessibility findings have an owner and remediation date.

### Legal, Measurement, and Launch

- [ ] **[B]** The implemented privacy, terms, tracking, consent, communication, accessibility-statement, and material-claim language receives the required legal review.
- [ ] **[B]** “Request an Assessment” remains the primary commercial conversion.
- [ ] **[R]** Qualified-opportunity measures and conversion definitions are documented.
- [ ] **[B]** Analytics exclude credentials, sensitive form content, and unapproved personal data.
- [ ] **[R]** Search indexing, canonical tags, redirects, and analytics verification are completed.
- [ ] **[B]** The Founder or Website Business Owner records production-launch authorization.

### 9.2 Launch Disposition

A failed **[B]** item blocks launch until corrected or resolved by a valid Tier 3 exception.

A failed **[R]** item requires a recorded owner, correction date, risk disposition, and Website Business Owner approval before launch.

An **[A]** item does not block launch and may be tracked in the ordinary operating backlog.

---

## 10. Deferred Phase 2 Doctrine

Phase 2 documents shall not be written merely to complete a planned document set.

A Phase 2 instrument is authorized only when the live build, launch validation, legal review, operational experience, or a material change demonstrates that the current corpus is insufficient.

The Website Business Owner shall first determine whether the gap can be resolved by:

1. Applying an existing rule.
2. Adding a concise control to CLN-WEB-CTL-010.
3. Recording a material decision or exception.
4. Creating a narrowly scoped Phase 2 instrument.

Potential instruments and their creation triggers are:

| Potential Instrument | Creation Trigger |
|---|---|
| Website Security and Technical Operations Standard | Hosting, deployment, access, backup, vulnerability, vendor, or incident complexity can no longer be managed reliably through §6 |
| Website Accessibility and Usability Standard | Repeated accessibility defects, formal audit requirements, remediation backlog, or accessibility-statement obligations exceed §7 |
| Website Analytics and Performance Measurement Standard | Multiple analytics tools, attribution disputes, sensitive-data risks, or recurring metric-definition conflicts arise |
| Portal Routing and Corp4ce Integration Standard | More than one active portal or integration creates recurring identity, error, routing, outage, or system-of-record decisions |
| Claims, Testimonials, and Case Study Standard | Public evidence volume or permission complexity exceeds CLN-WEB-STD-005 |
| Website Legal Review Record | Legal review produces recurring conditions, renewal dates, unresolved advice, or multiple implemented notices requiring controlled tracking |

The absence of a Phase 2 document is not itself a governance gap when the Phase 1.2 corpus controls the issue adequately.

Phase 2 may not weaken Phase 1.2 without the applicable amendment.

---

## 11. External Standards Basis

The accessibility target is based on the W3C Web Content Accessibility Guidelines (WCAG) 2.2 and its Level AA conformance model.

Commercial-email legal review shall use current Federal Trade Commission CAN-SPAM rules and guidance.

Automated, prerecorded, marketing call, and text legal review shall use current Federal Communications Commission TCPA rules and guidance.

Because these external requirements can change, the legal and technical owners shall verify current official sources at implementation and review time.
