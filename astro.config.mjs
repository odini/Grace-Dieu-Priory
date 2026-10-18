import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gracedieupriory.org.uk',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // Legacy FrontPage home paths
    '/index.htm': '/',
    '/default.htm': '/',
    '/default.html': '/',

    // Legacy Walks & Talks paths
    '/walks.htm': '/walks-and-talks',
    '/walks.html': '/walks-and-talks',
    '/talks.htm': '/walks-and-talks',
    '/talks.html': '/walks-and-talks',
    '/guided-walks.htm': '/walks-and-talks',
    '/schools.htm': '/walks-and-talks',

    // Legacy History paths
    '/history.htm': '/history',
    '/history.html': '/history',
    '/about-history.htm': '/history',
    '/roesia.htm': '/history',

    // Legacy Visit & Location paths
    '/visit.htm': '/visit',
    '/visit.html': '/visit',
    '/visiting.htm': '/visit',
    '/directions.htm': '/visit',
    '/parking.htm': '/visit',

    // Legacy Events paths
    '/events.htm': '/events',
    '/events.html': '/events',
    '/calendar.htm': '/events',
    '/fayre.htm': '/events',

    // Legacy News & Editorial paths
    '/news.htm': '/news',
    '/news.html': '/news',
    '/updates.htm': '/news',
    '/newsletter.htm': '/news',

    // Legacy Shop & Publications paths
    '/shop.htm': '/shop',
    '/shop.html': '/shop',
    '/books.htm': '/shop',
    '/publications.htm': '/shop',

    // Legacy Volunteer & Membership paths
    '/volunteer.htm': '/get-involved',
    '/volunteer.html': '/get-involved',
    '/getinvolved.htm': '/get-involved',
    '/membership.htm': '/get-involved',
    '/support.htm': '/get-involved',

    // Legacy About & Governance paths
    '/about.htm': '/about',
    '/about.html': '/about',
    '/trust.htm': '/about',
    '/charity.htm': '/about',

    // Legacy Gallery & Media paths
    '/gallery.htm': '/gallery',
    '/gallery.html': '/gallery',
    '/photos.htm': '/gallery',

    // Legacy Contact paths
    '/contact.htm': '/contact',
    '/contact.html': '/contact',
    '/contactus.htm': '/contact',
    '/contact-us.htm': '/contact',

    // Legacy "ghost" URLs redirected directly to the /visit page's policy section
    '/ghosts.htm': '/visit#code-of-conduct',
    '/ghosts.html': '/visit#code-of-conduct',
    '/ghosts': '/visit#code-of-conduct',
    '/ghost-walks.htm': '/visit#code-of-conduct',
    '/ghost-walks.html': '/visit#code-of-conduct',
    '/ghost-walks': '/visit#code-of-conduct',
    '/ghostly-goings-on.htm': '/visit#code-of-conduct',
    '/ghostly-goings-on.html': '/visit#code-of-conduct',
    '/ghostly-goings-on': '/visit#code-of-conduct',
    '/paranormal.htm': '/visit#code-of-conduct',
    '/paranormal.html': '/visit#code-of-conduct',
    '/paranormal': '/visit#code-of-conduct',
  },
});
