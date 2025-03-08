# Sitemap Team 6

> #### _Silent, precise, effective. No ghost routes. No false intel. Every URL accounted for._

`sitemapteam6` The elite unit of sitemap.xml generation—precise, efficient, dominating. If [RobotsForce1](https://github.com/alexstevovich/robotsforce1) is your air defense, this is your recon mission.

## Features

- Simple API, that is fluent and OOP lets you easily output the sitemap.xml web standard perfectly.
- Supports sitemap.xml and sitemap indexes.
- No dependencies, atomic, minimal, unopinionated.
  <br>

[![npm version](https://img.shields.io/npm/v/sitemapteam6.svg)](https://www.npmjs.com/package/sitemapteam6)

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

<br><br>

## Installation

```sh

npm  install  sitemapteam6

```

<br><br>

## Usage

```js
import { SitemapXml } from 'sitemapteam6';

const sitemap = new SitemapXml();
sitemap
    .url('https://example.com/')
    .priority(1.0)
    .changefreq('daily')
    .lastmod(new Date('2024-02-20'));
sitemap.url('https://example.com/about').lastmod(new Date('2024-02-21'));

console.log(sitemap.toSitemapXml());
```

<br><br>

## Need robots.txt?

I provide a package for `robots.txt` as well.

If you use these together your project will be backed by some of the most elite web standard writers in the world, if not the most elite.

[https://github.com/alexstevovich/robotsforce1](https://github.com/alexstevovich/robotsforce1)

<br><br>

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
