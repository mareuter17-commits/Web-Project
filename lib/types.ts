// Reusable TypeScript types for the Shopify product domain.
//
// Field shapes and nullability mirror the Shopify Storefront API
// (version 2026-07). These interfaces are the foundation for current
// and future product features: not every field is selected by every
// GraphQL query. See lib/queries.ts for the fields each query
// actually requests.

/** Storefront API global product ID, e.g. "gid://shopify/Product/123". */
export type ProductId = string;

/** URL-safe unique product identifier, used in storefront routes. */
export type ProductHandle = string;

/** MoneyV2 - a decimal amount paired with a currency code. */
export interface Money {
  /** Decimal amount serialized as a string, e.g. "19.99". */
  amount: string;
  /** ISO 4217 currency code, e.g. "USD". */
  currencyCode: string;
}

/** ProductVariant - a purchasable variation of a product. */
export interface ProductVariant {
  /** Storefront API global ID, e.g. "gid://shopify/ProductVariant/123". */
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
}

/** Product - the core catalog entity. */
export interface Product {
  id: ProductId;
  handle: ProductHandle;
  title: string;
  priceRange: {
    minVariantPrice: Money;
  };
  variants: {
    nodes: ProductVariant[];
  };
}
