import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!storeDomain) {
  throw new Error("Missing SHOPIFY_STORE_DOMAIN");
}

if (!storefrontAccessToken) {
  throw new Error("Missing SHOPIFY_STOREFRONT_ACCESS_TOKEN");
}

export const shopify = createStorefrontApiClient({
  storeDomain,
  apiVersion: "2026-07",
  publicAccessToken: storefrontAccessToken,
});
