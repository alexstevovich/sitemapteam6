import { describe, it, expect } from 'vitest';
const { SitemapXml, SitemapXmlIndex } = require('../gen/index.cjs');

describe('SitemapXml (ESM) Tests', () => {
    it('Generates correct sitemap XML', () => {
        const sitemap = new SitemapXml();
        sitemap
            .url('https://example.com/')
            .priority(1.0)
            .changefreq('daily')
            .lastmod(new Date('2024-02-20'));

        sitemap
            .url('https://example.com/about')
            .priority(0.8)
            .changefreq('weekly')
            .lastmod(new Date('2024-02-18'));

        const sitemapXml = sitemap.toSitemapXml({ dateFormat: 'date-only' });

        const expectedSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/</loc><lastmod>2024-02-20</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url><url><loc>https://example.com/about</loc><lastmod>2024-02-18</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url></urlset>`;

        expect(sitemapXml.trim()).toBe(expectedSitemap.trim());
    });
});

describe('SitemapXmlIndex (ESM) Tests', () => {
    it('Generates correct sitemap index XML', () => {
        const sitemapIndex = new SitemapXmlIndex();

        sitemapIndex
            .sitemap('https://example.com/sitemap1.xml')
            .lastmod(new Date('2024-02-20'));

        sitemapIndex
            .sitemap('https://example.com/sitemap2.xml')
            .lastmod(new Date('2024-02-18'));

        const sitemapIndexXml = sitemapIndex.toSitemapIndexXml({
            dateFormat: 'date-only',
        });

        const expectedSitemapIndex = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://example.com/sitemap1.xml</loc><lastmod>2024-02-20</lastmod></sitemap><sitemap><loc>https://example.com/sitemap2.xml</loc><lastmod>2024-02-18</lastmod></sitemap></sitemapindex>`;

        expect(sitemapIndexXml.trim()).toBe(expectedSitemapIndex.trim());
    });

    it('Throws an error when generating an empty sitemap index', () => {
        const sitemapIndex = new SitemapXmlIndex();

        expect(() => sitemapIndex.toSitemapIndexXml()).toThrow(
            'Sitemap index must have at least one sitemap. Use `force: true` to override.',
        );
    });

    it('Generates an empty sitemap index when forced', () => {
        const sitemapIndex = new SitemapXmlIndex();
        const sitemapIndexXml = sitemapIndex.toSitemapIndexXml({ force: true });

        const expectedSitemapIndex = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>`;

        expect(sitemapIndexXml.trim()).toBe(expectedSitemapIndex.trim());
    });
});
