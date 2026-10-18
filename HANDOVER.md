# Volunteer & Trustee Website Handover Guide

**The Friends of Grace Dieu Priory (Registered Charity No. 1117921)**  
*A plain-English operational guide for committee members, secretaries, and event coordinators.*

---

## 1. Welcome to Your New Website

Welcome! Your new website has been built to be **simple, secure, and permanent**. 

### Why this design was chosen for your charity:
* **No Database to Maintain:** Unlike old WordPress or FrontPage sites, there are no databases to corrupt, no server software to patch, and no expensive maintenance contracts.
* **Immune to Hackers:** The entire website is generated as static files. There are no admin passwords stored in public databases for bots to attack.
* **Zero-Code Updates:** You do not need to know HTML, CSS, or programming. All notices, events, news articles, and books are stored as plain text documents called **Markdown** (`.md`) files.
* **Automatic Deployment:** Whenever you save an edit in GitHub, an automated system builds and publishes the website worldwide within **60 seconds**.

---

## 2. Accessing the Content (Using Any Web Browser)

You do **not** need to install any software on your computer. You can update the website from any modern browser (Chrome, Edge, Safari, Firefox) on a PC, Mac, or tablet.

### Step 1: Open Your Charity Repository
1. Navigate to your website repository on GitHub: `https://github.com/[your-organisation]/grace-dieu-priory`
2. Sign in with your GitHub volunteer account.

### Step 2: The Three-Second Web Editor
* When viewing any file on GitHub, simply press the **`period` key (`.`)** on your keyboard, or click the **Pencil Icon** (Edit this file) at the top-right of the file.
* This opens a visual web editor right inside your browser, just like Microsoft Word or Google Docs!

---

## 3. Where Content Lives

All editable content is organized into four clean folders inside `src/content/`:

```
src/
└── content/
    ├── notices/        ← Top announcement banners (AGM, weather closures)
    ├── events/         ← Talks, carol concerts, guided walks, medieval fayres
    ├── news/           ← Archaeological discoveries, press reports, updates
    └── publications/   ← Official books, trail guides, and merchandise
```

---

## 4. How to Publish a New Event

When you have a new guided walk, historical talk, or charity gathering to announce:

1. In GitHub, navigate to: `src/content/events/`
2. Click **Add file** → **Create new file** (top-right button).
3. Name your file with lowercase words separated by dashes, ending in `.md` (for example: `summer-guided-walk-2027.md`).
4. Copy and paste the template below into the file:

```markdown
---
title: "Spring Flora & Woodland Guided Walk"
summary: "Join local naturalists for a 2-hour guided ramble identifying rare woodland lichens, wild bluebells, and ancient boundary stones."
eventDate: 2027-04-18T10:00:00Z
time: "10:00 AM – 12:30 PM"
location: "Meet at the Bull's Head Car Park (LE67 8NR)"
cost: "Free (Voluntary donations to the Priory Fabric Fund)"
category: "walk"
volunteersNeeded: false
archived: false
---

### Event Details & Meeting Instructions
Meet your volunteer guide at the Bull's Head car park entrance by 9:50 AM for a prompt 10:00 AM departure. 

The walk follows the woodland footpath alongside Grace Dieu Brook into the priory cloisters. Sturdy footwear is recommended as paths may be damp.

- **Distance:** Approximately 2.5 miles.
- **Suitability:** Moderate walking pace; suitable for families.
- **Dogs:** Well-behaved dogs welcome on short leads.
```

5. Adjust the title, date, and description.
6. Scroll down and click the green **"Commit changes..."** button.
7. **That's it!** The event will appear immediately on `/events` and on the homepage.

> **Note on Volunteer Tagging:** If you need community helpers for the event (e.g. car park marshals or gazebo setup), change `volunteersNeeded: false` to `volunteersNeeded: true`. The website will automatically highlight a burgundy **"Volunteers Needed"** tag!

---

## 5. How to Publish a News Article or Discovery

When volunteers uncover an ancient wall, complete a conservation phase, or receive press coverage:

1. Navigate to: `src/content/news/`
2. Click **Add file** → **Create new file**.
3. Name your file (e.g. `autumn-bramble-clearance-results.md`).
4. Copy and paste this template:

```markdown
---
title: "Volunteer Working Party Clears South Precinct Footpath"
summary: "Over twenty local volunteers joined forces with Charnwood Forest Geopark to restore pedestrian access along the southern meadow."
publishDate: 2026-11-10T00:00:00Z
author: "Friends of Grace Dieu Priory"
category: "conservation"
featured: false
image: "/images/2024 BBC - Priory Wall exposed.webp"
imageAlt: "Volunteers with wheelbarrows and rakes working near the medieval stone walls"
---

A huge thank you to everyone who joined our Saturday morning conservation party!

### What We Achieved
Working alongside our colleagues from the **Charnwood Forest Geopark**, the team cleared over 60 metres of encroaching bramble overgrowth that had begun obstructing the permissive trail.

- Two trailer-loads of deadwood cleared from the stream bank.
- Masonry inspect performed on the chapter house arch.
- Refreshments provided courtesy of the volunteer hospitality crew.

Our next working party is scheduled for the second Saturday of next month. New volunteers are always welcome!
```

5. Click **Commit changes**. Your story is now published in the `/news` archive!

---

## 6. How to Update the Site-Wide Notice Banner

The top announcement banner (which sits above the header on every page) is designed to **expire automatically**. When its deadline passes midnight, it vanishes from the website on its own!

### To edit an existing notice (e.g. AGM Announcement):
1. Navigate to: `src/content/notices/agm-notice.md`
2. Click the **Pencil Icon** to edit.
3. You will see content that looks like this:

```markdown
---
title: "Annual General Meeting (AGM)"
message: "The Annual General Meeting of The Friends of Grace Dieu Priory will take place on Thursday 22 October at 7:00 PM at Thringstone Members Club. All members and interested residents are warmly invited to attend."
publishDate: 2026-09-01T00:00:00Z
expiresOn: 2026-10-23T00:00:00Z
severity: "info"
dismissible: true
linkUrl: "/about"
linkLabel: "Meeting Details ›"
---
```

### Key Fields You Can Change:
* **`expiresOn: YYYY-MM-DD`**: Set this to the day *after* your event. Once that date arrives, the banner stops displaying automatically.
* **`severity`**: Choose from:
  * `"info"`: Elegant green background with candle-gold border (standard announcements).
  * `"warning"`: Amber background (upcoming road works, parking changes).
  * `"critical"`: Burgundy background (emergency flood closure, snow warnings).
* **`message`**: The plain English text displayed to visitors.

4. Click **Commit changes**.

---

## 7. How to Update Book Prices & Postage

If Royal Mail postage rates change or a book goes out of stock:

1. Navigate to: `src/content/publications/`
2. Click on the book file you wish to modify:
   * `dame-petronella-account-book.md`
   * `walk-around-guide.md`
   * `more-than-meets-the-eye.md`
3. Edit the price or postage numbers:
   ```yaml
   price: 15.00
   postage: 4.00
   stockStatus: "in_stock"   # Change to "out_of_stock" if copies run out
   ```
4. Click **Commit changes**. The price tags and order calculation modals on `/shop` will update automatically.

---

## 8. How to Upload New Photographs

1. Name your photo file descriptively in lowercase (e.g. `carols-cloisters-lanterns.jpg`).
2. Navigate to: `public/images/`
3. Click **Add file** → **Upload files**.
4. Drag and drop your image into the browser window and click **Commit changes**.
5. You can now reference this image in any event, news story, or gallery item using the path: `/images/your-photo-name.jpg`

---

## 9. Plain-Text Markdown Formatting Cheat Sheet

When writing descriptions or news stories, you can use these simple formatting symbols:

| What You Type | What Visitors See |
| :--- | :--- |
| `### Subheading Title` | **A large, elegant serif section heading** |
| `**Bold text**` | **Bold text** |
| `*Italic text*` | *Italic text* |
| `- First bullet point`<br>`- Second bullet point` | • First bullet point<br>• Second bullet point |
| `[Click here for directions](https://maps.google.com)` | [Click here for directions](https://maps.google.com) |
| `25°C and 30°C` | 25°C and 30°C (use the `°` degree symbol) |

---

## 10. How to Undo a Mistake (Safety Net)

Because your website is backed by GitHub version control, **nothing can ever be permanently lost or broken**:

1. If you make a mistake in a file, open the file on GitHub and click the **History** button at the top-right.
2. You will see every edit ever made, who made it, and when.
3. Click on the version that was working properly.
4. Click the **Revert** or copy the previous text back into place and commit.
5. The website will immediately restore the previous good version!

---

## 11. Technical Contacts & Support

* **Registered Charity:** The Friends of Grace Dieu Priory (Charity No. 1117921)
* **Property Owners:** The Grace Dieu Priory Trust
* **Charity Secretary & Trustee Inquiries:** `info@gracedieupriory.org.uk`
* **Website Repository:** Maintained on GitHub under version control.
