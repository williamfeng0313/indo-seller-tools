import type { MetadataRoute } from "next";

const baseUrl = "https://indosellertools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/id`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/id/tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    
    {
      url: `${baseUrl}/id/tools/kalkulator-komisi-tiktok`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    
    {
      url: `${baseUrl}/id/tools/generator-judul-produk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/id/tools/kalkulator-komisi-shopee`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    {
      url: `${baseUrl}/id/tools/kalkulator-biaya-lazada`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/id/tools/kalkulator-biaya-shopee`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
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