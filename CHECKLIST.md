# Committee Review Checklist: Outstanding [CONFIRM] Items

**The Friends of Grace Dieu Priory (Registered Charity No. 1117921)**  
*Document prepared for Trustee Review & Sign-Off*  
*Last updated: 18 October 2026*

---

## Executive Summary

During the digital architecture redesign and content migration from the legacy FrontPage website, several factual contradictions, missing postal tariffs, and truncated officer names were flagged.

This checklist provides the charity committee with a clear, prioritised set of questions to review and resolve. Once confirmed, these updates can be edited directly into the corresponding Markdown content files without touching any application code.

---

## 1. Trustee & Officer Directory Confirmation

| Item # | Item Description | Current Staged Value | Questions for Committee | Sign-Off Action / File |
| :--- | :--- | :--- | :--- | :--- |
| **1.1** | **Events Coordinator Surname** | `David Whitt` | The legacy website truncated the name as *"David Whit"*. Is the canonical spelling **David Whitt** or **David White**? | Update [`src/pages/contact.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/contact.astro) and [`CONTENT-AUDIT.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/CONTENT-AUDIT.md). |
| **1.2** | **Public Contact Phone Numbers** | Web inquiry forms route to role-based emails (`info@`, `education@`, `publications@`, `volunteer@`). | Do officers (Malcolm Allsop, Ann Petty) prefer keeping their landline phone numbers visible on public pages, or would they prefer routing exclusively through charity email aliases to eliminate spam? | Update [`src/pages/contact.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/contact.astro) & [`src/pages/shop.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/shop.astro). |
| **1.3** | **Official Domain Email Routing** | `info@`, `education@`, `shop@`, `events@` (`@gracedieupriory.org.uk`) | Have domain forwarders been set up with your DNS host (e.g. 123-Reg, Cloudflare) pointing these aliases to officer inboxes (`@yahoo.co.uk`, `@sky.com`)? | DNS MX / Forwarding configuration by domain administrator. |
| **1.4** | **Treasurer & Officer Roster** | Chairman, Secretary, Treasurer, Site Warden | Would the committee like a full leadership table with photos published on the `/about` route? | Update [`src/pages/about.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/about.astro). |

---

## 2. Event Calendar & Scheduling Confirms

| Item # | Event / Occasion | Conflicting Legacy Data | Decision Required by Committee | Frontmatter File to Edit |
| :--- | :--- | :--- | :--- | :--- |
| **2.1** | **Carols in the Cloisters Date** | Source line 28 states **6th December**; source line 77 states **7th December**. | In 2026, 6 Dec is Sunday and 7 Dec is Monday. Which date is officially booked with the choir and brass ensemble? | [`src/content/events/carols-in-the-cloisters.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/events/carols-in-the-cloisters.md) |
| **2.2** | **Carols Admission & Lanterns** | Staged as *Free Admission (Voluntary Retiring Collection)*. | Are admission wristbands or lanterns sold in advance, or is it 100% voluntary retiring donations at the gate? | [`src/content/events/carols-in-the-cloisters.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/events/carols-in-the-cloisters.md) |
| **2.3** | **Annual General Meeting (AGM)** | Staged as *Thursday 22 October, 7:00pm, Thringstone Members Club*. | Please confirm if 22 October 2026 remains the agreed AGM date, or if a 2027 date should be scheduled. | [`src/content/notices/agm-notice.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/notices/agm-notice.md) |
| **2.4** | **Guided Heritage Walks Schedule** | Staged with monthly weekend morning walks. | Please provide the confirmed 2027 seasonal dates for guided walks (start times, guide rota, meeting point at Bull's Head). | [`src/content/events/`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/events/) |

---

## 3. Publication Sales & Postal Fulfillment

| Item # | Publication Title | Listed Price | Outstanding Question | File to Edit |
| :--- | :--- | :--- | :--- | :--- |
| **3.1** | **Dame Petronella's Account Book** | £15.00 + £4.00 p&p | Current stock level: How many of the limited run of 300 copies remain available in the priory archive? | [`src/content/publications/dame-petronella-account-book.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/publications/dame-petronella-account-book.md) |
| **3.2** | **Walk Around Guide to Grace Dieu** | £4.99 | What is the current Royal Mail postage and packaging fee for single-copy dispatch? (Staged as £1.50). | [`src/content/publications/walk-around-guide.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/publications/walk-around-guide.md) |
| **3.3** | **More Than Meets The Eye** | £18.00 | What is the agreed Royal Mail postage fee for this hardcover volume? (Staged as £3.50). | [`src/content/publications/more-than-meets-the-eye.md`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/content/publications/more-than-meets-the-eye.md) |
| **3.4** | **"The Ghosts of Grace Dieu" Book** | Archival asset present (`The Ghosts of Grace Dieu Book m.jpg`) | Does the Trust still sell remaining printed copies as local folklore history, or has this book been delisted in light of the strict paranormal ban? | Committee policy decision. |
| **3.5** | **Cheque Payee Details** | Payable to *"Grace Dieu Priory Trust"* | Confirm whether postal orders must be made to **The Grace Dieu Priory Trust** or **The Friends of Grace Dieu Priory**. | [`src/pages/shop.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/shop.astro) |

---

## 4. Educational & Guided School Tours

| Item # | Item Description | Staged Guidance | Questions for Committee | File to Edit |
| :--- | :--- | :--- | :--- | :--- |
| **4.1** | **School Visit Fee / Tariff** | Free / Voluntary donation to stone fund | Does the charity charge a set per-pupil fee (e.g. £2.00–£3.00), a flat group fee, or accept voluntary school donations? | [`src/pages/walks-and-talks.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/walks-and-talks.astro) |
| **4.2** | **Educational Visit Coordinator** | Malcolm Allsop | Confirm coordinator for booking school tours and receiving school inquiry forms. | [`src/pages/walks-and-talks.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/walks-and-talks.astro) |
| **4.3** | **Maximum Group Capacity** | 30–35 pupils per session | What is the recommended maximum party size for outdoor safety across the brook trail and ruins? | [`src/pages/walks-and-talks.astro`](file:///d:/Product%20Engineering/Grace%20Dieu%20Priory/src/pages/walks-and-talks.astro) |

---

## 5. Site Signage, Access & Legal Policies

| Item # | Policy Area | Current Implementation | Action Required by Trustees |
| :--- | :--- | :--- | :--- |
| **5.1** | **Paranormal Ban Wording** | Critical banner and permanent footer disclaimer: *"Paranormal events and commercial ghost hunts are expressly forbidden across the entire priory site and surrounding lands by the Grace Dieu Priory Trust. Unauthorized night-time entry is treated as unlawful trespass."* | Formal trustee confirmation that this wording accurately reflects the Trust's legal stance. |
| **5.2** | **Drone Filming Policy** | Permitted only with prior written charity authorization and CAA compliance. | Confirm guidance for hobbyist vs commercial drone pilots over the Scheduled Ancient Monument. |
| **5.3** | **Bull's Head Parking Notice** | Staged with explicit postcode `LE67 8NR` and patron courtesy reminder. | Confirm ongoing liaison with the management of the Bull's Head pub regarding parking arrangements. |
| **5.4** | **Rusty Mary's Footbridge Project** | Featured across `/about`, `/visit`, and `/news` as the primary capital appeal. | Confirm the current fundraising target and planning application status for the footbridge link. |

---

## How to Apply Confirmed Decisions

Once the committee has reviewed this checklist:
1. Open the file indicated in the right-hand column using GitHub's online web editor.
2. Edit the relevant value (e.g., date, price, or name).
3. Click **"Commit changes"**. The website will automatically rebuild and deploy with the confirmed information.
