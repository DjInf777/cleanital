# Website Scope and System Boundary Policy

**Document ID:** CLN-WEB-POL-002  
**Version:** 1.2.0  
**Status:** Ready for Founder Ratification  
**Authority:** CLN-WEB-CON-001  
**Owner:** Website Business Owner  
**Canonical Rule Ownership:** Public website, Corp4ce, and internal-operation boundaries  
**Effective Date:** Upon ratification  
**Review Cycle:** Annual and before a material workflow or integration expansion  
**Supersedes:** CLN-WEB-POL-002 v1.1.0  

---

## 1. Purpose

This Policy defines what the public website owns, what Corp4ce owns, and what Cleanital’s internal operations own.

It prevents duplicate systems, conflicting records, insecure exposure, and confusion between public inquiry and accepted work.

---

## 2. Governing Boundary

The public website owns public presentation, limited intake, and routing.

Corp4ce owns implemented and approved authenticated workflows and operational records.

Cleanital’s internal operating process owns commercial judgment, commitments, execution, and exceptions.

A feature belongs on the public website only when it can operate safely without duplicating or controlling private business operations.

---

## 3. Definitions

**Public presentation:** Information intended for general access.  

**Public intake:** Minimum information collected to begin a governed process.  

**Routing:** Directing a user to a destination without reproducing that destination’s workflow.  

**Operational workflow:** A process that creates, changes, approves, schedules, assigns, verifies, bills, pays, or closes business activity.  

**System of record:** The authoritative source for a governed record or state.  

**Active portal:** A specific Corp4ce destination that has passed implementation, security, routing, and owner approval.  

---

## 4. Public Website Responsibilities

The website may own:

- Public company identity.
- Service and industry descriptions.
- Public quality and process explanations.
- Approved case studies and resources.
- Public territory presentation under CLN-WEB-POL-004.
- Assessment, contact, career, and contractor-interest intake under CLN-WEB-POL-007 and CLN-WEB-POL-008.
- Legal notices.
- Active portal entry links.
- Approved website analytics.
- Website availability and security controls.

Public intake ends when the submission reaches its approved system of record.

---

## 5. Corp4ce Responsibilities

Where implemented and approved, Corp4ce is the system of record for:

- Authenticated client, worker, applicant, contractor, and administrator access.
- Client accounts, locations, and operational records.
- Work orders.
- Scheduling and dispatch.
- Worker status changes.
- Attachments and service photos.
- Service verification.
- Quality records.
- Billing and invoices.
- Operational communications.
- Role and entitlement enforcement.
- Audit evidence.

A named portal remains unavailable for public routing until activation is recorded.

---

## 6. Internal Cleanital Responsibilities

Internal operating processes own:

- Opportunity qualification.
- Capacity and route-density decisions.
- Facility assessment.
- Scope definition.
- Pricing.
- Proposals.
- Contracting.
- Staffing and contractor decisions.
- Scheduling authority.
- Work assignment.
- Service delivery.
- Quality correction.
- Account management.
- Client escalation.
- Collections and financial decisions.

The public website may initiate these processes but shall not make final decisions.

---

## 7. Boundary Matrix

| Capability | Public Website | Corp4ce | Internal Cleanital |
|---|---|---|---|
| Explain services | Public source | May reference | Approves accuracy |
| Request assessment | Collect and route | May receive/store | Qualifies |
| Binding price | Prohibited | Only if separately governed | Authoritative |
| Confirm service | Prohibited | Records approved commitment | Authoritative |
| Schedule or dispatch | Prohibited | Operational owner | Authorizes |
| Work-order status | Prohibited | Operational owner | Supervises |
| Private records | Prohibited | Operational owner | Authorized use |
| Career/contractor interest | Collect and route | May own workflow | Decides |
| Invoice access | Route only | Operational owner | Billing authority |
| Portal authentication | Link only | Authoritative | Access governance |
| Public analytics | Website owner | No required duplication | Uses aggregate insight |

---

## 8. Public Form Boundary

A public form may:

- Validate approved fields.
- Transmit a submission.
- Provide a truthful receipt or failure message.
- Assign a submission reference.
- Record technical delivery status.

A public form shall not:

- Accept an applicant or contractor.
- Confirm a service date.
- Issue a binding quote.
- Create an active client or worker identity without governed review.
- Expose internal workflow state.
- Collect portal credentials.

---

## 9. Integration Minimum Record

Every integration requires the following seven core items:

1. Purpose and owner.
2. Data sent or received.
3. System of record.
4. Authentication and authorization method.
5. Failure and duplicate behavior.
6. Logging and retention.
7. Rollback or disable method.

The following are added only when relevant:

- Retry logic.
- External processor terms.
- Sensitive-data safeguards.
- User notice or consent.
- Uptime dependency.
- Incident escalation.

Direct unrestricted public-database access to Corp4ce is prohibited.

---

## 10. Portal Activation Gate

A portal link may be published only when:

- The destination exists.
- Authentication works.
- Authorization has been tested.
- The correct user population is defined.
- The public route does not expose private identifiers.
- An owner has approved the destination.
- Outage behavior is defined.
- The link has been recorded as active.

A placeholder, planned route, screenshot, or unfinished Corp4ce page is not an active portal.

---

## 11. New Feature Classification

Every proposed feature shall be classified as:

1. Public presentation.
2. Public intake.
3. Public routing.
4. Public technical operation.
5. Authenticated operational workflow.
6. Internal operational workflow.

Classes 5 and 6 do not belong on the public website without constitutional and boundary amendment.

---

## 12. Materiality and Change Control

Materiality is determined under CLN-WEB-CTL-010.

A change is automatically material to this Policy when it:

- Moves a capability between systems.
- Changes a system of record.
- Creates or modifies operational state.
- Exposes new private data.
- Creates a new authenticated route.
- Allows a public user to trigger an internal commitment.

Routine destination corrections that do not change purpose, data, access, or state may use the lightweight change log.

---

## 13. Exceptions and Evidence

A boundary exception requires Founder approval under CLN-WEB-REG-009.

The owners shall be able to produce:

- Current form inventory.
- Current integration inventory.
- Active portal inventory.
- System-of-record assignments.
- Approved exceptions.
- Latest material boundary decisions.
