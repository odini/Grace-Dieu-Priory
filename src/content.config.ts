import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Notices Collection Schema
 * For critical alerts, administrative notices, and seasonal warnings.
 * Supports auto-expiration logic and severity levels.
 */
const notices = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notices' }),
  schema: z.object({
    title: z.string(),
    severity: z.enum(['info', 'warning', 'critical']).default('info'),
    pinned: z.boolean().default(false),
    active: z.boolean().default(true),
    targetRoutes: z.array(z.string()).default(['/']),
    startDate: z.coerce.date().optional(),
    expiresOn: z.coerce.date().optional(),
    expiresAt: z.coerce.date().optional(),
    shortNotice: z.string().optional(),
    actionLink: z
      .object({
        url: z.string(),
        text: z.string(),
      })
      .optional(),
    dismissible: z.boolean().default(true),
  }),
});

/**
 * Events Collection Schema
 * For upcoming talks, guided walks, annual medieval fayres, carol concerts, and AGMs.
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string(),
    location: z.string().default('Grace Dieu Priory Ruins, Thringstone'),
    admission: z.string().default('Free'),
    category: z.enum(['heritage', 'walk', 'talk', 'seasonal', 'meeting', 'community']).default('heritage'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    bookingRequired: z.boolean().default(false),
    contactPerson: z.string().optional(),
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    volunteersNeeded: z.boolean().default(false),
    archived: z.boolean().default(false),
  }),
});

/**
 * News Collection Schema
 * For press releases, discoveries (e.g., 800yr wall), freehold purchase, and magazine articles.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Friends of Grace Dieu Priory'),
    category: z.enum(['announcement', 'milestone', 'discovery', 'conservation', 'press']).default('announcement'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),
  }),
});

/**
 * Publications Collection Schema
 * For books, guides, and historical records available from the charity shop.
 */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    price: z.number(),
    postage: z.number().optional(),
    format: z.string().default('Paperback'),
    pages: z.number().optional(),
    edition: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    supplier: z.string().default('Ann Petty'),
    supplierEmail: z.string().default('annpetty1948@yahoo.co.uk'),
    supplierPhone: z.string().default('01530 831895'),
    paymentInstructions: z.string().default('Cheques payable to Grace Dieu Priory Trust'),
    stockStatus: z.enum(['in_stock', 'low_stock', 'out_of_stock', 'confirm_status']).default('in_stock'),
  }),
});

export const collections = {
  notices,
  events,
  news,
  publications,
};
