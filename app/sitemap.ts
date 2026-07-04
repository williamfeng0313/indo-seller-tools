import type { MetadataRoute } from "next";

const baseUrl = "https://indosellertools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/categories/calculators`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/shopee-fee-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/shopee-roi-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/tiktok-profit-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/tiktok-shop-profit-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog/how-much-profit-should-shopee-sellers-make`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog/how-to-calculate-shopee-roi`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog/shopee-vs-tiktok-shop`,
      lastModified: new Date(),
    },
  ];
}