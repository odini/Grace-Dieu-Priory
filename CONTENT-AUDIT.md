# Content Audit & Information Architecture Blueprint
**Project:** Friends of Grace Dieu Priory (Registered Charity No. 1117921)  
**Parent Property Owner:** Grace Dieu Priory Charitable Trust  
**Date:** October 2026  
**Auditor:** Senior Full-Stack Engineer & Content Strategist  
**Source Document:** `content/source/old-site-content.md` & associated archival assets  

---

## 1. Executive Summary & Migration Objective

The existing web presence for the Friends of Grace Dieu Priory is a flat, unformatted single-page document combining urgent administrative notices, event recaps, volunteer recruitment appeals, book listings, contact details, and partnership milestones. 

While the content conveys a passionate, dedicated volunteer community that has cared for this 13th-century Augustinian ruin for over 20 years, the current layout suffers from:
- **Zero hierarchical separation:** Critical safety policies (paranormal ban) sit right above casual litter reminders and past event recaps.
- **Outdated / mixed temporal states:** Event announcements for upcoming AGMs coexist with post-event thank you letters for past summer fayres.
- **Typographical errors & text truncations:** e.g., missing degrees symbols (`250C` / `300C`), truncated names (`David Whit`), and spelling errors (`arial`, `Presentastion`).
- **Date conflicts:** Conflicting dates for the flagship winter carol concert (6th vs. 7th December).
- **Conflation of two distinct legal entities:** *The Grace Dieu Priory Trust* (freehold owner) vs. *The Friends of Grace Dieu Priory* (Registered Charity No. 1117921, operational volunteer group).

This document establishes the strategic content architecture, cleans up inconsistencies, and structures all data into discrete schemas for Astro Content Collections.

---

## 2. Route Content Mapping & Information Architecture

The audit maps the source content into 11 discrete, intuitive routes designed for visitors, local historians, volunteers, schools, and patrons:

```
├── /                       (Home: Welcome, Hero Aerial, Highlights, Geopark Partner, Active Notice Banner)
├── /visit                  (Visitor Guide: Directions, Parking at Bull's Head, Site Rules, Litter/Dogs, Paranormal Ban)
├── /history                (Heritage: Roesia de Verdun, 1414 Account Book, Beaumont Legacy, 1995-2026 Conservation)
├── /walks-and-talks        (Guided Walks, Sarah Wolek Talk, Archaeology Walks, Group Bookings)
├── /events                 (Upcoming Events: AGM, Carols in Cloisters, Medieval Fayre Archive, Facebook Events)
├── /news                   (Press & Stories: Freehold Purchase BBC, 800yr Wall Uncovered, Geopark Partnership)
├── /shop                   (Bookstore: Dame Petronella Account Book, Walk-Around Guide, More Than Meets The Eye)
├── /get-involved           (Volunteering Appeal, Roles Needed, Friends Membership, Bridge Fundraising)
├── /about                  (Trust vs. Friends Structure, Charity 1117921, Committee, 20-Year Milestones, Partners)
├── /gallery                (High-Res Drone Photos, Historical Stone Photos, Richard Taylor Aerial Video Embed)
└── /contact                (Officer Directory: Events, Treasurer, Publications, Location Map, Inquiry Form)
```

### Detailed Route Specifications

#### 1. `/` — Home
*   **Hero Section:** High-impact full-width showcase featuring October 2026 DJI aerial photography of the priory ruins nestled in Charnwood Forest, with clear action buttons: *Plan Your Visit*, *Upcoming Events*, *Support Us*.
*   **Active Notice Banner (Dismissible / Timed):** Prominent header alert for critical updates (e.g., Notice on strict prohibition of paranormal events, or upcoming AGM date).
*   **At-A-Glance Visitor Card:** 
    *   Admission: Free entry 365 days a year.
    *   Location: Thringstone, Leicestershire (Parking at Bull's Head).
    *   Site status: Open daily from dawn to dusk.
*   **Official Partnership Feature:** "Official Partner of Charnwood Forest Geopark" badge and link celebrating the drive towards UNESCO Global Geopark status.
*   **Latest News & Highlights:**
    *   Landmark Acquisition: Grace Dieu Priory Trust purchases site freehold (Nov 2024).
    *   20th Anniversary Medieval Fayre retrospective recap.
    *   Ancient Wall Uncovered during volunteer clearance.
*   **Call to Action:** "Help us protect Grace Dieu for the next 20 years — Volunteer or Become a Friend."

#### 2. `/visit` — Visitor Information & Guidelines
*   **Location & How to Reach Us:** Directions by car and public transport near Thringstone/Belton; Bull's Head public house car park as designated parking point.
*   **Downloadable Resources:** Downloadable route map PDF from Bull's Head car park to Priory ruins.
*   **Site Rules & Code of Conduct:**
    *   *Leave No Trace:* Take all litter home (no public waste collection on the ancient monument).
    *   *Dog Policy:* Dogs welcome under close control; dog waste bin located specifically at the Bull's Head car park (strictly no dog waste left on-site).
    *   *Strict Paranormal Policy:* Formal notice from Grace Dieu Priory Trust: **All paranormal events, ghost hunts, vigils, and 3rd-party commercial investigations are strictly forbidden on the entire site and grounds.**
*   **Accessibility & Footpaths:** Information on terrain, grass pathways, rustic stiles, and planned bridge access from Rusty Mary's field.
*   **Educational & School Visits:**
    *   Custom tours for primary, secondary, and higher-education groups.
    *   Components: Classroom/outdoor historical presentation, hands-on learning activities, guided walk of the ruins.
    *   Direct contact: Malcolm Allsop (Treasurer) — `mjandfmallsop4346@sky.com` / `01530 833 632`.

#### 3. `/history` — Historical Heritage & Conservation
*   **Founding Era (c. 1239–1241):** Founded by Roesia (Rohesia) de Verdun as an independent priory for Augustinian canonesses (nuns dedicated to St. Mary and the Holy Trinity). Context on Roesia's remarkable status as an independent female feudal lord under King Henry III.
*   **Life in the Cloisters & Dame Petronella (1414–1418):** Examination of the rare draft account book of Prioress Dame Petronella, capturing meat and fish purchases, building maintenance, farm wages, and servant payments at the dawn of the 15th century.
*   **Dissolution & Tudor Transformation (1538):** Dissolution under Henry VIII; acquisition by John Beaumont; conversion into a Tudor mansion; birthplace of dramatist Francis Beaumont and poet Sir John Beaumont.
*   **From Ivy Ruins to Public Sanctuary (1995–2006):** How the Grace Dieu Priory Charitable Trust salvaged collapsing masonry covered in dense ivy, completing extensive consolidated stone conservation before opening to the public.
*   **The 2024 Purchase & Recent Discoveries:** The November 2024 transition from tenants to freehold owners; unearthing of the 800-year-old wall; upcoming archaeological research.

#### 4. `/walks-and-talks` — Guided Walks & Talks
*   **Guided Walks Programme:** Seasonal guided walks led by local historians exploring the ruins, the Charnwood canal remains, railway viaduct, and surrounding woodlands.
*   **Archive of Scholarly Talks:**
    *   *From Castles to Cloisters: The Remarkable Life of Roesia de Verdun* by Sarah Wolek (St John the Baptist's Church, Belton). Deep dive into Roesia's tomb iconography and aristocratic fortitude.
*   **Archaeology & Biodiversity Walks:** Forthcoming tours scheduled in partnership with Charnwood Forest Geopark and Loughborough Naturalists' Club.
*   **Private & Group Bookings:** How local history societies, walking clubs, and youth groups can schedule a dedicated guide.

#### 5. `/events` — Events Calendar & Gatherings
*   **Filterable Timeline:** Upcoming Events vs. Past Events Archive.
*   **Annual Flagship: Medieval Fayre:**
    *   20th Anniversary recap: Living history camps (1485), knight squire training, archery drills, Mummers play (St. George & the Dragon), Sing It Happy Choir, traditional crafts, local honey and Viking wares.
    *   Upcoming Fayre date and trader application details.
*   **Seasonal Tradition: Carols in the Cloisters:**
    *   Atmospheric lantern-lit choral singing in the ruined cloisters.
    *   Target dates: Early December (reconciling Dec 6 vs Dec 7).
*   **Annual General Meeting (AGM):**
    *   Date: Thursday 22nd October at 7:00pm.
    *   Location: Thringstone Members Club.
    *   Open to all members of the public and prospective volunteers.
*   **Live Social Feed:** Direct integration/link to `facebook.com/gracedieupriory`.

#### 6. `/news` — News & Announcements
*   **Curated Articles & Press Releases:**
    *   *November 2024:* "BBC News: Grace Dieu Priory Sold to Charitable Trust" — securing permanent ownership of ruins and Rusty Mary's field.
    *   *February 2025:* "Official Partner of Charnwood Forest Geopark" — presentation by Geopark team and UNESCO bid alignment.
    *   *Mid 2025:* "800-Year-Old Priory Wall Exposed" — volunteer vegetation clearance reveals hidden medieval stone fabric.
    *   *October 2025:* "Belton Maypole Magazine Feature" — 30-year retrospective (1995–2025) and volunteer appeal.

#### 7. `/shop` — Publications & Books
*   **"Dame Petronella's 1414–1418 Account Book":**
    *   Price: Reduced to **£15.00** + **£4.00 p&p** (RRP was £20+).
    *   Format: 348-page paperback, limited run of 300 copies.
    *   Contributors: Preface by Prof. Christopher Dyer (Univ. of Leicester); 29-page introduction by Kenneth Hillier; translation from medieval Latin by Dominic Johnson; editorial notes by late Lesley Boatwright.
    *   Payment: Cheques payable to *Grace Dieu Priory Trust*.
    *   Ordering Contact: Ann Petty (`annpetty1948@yahoo.co.uk` / `01530 831895`).
*   **"A Walk Around Guide to Grace Dieu Priory":**
    *   Price: **£4.99** [CONFIRM p&p cost].
    *   Description: Concise visitor pocket companion with maps and building reconstructions.
*   **"More Than Meets The Eye":**
    *   Authors: Steve Woodward & Helen Ikin (Loughborough Naturalists' Club).
    *   Price: **£18.00** + p&p [CONFIRM p&p cost].
    *   Proceeds split: Loughborough Naturalists' Club & Friends of Grace Dieu Priory.
*   **"The Ghosts of Grace Dieu" [CONFIRM status]:**
    *   Archival asset present (`The Ghosts of Grace Dieu Book m.jpg`).
    *   Action: Confirm whether this title remains available for sale as local folklore or if delisted due to the strict paranormal ban.

#### 8. `/get-involved` — Volunteering, Membership & Donations
*   **Urgent Volunteer Appeal (Belton Maypole Callout):**
    *   "The initial group is now aging and struggling to maintain the necessary level of activity. We are not going to lock the gates, but without help, that risk looms."
*   **Specific Volunteer Roles Needed:**
    *   *Logistics & Event Setup:* Assisting with erecting gazebos, setting up pitches, signage.
    *   *Car Park Marshals:* Stewarding vehicles in Rusty Mary's field during major events.
    *   *Administrative & Digital Skills:* Secretarial, grant writing, web/social media support.
    *   *Site Maintenance:* Light path maintenance, bramble clearing alongside Geopark working parties.
    *   *Tour Guides & Educators:* Leading school and community walks.
*   **Membership ("Become a Friend"):**
    *   Application process, annual subscription, newsletter, AGM voting rights.
*   **Capital Appeal: Rusty Mary's Bridge Project:**
    *   Fundraising campaign to construct a dedicated pedestrian footbridge linking the overflow parking in Rusty Mary's field directly to the Priory precinct.

#### 9. `/about` — About the Charity & Governance
*   **Entity Clarity: The Trust vs. The Friends:**
    *   *Grace Dieu Priory Charitable Trust:* Registered corporate body owning the real estate (ruins and surrounding grounds).
    *   *The Friends of Grace Dieu Priory:* Registered Charity No. 1117921, formed to operate the site, organize volunteer working parties, deliver educational walks, and run public events.
*   **Milestones Timeline:**
    *   1995: Site in acute ruin; Trust formed.
    *   1996–2006: Major structural consolidation programme.
    *   2006: Site formally reopened to the public.
    *   2024: Freehold acquired by the Trust.
    *   2026: 20th Anniversary of public opening.
*   **Partner Network:**
    *   Charnwood Forest Geopark
    *   University of Leicester
    *   Loughborough Naturalists' Club
    *   Ferrers Household & Friends of the Thomas Grey Household
    *   The Remet Company, Shepshed
    *   Leicestershire County Council / NW Leicestershire District Council

#### 10. `/gallery` — Visual Media & Aerial Showcase
*   **DJI Drone Aerial Photography:** 4 high-resolution aerial photographs (captured October 2026) showing the ruins, railway viaduct, and surrounding woodlands.
*   **Aerial Video Feature:** YouTube drone flight by Richard Taylor (`https://youtu.be/G1_f6ZzcZ2k`).
*   **Historic Conservation Gallery:** Archive photos showing the pre-1995 ivy-covered ruins vs. modern conserved masonry (`GDP Stone.jpg`, `grace dieu2.jpg`, `img5.jpg`).
*   **Event Galleries:** 20th Anniversary Medieval Fayre, living history re-enactments, and Carols in the Cloisters.

#### 11. `/contact` — Directory & Inquiries
*   **Structured Contacts Directory:**
    *   *Events & Volunteering:* David Whitt [CONFIRM full name] — `events@gracedieupriory.org.uk`
    *   *Treasurer & Educational/School Tours:* Malcolm Allsop — `mjandfmallsop4346@sky.com` | `01530 833 632`
    *   *Book Orders & Publications:* Ann Petty — `annpetty1948@yahoo.co.uk` | `01530 831895`
    *   *General Inquiries:* Contact form with email forwarding to charity secretary.
*   **Social & External:**
    *   Facebook: `facebook.com/gracedieupriory`
    *   Geopark Partner Portal: `charnwoodforest.org`

---

## 3. Structured Data Extraction (Dates, Fees, Prices, Contacts)

All factual data extracted from `old-site-content.md` and related source files has been organized into structured categories below. Data requiring trustee clarification is marked with **`[CONFIRM]`**.

### 3.1 Key Historical & Operational Dates
| Date / Period | Event / Milestone | Context & Source | Status |
| :--- | :--- | :--- | :--- |
| **c. 1239–1241** | Priory founded by Roesia de Verdun | Foundation for Augustinian canonesses | Verified historical record |
| **1414–1418** | Dame Petronella Draft Account Book | Medieval monastic expenditure & receipts | Verified (Book publication) |
| **1538** | Dissolution of the Priory | Surrendered during Dissolution of the Monasteries | Verified historical record |
| **1995** | Grace Dieu Priory Trust formed | Group organized to rescue ivy-covered ruin | Documented in Maypole article |
| **1996–2006** | 10-Year Conservation Programme | Major masonry consolidation & stabilization | Documented in Maypole article |
| **2006** | Formal Reopening to Public | Site opened free of charge to community | Documented in Maypole article |
| **Nov 2024** | Freehold site purchase | Trust bought site after 2 years negotiation | Documented via BBC report |
| **19 Feb 2025** | Charnwood Geopark Presentation | Official partnership presentation to FOGDP | Documented in news section |
| **27 June [CONFIRM: 2025 or 2026]** | Roesia de Verdun Talk by Sarah Wolek | Held at St John the Baptist's Church, Belton | **`[CONFIRM year]`** |
| **28 June 2026** | 20th Anniversary Medieval Fayre | 7:00am setup, 10:30am public open | Documented in fayre report |
| **October 2025** | Belton Maypole Magazine Article | Published retrospective and volunteer plea | Documented in source |
| **Thursday 22nd October [2026]** | Annual General Meeting (AGM) | 7:00pm at Thringstone Members Club | **`[CONFIRM 2026]`** *(Oct 22 was Wed in 2025, Thu in 2026)* |
| **6th Dec vs. 7th Dec [CONFIRM]** | Carols in the Cloisters / Carol Concert | Line 28 cites 6th Dec; Line 77 cites 7th Dec | **`[CONFIRM exact date & day]`** |

### 3.2 Admissions, Fees & Tariffs
| Activity / Item | Fee | Terms & Conditions | Status |
| :--- | :--- | :--- | :--- |
| **General Site Admission** | **FREE** | Open dawn to dusk, 365 days a year | Official charity policy |
| **Medieval Fayre Entry** | **FREE** | Community celebration for 20th anniversary | Documented |
| **Parking at Bull's Head** | **FREE** *(Patron courtesy)* | Standard pub car park; route map to ruins | Official charity advice |
| **Event Parking (Rusty Mary's)** | **FREE** *(Donations welcome)* | Marshaled by volunteer crew | **`[CONFIRM if donation requested]`** |
| **Carols in the Cloisters Entry** | **FREE / Donation [CONFIRM]** | Lantern event in ruins | **`[CONFIRM ticketing/admission]`** |
| **School Guided Visits** | **[CONFIRM fee/donation]** | Includes talk, activity pack & guided walk | **`[CONFIRM Malcolm Allsop]`** |
| **Private Group / Society Walks** | **[CONFIRM fee/donation]** | Custom booking with volunteer guide | **`[CONFIRM booking tariff]`** |

### 3.3 Publication & Merchandise Prices
| Title | Author(s) / Editor(s) | Price | Postage & Packaging | Payment Terms & Supplier |
| :--- | :--- | :--- | :--- | :--- |
| **Dame Petronella's 1414–1418 Account Book** | Dyer, Hillier, Johnson, Boatwright | **£15.00** *(Reduced)* | **£4.00** | Cheques to *Grace Dieu Priory Trust*. Sole supplier: Ann Petty |
| **A Walk Around Guide to Grace Dieu Priory** | Friends of Grace Dieu Priory | **£4.99** | **`[CONFIRM p&p]`** | Order via Ann Petty |
| **More Than Meets The Eye** | Steve Woodward & Helen Ikin | **£18.00** | + p&p **`[CONFIRM amount]`** | Proceeds split with Loughborough Naturalists' Club. Ann Petty |
| **The Ghosts of Grace Dieu** | Local authors / FOGDP | **`[CONFIRM £]`** | **`[CONFIRM p&p]`** | **`[CONFIRM availability given paranormal ban]`** |
| **Grace Dieu Priory Book** *(General)* | Local authors / FOGDP | **`[CONFIRM £]`** | **`[CONFIRM p&p]`** | **`[CONFIRM details & ISBN]`** |

### 3.4 Contact Persons Directory
| Name | Role / Function | Contact Details | Verification Needed |
| :--- | :--- | :--- | :--- |
| **David Whit [CONFIRM]** | Events Coordinator & Volunteer Enquiries | `events@gracedieupriory.org.uk` | **`[CONFIRM full surname: Whitt / White?]`** |
| **Malcolm Allsop** | Treasurer & Educational / School Visits | `01530 833 632`<br>`mjandfmallsop4346@sky.com` | Verified in source text |
| **Ann Petty** | Publications Officer & Sole Supplier | `01530 831895`<br>`annpetty1948@yahoo.co.uk` | Verified in source text |
| **Kenneth Hillier** | Trustee & Local Historian | Intro author for Petronella Account Book | **`[CONFIRM contact email/role]`** |
| **Richard Taylor** | Drone Videographer | Contributor of aerial video | Credited on YouTube |
| **Sarah Wolek** | Guest Historian / Speaker | Roesia de Verdun lecture | External speaker |
| **Steve Woodward & Helen Ikin** | Authors | Loughborough Naturalists' Club | Partner organization liaison |

---

## 4. Audit of Site Inconsistencies, Typographical Errors & Contradictions

The source text exhibits numerous typographical errors, inconsistent historical spellings, conflicting event dates, and editorial ambiguities that must be systematically addressed during site migration:

| # | Item / Error | Source Text Instance | Corrected Canonical Standard | Rationale / Editorial Note |
| :- | :--- | :--- | :--- | :--- |
| **1** | **Founder Name Spelling** | "Roesia de Verdun" (lines 57, 59, 61) vs. common historical "Rohesia de Verdun" | **Roesia de Verdun** *(with parenthetical note: "also recorded as Rohesia")* | Establish *Roesia de Verdun* as canonical to match her tomb inscription and academic papers, while retaining *Rohesia* as an SEO alias. |
| **2** | **Carol Concert Date Conflict** | Line 28: *"Carols in the Cloisters on 6th December"* vs. Line 77: *"annual Carol Concert is planned for the 7th of December"* | **Requires immediate Trustee Confirmation [CONFIRM]** | In 2026, Dec 6 is Sunday and Dec 7 is Monday. In 2025, Dec 6 was Saturday and Dec 7 was Sunday. The event typically runs on a weekend evening. |
| **3** | **Temperature Unit Typos** | Line 39: *"pleasant 250C"* and *"temperatures of over 300C"* | **25°C** and **30°C** | Typographical error caused by OCR or text encoding stripping the degree symbol `°` (`250C` -> 25°C; `300C` -> 30°C). |
| **4** | **Spelling Error: "arial"** | Line 149: *"Below is an arial video of the site kindly provided by Richard Taylor"* | **aerial video** | Standard English spelling correction for airborne/drone video footage. |
| **5** | **Spelling Error: "Presentastion"** | Line 101: *"Geopark Presentastion to FOGDP 19/02/25"* | **Geopark Presentation to FOGDP (19/02/2025)** | Fix typographical spelling error and format date cleanly. |
| **6** | **Truncated Contact Name** | Line 49: *"please contact events@gracedieupriory.org.uk, David Whit"* | **David Whitt [CONFIRM]** | The name is cut off mid-sentence. Must confirm whether the surname is "Whitt" or "White". |
| **7** | **Grammar: "Trust now own"** | Line 73: *"The Trust now own the Priory and Rusty Mary field."* | **The Trust now owns the Priory and Rusty Mary's field.** | Singular collective noun agreement and possessive apostrophe for "Rusty Mary's field". |
| **8** | **Missing Question Mark** | Line 141: *"What could be better than a walk and talk in the fresh air."* | **What could be better than a walk and talk in the fresh air?** | Punctuation correction. |
| **9** | **Erratic Markdown Dividers** | Repetitive lines: `* * * * * * * * *` and `* * * * * * * * * * * * * *` | **Structured semantic HTML `<section>` elements and CSS borders** | Remove raw plain-text asterisks in favor of clean component dividers. |
| **10** | **Paranormal Contradiction** | Strict prohibition on ghost walks (lines 1–3) coexists with sales of *"The Ghosts of Grace Dieu"* book asset. | **Explicit Policy Distinction:** Add disclaimer to book listing noting that it covers folklore/history, while reaffirming zero tolerance for live ghost investigations on-site. | Clarifies the charity's legal policy without suppressing sales of historical literature. |
| **11** | **Entity Conflation** | "Grace Dieu Priory Trust" and "Friends of Grace Dieu Priory" used interchangeably. | **Explicit Role Clarification:** Friends = Volunteer management & Charity #1117921; Trust = Property holding entity. | Prevents legal confusion regarding financial donations, cheques, and licensing. |
| **12** | **Inconsistent Church Title** | "St John the Baptist’s Church, Belton" (line 55) vs "St. John the Baptist Church" (line 61) | **St John the Baptist's Church, Belton** | Consistent British English punctuation (omitting period after St in UK usage). |

---

## 5. Time-Sensitive Content Lifecycle & Expiration Logic

The new website will implement automated lifecycle states in TypeScript/Astro for all time-bound notices, avoiding the persistent stale announcements that plagued the legacy website:

```
                  ┌────────────────────────────────────────┐
                  │          Content Item Created          │
                  └──────────────────┬─────────────────────┘
                                     │
                 Is currentDate < publishDate or showFrom?
                                     │
                   ┌─────────────────┴─────────────────┐
                 YES                                   NO
                   │                                   │
          [Status: Scheduled]                 Is currentDate < eventDate / expiresAt?
           (Hidden in prod)                            │
                                             ┌─────────┴─────────┐
                                           YES                   NO
                                             │                   │
                                     [Status: Active]    [Status: Concluded/Archived]
                                      (Render banner)     (Move to Archive or Hide)
```

### Lifecycle Rules by Content Type

#### 1. Urgent Notices & Alerts (`content/notices/`)
*   **Fields:** `title`, `severity` (`info` | `warning` | `critical`), `startDate`, `expiresAt`, `dismissible`, `pinned`.
*   **Examples:**
    *   *Paranormal Event Prohibition:* `severity: critical`, `pinned: true`, `expiresAt: undefined` (Permanent sitewide policy banner on `/visit` and `/events`).
    *   *Litter & Dog Waste Notice:* Permanent guideline on `/visit`.
    *   *AGM Announcement:* `severity: info`, `expiresAt: 2026-10-22T21:00:00+01:00`. Once 9:00 PM on October 22 passes, the notice automatically disappears from the homepage and converts to a retrospective record on `/about` and `/events`.
    *   *Weather / Bridge Closures:* Temporary banners with strict expiry dates.

#### 2. Events (`content/events/`)
*   **Fields:** `title`, `eventDate`, `endDate`, `location`, `fee`, `bookingRequired`, `featured`, `archived`.
*   **Lifecycle Logic:**
    *   **Future (`currentDate < eventDate`):** Rendered on `/events` under "Upcoming Events" with calendar badges and call to action.
    *   **Day of Event:** Display banner badge "Happening Today".
    *   **Past (`currentDate > eventDate`):** Automatically shifted to "Past Events Archive" with optional post-event summary, attendee photo gallery, and thank-you notes (e.g., the 20th Anniversary Medieval Fayre).

#### 3. News & Articles (`content/news/`)
*   **Fields:** `title`, `publishDate`, `author`, `category` (`announcement` | `milestone` | `press` | `archaeology`), `featured`.
*   **Lifecycle Logic:**
    *   Permanent editorial timeline sorted in reverse chronological order.
    *   "Sticky" news articles (e.g. Freehold Purchase, Geopark Partner) can stay pinned on the homepage for a configurable period (e.g., 6 months).

---

## 6. Content Collections Schema Blueprint

To enable zero-code content editing by charity trustees via simple Markdown files with frontmatter, three primary collections will be configured in `src/content/config.ts`:

1.  **`notices`**: Sticky banners, safety regulations, and critical announcements with automatic expiration.
2.  **`events`**: Calendar items with location, date/time, fee info, and automatic archival.
3.  **`news`**: Press releases, conservation updates, and historical articles.
4.  *(Bonus)* **`publications`**: Book catalogue with prices, ISBN, postage costs, and ordering instructions.

---

## 7. Next Steps & Trustee Confirmations Required

Before commencing UI component builds, the following points must be finalized:
1.  **[CONFIRM]** Exact date for Carols in the Cloisters: Saturday 6th Dec, Sunday 7th Dec, or another weekend?
2.  **[CONFIRM]** Full surname of David Whit (`events@gracedieupriory.org.uk`).
3.  **[CONFIRM]** Year of Sarah Wolek's talk at Belton Church (2025 or 2026).
4.  **[CONFIRM]** Current pricing and postage for *Walk Around Guide* and *More Than Meets The Eye*.
5.  **[CONFIRM]** Listing status of *The Ghosts of Grace Dieu* book in relation to the paranormal investigation ban.
6.  **[CONFIRM]** Approval of Astro + Tailwind + TypeScript architecture.
