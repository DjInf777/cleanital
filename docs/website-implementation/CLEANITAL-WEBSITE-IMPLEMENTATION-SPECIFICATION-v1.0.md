# Cleanital Website Implementation Specification

**Document ID:** CLN-WEB-IMP-001  
**Version:** 1.0.0  
**Status:** Ready for implementation after merge  
**Owner:** Website Business Owner  
**Technical Owner:** Edgar Henderson until reassigned  
**Repository:** `DjInf777/cleanital`  
**Canonical Domain:** `cleanital.com`  
**Authority:** Ratified Cleanital Website Governance Phase 1.2 and administrative correction release v1.2.1  
**Companion Artifact:** `PAGE-CONTENT-MATRIX-v1.0.md`  
**Change Tier:** Tier 2 implementation specification; it does not amend governance

---

## 1. Purpose

This Specification translates the ratified Cleanital website governance into build requirements.

It tells a developer, designer, content writer, contractor, or AI system what to build, how the public website must behave, how it must be validated, and what is prohibited.

Where this Specification conflicts with a ratified governance instrument, the governance instrument controls.

---

## 2. Product Objective

The replacement website must:

1. Establish Cleanital as a credible commercial janitorial and facility-cleaning company.
2. Explain the approved services clearly.
3. Help commercial decision-makers determine whether Cleanital may fit their needs.
4. Demonstrate operating discipline without making unsupported claims.
5. Generate qualified requests for assessment.
6. Present the public service area only as North Carolina and South Carolina.
7. Route users to active Corp4ce destinations only after each route passes its activation gate.
8. Remain a public presentation, intake, and routing layer rather than an operational system.

The primary business outcome is qualified commercial opportunity generation, not raw traffic volume.

---

## 3. Non-Goals

The public website shall not:

- Schedule or dispatch service.
- Create work orders.
- Track worker time, status, or assignments.
- Issue binding prices or instant quotes.
- Confirm service availability or start dates.
- Create active clients, workers, applicants, or contractors automatically.
- Process payments.
- Display private client, worker, applicant, contractor, or tenant records.
- Duplicate authenticated Corp4ce workflows.
- Publish city-, county-, metro-, neighborhood-, or “near me” service-area pages.
- Publish residential-cleaning positioning.
- Publish an inactive or unfinished portal destination.
- Publish claims lacking evidence and disclosure approval.

---

## 4. Implementation Principles

### 4.1 Static-First

The site should render public content statically or server-side without requiring a public application database for ordinary pages.

A database may be introduced only when a defined feature requires it and the system-of-record, retention, access, failure, and rollback rules are approved.

### 4.2 Progressive Enhancement

Core content, navigation, telephone links, email links, and form instructions must remain understandable without client-side animation or complex JavaScript.

### 4.3 Public by Design

The repository is public. No committed file may contain:

- Secrets or credentials.
- Production environment values.
- Private operational data.
- Client or worker records.
- Private logs, backups, invoices, contracts, or attachments.

### 4.4 One Canonical Subject Per Page

Every page must have one dominant visitor job and one canonical URL.

A service page explains the service. An industry page explains the facility context and relevant combinations of services.

### 4.5 No Phantom Capability

A page, form, portal, guarantee, metric, integration, or workflow may not be presented as active until the actual implementation and required approval exist.

---

## 5. Technology Selection Constraints

The framework and hosting implementation may be selected during build, but the selected stack must support:

- Semantic HTML.
- Server-rendered or statically generated public pages.
- Responsive layouts.
- Accessible forms and error handling.
- Per-page metadata and canonical URLs.
- XML sitemap and robots controls.
- Structured data where approved.
- Staging and production environment separation.
- Secret management outside the repository.
- Automated checks.
- Reproducible deployment and rollback.
- Low-dependency operation appropriate for a small company.

The build shall not adopt a CMS, database, page builder, or third-party script merely because it is convenient.

Any selected technology must have an assigned update owner.

---

## 6. Repository and File Structure

Recommended structure:

```text
/
├── .github/
├── docs/
│   ├── website-governance/
│   ├── website-implementation/
│   └── technical-ownership/
├── public/
│   ├── images/
│   ├── icons/
│   └── documents/
├── src/
│   ├── app-or-pages/
│   ├── components/
│   ├── content/
│   ├── forms/
│   ├── integrations/
│   ├── styles/
│   └── utilities/
├── tests/
└── scripts/
```

Equivalent framework-native paths are permitted when they preserve clear separation among content, components, forms, integrations, tests, and configuration.

All production changes shall proceed through branches and pull requests.

---

## 7. Release Model

### 7.1 Release 1 — Required Public Foundation

Release 1 includes:

- Home.
- About.
- How We Work.
- Quality Assurance.
- Service Areas.
- Contact.
- Request an Assessment.
- Services overview and all approved service pages.
- Industries overview and all approved industry pages.
- Resources overview and Frequently Asked Questions.
- Careers.
- Contractor Opportunities.
- Privacy Policy.
- Website Terms.
- Accessibility Statement.

### 7.2 Conditional Release 1 Pages

Publish only when the condition is met:

- Client Portal routing page — active destination approved.
- Worker Portal routing page — active destination approved.
- Cookie or Tracking Notice — implemented tracking requires it.

### 7.3 Deferred Pages

Do not publish until real content or active capability exists:

- Case Studies index and individual case studies.
- Insights index and individual articles beyond approved initial content.
- Applicant Portal.
- Contractor Portal.

A deferred page shall not be published as an empty placeholder.

---

## 8. Canonical Navigation

### 8.1 Desktop Primary Navigation

1. Services
2. Industries
3. How We Work
4. About
5. Resources
6. Service Areas
7. Request an Assessment

“Request an Assessment” must be visually distinguishable as the primary commercial action.

### 8.2 Utility Navigation

Utility navigation may contain:

- Contact.
- Careers.
- Contractor Opportunities.
- Active portal links.

Inactive portals must not appear.

### 8.3 Mobile Navigation

Mobile navigation must:

- Be operable by keyboard and assistive technology.
- Expose the same public destinations as desktop.
- Keep Request an Assessment prominent.
- Preserve visible focus.
- Close predictably after navigation.
- Avoid hover-only behavior.

### 8.4 Footer

Footer groups:

- Services.
- Industries.
- Company.
- Opportunities.
- Active portals.
- Legal.

The footer must include the state-level service-area statement and a link to Request an Assessment.

---

## 9. Global Page Layout

Every public page shall include:

1. Skip-to-content link.
2. Site header.
3. Main landmark with one page-level heading.
4. Page-specific content.
5. Contextual commercial call to action where appropriate.
6. Footer.

Legal and portal-routing pages may omit the commercial call-to-action block where inappropriate.

---

## 10. Reusable Components

The component library should include:

- Site header.
- Desktop and mobile navigation.
- Footer.
- Breadcrumbs for nested service and resource pages.
- Hero block.
- Section heading block.
- Service card.
- Industry card.
- Process-step group.
- Quality-control block.
- Evidence or trust block.
- Frequently asked question disclosure.
- Related-page links.
- Primary and secondary call-to-action block.
- Form field, field group, error summary, success state, and failure state.
- Portal-routing notice.
- Geographic qualification notice.
- Legal-content layout.
- Empty-state component for internal preview only; not for public placeholders.

Components must not hard-code unsupported claims or geographic details.

---

## 11. Visual and Brand Direction

The visual design shall communicate:

- Commercial professionalism.
- Operational competence.
- Cleanliness without residential maid-service imagery.
- Clear hierarchy.
- Calm confidence.
- Practical facility care.

### 11.1 Imagery

Prefer:

- Commercial facilities.
- Professional cleaning activity.
- Floors, workspaces, retail environments, and facility-care details.
- Equipment and methods where accurate.
- Real Cleanital work when permission and quality permit.

Avoid:

- Residential kitchens, bedrooms, and domestic maid-service cues.
- Generic handshake imagery as the primary proof of credibility.
- Images implying clients, certifications, employees, or results that are not real.
- Images exposing security-sensitive facility details.

### 11.2 Brand Assets

Logo, colors, typefaces, photography style, and icon style shall be implemented only from approved assets or an approved design decision.

Until approved assets exist, the build may use neutral development placeholders in non-production environments. Placeholder assets must not reach production.

### 11.3 Motion

Motion must be restrained, optional, and compatible with reduced-motion preferences.

No animation may delay access to content or the assessment form.

---

## 12. Page Template Requirements

### 12.1 Home Template

Required sections:

1. Commercial hero explaining what Cleanital does.
2. Clear statement that Cleanital focuses on commercial facilities and organizations.
3. Service summary.
4. Industry summary.
5. How Cleanital works.
6. Quality and accountability summary.
7. North Carolina and South Carolina service-area statement with qualification.
8. Evidence or credibility section using only approved facts.
9. Primary Request an Assessment call to action.
10. Active portal routing only when approved.

### 12.2 Service Overview Template

Required sections:

- Commercial service introduction.
- Service-category cards.
- Explanation of recurring, daytime, floor-care, construction, and project distinctions.
- Assessment expectations.
- Related industry links.
- Request an Assessment.

### 12.3 Individual Service Template

Required sections:

1. Service definition.
2. Problems or conditions addressed.
3. Typical scope.
4. Exclusions or variables.
5. How assessment works.
6. How service is planned and verified.
7. Appropriate use cases.
8. Related services.
9. Geographic qualification.
10. Request an Assessment.

The page must not publish fixed scope, frequency, price, guarantee, or completion time unless approved and supportable.

### 12.4 Industry Overview Template

Required sections:

- Why facility context matters.
- Approved industry cards.
- Explanation that needs vary by facility.
- Relevant service combinations.
- Assessment call to action.

### 12.5 Individual Industry Template

Required sections:

1. Facility context.
2. Common operating and presentation needs.
3. Decision-maker concerns.
4. Relevant combinations of services.
5. Cleanital’s role and boundaries.
6. Client responsibilities.
7. Industry-specific assessment questions.
8. Related service links.
9. Request an Assessment.

An industry page shall not state or imply guaranteed legal or regulatory compliance.

### 12.6 How We Work Template

Required sections:

- Inquiry and qualification.
- Assessment.
- Scope and proposal.
- Service setup.
- Communication.
- Quality verification.
- Correction and follow-up.
- Boundary statement that inquiry does not equal acceptance.

### 12.7 Quality Assurance Template

Required sections:

- Quality expectations.
- Service verification approach.
- Communication and issue reporting.
- Corrective-action approach.
- Evidence-backed claims only.
- No unsupported guarantees.

### 12.8 Service Areas Template

Required content:

- North Carolina.
- South Carolina.
- The exact qualification concept:

> Service availability depends on facility location, scope, scheduling requirements, and current operational capacity.

- Request an Assessment.

Prohibited:

- City lists.
- County lists.
- Clickable local maps.
- City anchors.
- Statewide guarantee language.

### 12.9 About Template

Required sections:

- Cleanital’s commercial identity.
- Purpose and operating approach.
- Leadership or company history using approved facts.
- Service philosophy.
- Public territory.
- Request an Assessment.

### 12.10 Resource Template

Required sections:

- Clear educational purpose.
- Accurate answer or guidance.
- Related services or industry pages only when relevant.
- Review date and content owner in the internal content record.
- No fabricated expertise, statistics, or legal advice.

### 12.11 Careers Template

Required sections:

- Type of opportunities Cleanital may offer.
- General expectations.
- Equal and respectful application language.
- No promise of employment, compensation, work hours, start date, or portal access.
- Approved career-interest form or route.

### 12.12 Contractor Opportunities Template

Required sections:

- Nature of contractor opportunities.
- Business and operational expectations.
- No promise of award, work volume, compensation, or start date.
- Approved contractor-interest form or route.

### 12.13 Legal Template

Required sections vary by document but must support:

- Readable long-form text.
- Effective or last-updated date.
- Clear headings.
- Contact method.
- Legal review status before production publication.

### 12.14 Portal Routing Template

Required sections:

- Intended user population.
- Clear secure-destination action.
- Privacy-safe fallback if unavailable.
- Warning not to submit credentials through public contact forms.
- No private identifiers in the public URL.

The page remains unpublished until the activation gate passes.

---

## 13. Service and Industry Distinct-Value Test

Before paired service and industry pages are approved:

- The service page must focus on scope, method, assessment, variables, and quality.
- The industry page must focus on facility context, decision-maker concerns, service combinations, and responsibilities.
- Fewer than one-third of substantive sections may be substantially duplicated.
- Metadata and headings must describe different visitor questions.
- Internal links must clarify the distinction rather than compete for the same query.

Failure requires consolidation or rewrite.

---

## 14. Public Territory Implementation

All general territory references shall use only:

- North Carolina.
- South Carolina.

A short heading or metadata title may omit the qualification only when the page contains the qualification in a reasonably discoverable location.

No route, content collection, metadata generator, schema generator, campaign template, or automated content process may create local service-area pages.

---

## 15. Forms

### 15.1 General Form Requirements

Every form must:

- Use visible labels.
- Identify required and optional fields.
- Provide field-level errors and an error summary.
- Preserve user-entered non-sensitive values after validation failure where safe.
- Avoid exposing submitted values in URLs.
- Use encrypted transport.
- Include spam and rate controls.
- Provide truthful success and failure states.
- Prevent duplicate submission during processing.
- Avoid logging full free-text content unless specifically approved.
- Provide a public privacy notice link.

### 15.2 Request an Assessment Form

Required fields:

- Contact name.
- Organization name.
- Email address.
- Phone number.
- State.
- Facility or organization type.
- Service needed.
- Brief description.
- Consent to be contacted about the request.

Accepted state choices:

- North Carolina.
- South Carolina.
- Other, only when clearly described as out-of-area interest rather than service availability.

Email validation must accept legitimate personal-domain addresses such as Gmail.

Recommended optional fields:

- Facility address or postal code.
- Number of locations.
- Approximate facility size.
- Desired frequency.
- Desired start period.
- Current service situation.
- Preferred contact method.
- Best contact time.

File upload is disabled for Release 1 unless a separate approved upload record is completed.

Required success message:

> Your request has been received for review. Cleanital will evaluate the location, scope, scheduling needs, and current capacity. Submission does not confirm service availability, pricing, scheduling, or acceptance of work.

Required failure behavior:

- Do not display success.
- Explain that the request was not confirmed.
- Provide a safe retry.
- Provide a Cleanital-controlled fallback contact method.
- Avoid creating duplicate records on retry.

### 15.3 General Contact Form

Minimum fields:

- Name.
- Organization, optional unless the inquiry is commercial.
- Email or telephone contact method.
- Inquiry category.
- Message.
- Consent to respond.

The form must direct assessment inquiries to the assessment form and must warn users not to submit credentials or sensitive information.

### 15.4 Career Interest Form

The Release 1 implementation shall collect only minimal interest information unless a governed applicant workflow is active.

It shall not collect Social Security numbers, government identification, health information, background-check information, or banking data.

### 15.5 Contractor Interest Form

The Release 1 implementation shall collect only minimal business-interest information unless a governed contractor workflow is active.

It shall not promise approval or work.

---

## 16. Form Routing and System of Record

No production form may launch until its routing record identifies:

1. Purpose and owner.
2. Approved fields.
3. Destination.
4. System of record.
5. Authorized access.
6. Success and failure behavior.
7. Retention and deletion.
8. Spam, rate, and duplicate controls.
9. Fallback owner.

### 16.1 Initial Routing Constraint

Until a Corp4ce intake destination passes activation, forms may route only to a Cleanital-controlled destination approved by the Website Business Owner and Technical Owner.

The implementation shall not invent a Corp4ce endpoint.

### 16.2 Required Pre-Implementation Decision

Before the assessment form is connected in staging, record:

- The exact receiving mailbox, queue, or system.
- The authoritative lead record.
- Who receives alerts.
- How failed delivery is detected.
- How duplicate requests are recognized.
- The initial retention period.

This is a build blocker for form integration, not for static page development.

---

## 17. Portal Routing

All portal routes are disabled by default.

A route may be enabled only after recording:

- Destination URL.
- Intended user population.
- Authentication test.
- Authorization test.
- Owner approval.
- Outage behavior.
- Fallback route.
- Confirmation that no private identifiers are exposed.

Until activation, omit the route entirely rather than publishing “coming soon.”

---

## 18. Metadata and Search Requirements

Every indexable page must have:

- Unique title.
- Unique meta description.
- Canonical URL.
- One page-level heading.
- Logical heading order.
- Crawlable internal links.
- Appropriate index or no-index directive.
- Social preview metadata using approved content and imagery.

### 18.1 XML Sitemap

The sitemap shall include only canonical, public, indexable pages.

It shall exclude:

- Staging.
- Internal previews.
- Error pages.
- Form confirmation states.
- Inactive portals.
- Deferred placeholders.
- Duplicate parameters.

### 18.2 Robots Controls

Staging and preview deployments must be blocked from indexing.

Production `robots.txt` must not accidentally block approved public pages.

### 18.3 Structured Data

Permitted when accurate:

- Organization.
- WebSite.
- BreadcrumbList.
- Service, where implementation and content support it.
- FAQPage only when visible questions and answers meet current implementation and search requirements.

Do not publish false office locations, local-business locations, aggregate ratings, reviews, prices, or service areas.

---

## 19. Analytics Event Specification

Analytics is optional until an approved vendor and privacy treatment are selected.

When implemented, use an event taxonomy that measures business journeys without capturing sensitive form content.

Minimum approved event concepts:

| Event | Trigger | Prohibited Data |
|---|---|---|
| `assessment_view` | Assessment page viewed | Form values |
| `assessment_start` | First meaningful form interaction | Field contents |
| `assessment_validation_error` | Submission blocked by validation | Entered values |
| `assessment_submit_success` | Confirmed destination acceptance | Message text, phone, email |
| `assessment_submit_failure` | Confirmed delivery failure | Submitted content |
| `contact_submit_success` | Confirmed contact delivery | Submitted content |
| `portal_route_click` | Approved portal link selected | Credentials, private IDs |
| `service_cta_click` | Service-page assessment CTA selected | Personal data |
| `industry_cta_click` | Industry-page assessment CTA selected | Personal data |

Analytics shall not determine whether service is accepted.

---

## 20. Accessibility Requirements

The implementation target is WCAG 2.2 Level AA.

Minimum release acceptance:

- All functionality is keyboard operable.
- Focus is visible and logical.
- Skip navigation works.
- Header, navigation, main, and footer landmarks are present.
- One meaningful page-level heading exists.
- Form labels, instructions, required states, error summary, and field errors are programmatically connected.
- Errors do not rely on color alone.
- Text and controls meet approved contrast checks.
- Content remains usable at browser zoom and narrow widths.
- Meaningful images have useful alternatives.
- Decorative images are ignored appropriately.
- Motion respects reduced-motion preference.
- Dialogs and mobile navigation manage focus correctly.
- Assessment, contact, and active portal journeys are tested without a mouse.

The Accessibility Statement must describe actual implementation status and a contact method. It must not claim formal conformance without supportable evaluation.

---

## 21. Responsive Requirements

The website must support:

- Small mobile screens.
- Larger mobile screens.
- Tablets.
- Standard desktop widths.
- Large screens without uncontrolled line length.

Acceptance shall be based on content behavior rather than specific device brands.

No critical action may be hidden only because of viewport size.

---

## 22. Internal Performance Budgets

The following are internal launch targets, not public guarantees:

- Primary public pages should render meaningful content promptly on ordinary mobile connections.
- Hero media must not block the page heading or primary action.
- Images must be appropriately sized and compressed.
- Fonts must be limited and loaded responsibly.
- Third-party scripts must be minimized.
- Layout movement after initial render must be minimized.
- JavaScript shipped to public content pages must be justified.

The build shall record measured results for Home, Request an Assessment, one individual service page, and one individual industry page before launch.

---

## 23. Security Requirements

Before launch:

- HTTPS is enforced.
- Secrets are stored outside public code.
- Production, staging, and local configuration are separated.
- Administrative access uses least privilege and MFA where supported.
- Forms have server-side validation.
- User content is escaped or sanitized.
- Rate limiting and spam controls are active.
- Security headers are reviewed.
- Dependencies are inventoried and have an update owner.
- Error messages do not expose stack traces, keys, internal paths, or sensitive values.
- Logs avoid unnecessary personal data.
- Backups and rollback are tested.

No public form may write directly to an unrestricted Corp4ce database.

---

## 24. Environment Requirements

### Local

- Synthetic or approved test data only.
- No production secrets.
- Local environment files ignored by Git.

### Staging

- Intended hostname: `staging.cleanital.com`.
- Search indexing prohibited.
- Non-production indicator visible.
- Separate configuration and secrets.
- No real portal activation unless expressly approved for testing.
- No real client communication without controlled test recipients.

### Production

- Canonical host: `cleanital.com`.
- Deploy only from an identifiable commit or release.
- Pre-deployment backup required for material release.
- Post-deployment smoke test required.
- Rollback target recorded.

---

## 25. Testing Requirements

### 25.1 Automated

At minimum:

- Build succeeds.
- Internal links resolve.
- Governance-integrity check passes.
- No secret pattern or environment file is committed.
- Required metadata exists on indexable pages.
- Sitemap excludes non-public routes.
- Form validation unit or integration tests cover required fields and invalid input.
- Success cannot be displayed on simulated delivery failure.

### 25.2 Manual

Test:

- Primary navigation on desktop and mobile.
- Keyboard operation.
- Focus order and visibility.
- Assessment form success and forced failure.
- Contact form success and forced failure.
- Duplicate-click behavior.
- Error recovery.
- Responsive layouts.
- Major current browsers supported by the selected stack.
- Staging no-index controls.
- Legal links.
- Geographic wording.
- No city-page or inactive-portal exposure.

### 25.3 Content Review

Verify:

- Commercial positioning.
- Service accuracy.
- Service/industry distinction.
- Claims evidence.
- State-level territory only.
- Calls to action.
- No residential offer.
- No unsupported compliance promise.
- No private information.

---

## 26. Legal Review Gate

Before production launch, a qualified legal reviewer must review the implemented:

- Privacy Policy.
- Website Terms.
- Cookie or tracking notice and consent treatment, when applicable.
- Assessment and contact consent language.
- Career and contractor collection.
- Marketing email, telephone, and text practices.
- Accessibility Statement wording.
- Material claims, testimonials, guarantees, or client disclosures.

Draft legal pages may exist in staging but must be clearly marked as pending legal review.

---

## 27. Deployment and Rollback

Each material production release record must identify:

- Source commit or tag.
- Deployer.
- Date and time.
- Backup confirmation.
- Environment configuration version.
- Validation completed.
- Known risks.
- Previous known-good release.
- Rollback procedure.
- Result.

A failed assessment form, exposed secret, broken TLS, inaccessible primary journey, or false public commitment requires disablement or rollback rather than waiting for a later routine release.

---

## 28. Build Sequence

### Stage A — Foundation

- Select implementation stack.
- Establish app structure.
- Establish styling and component conventions.
- Implement header, navigation, footer, metadata, and layout.
- Configure staging and production separation.
- Add baseline automated checks.

### Stage B — Core Conversion

- Home.
- Service Areas.
- Request an Assessment page.
- Assessment form presentation and validation.
- Contact page and form.
- Routing destination decision and integration.
- Success and forced-failure testing.

### Stage C — Commercial Content

- Services overview and individual service pages.
- Industries overview and individual industry pages.
- How We Work.
- Quality Assurance.
- About.
- Resources overview and FAQ.

### Stage D — Opportunities and Conditional Routing

- Careers.
- Contractor Opportunities.
- Active portal routes only after activation.

### Stage E — Assurance and Launch

- Legal pages and legal review.
- Accessibility review.
- Analytics decision and implementation if approved.
- Performance measurement.
- Backup and restore test.
- Redirect and indexing review.
- Founder launch authorization.

---

## 29. Implementation Decisions Still Required

These decisions are intentionally not invented by this Specification:

| Decision | Required By | Launch Impact |
|---|---|---|
| Web framework and deployment method | Stage A | Build blocker |
| Approved logo, color, type, and image assets | Before visual production approval | Release requirement; placeholders prohibited in production |
| Assessment-form destination and system of record | Before Stage B integration | Form launch blocker |
| Contact-form destination | Before Stage B integration | Form launch blocker |
| Career and contractor intake destination | Before Stage D integration | Respective page/form blocker |
| Active Corp4ce portal URLs | Before portal publication | Portal blocker only |
| Analytics vendor and consent treatment | Before analytics implementation | Analytics may remain disabled |
| Legal reviewer and approved legal copy | Before production launch | Launch blocker |
| Public fallback contact details | Before form testing | Form launch blocker |
| Evidence approved for Home and quality sections | Before publication of the claim | Claim blocker only |

Static page structure and non-claim draft content may proceed while these decisions remain open.

---

## 30. Definition of Done

A page is done when:

- Its purpose and audience match the Page Content Matrix.
- Required sections are present.
- Content is approved.
- Material claims have evidence.
- Metadata is unique and accurate.
- Links work.
- Responsive and keyboard behavior pass.
- Relevant form or portal dependencies pass.
- Geographic wording is compliant.
- No prohibited data or workflow is exposed.
- Owner and review date are recorded.

The website is ready for launch only when all Launch Blockers in CLN-WEB-CTL-010 are satisfied or resolved by a valid Tier 3 exception, all applicable legal review is complete, and the Founder or Website Business Owner records production authorization.
