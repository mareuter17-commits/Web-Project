import { shopify } from "./shopify";
import type { Product } from "./types";

/**
 * The product fields selected by PRODUCTS_QUERY.
 *
 * The homepage only needs id, title, and handle, so the query
 * intentionally requests nothing more. Additional Product fields
 * (variants, prices) remain available in lib/types.ts for future
 * queries without being fetched here.
 */
export type ProductListItem = Pick<Product, "id" | "title" | "handle">;

/** Response shape of PRODUCTS_QUERY. */
export interface ProductsQueryData {
  products: {
    nodes: ProductListItem[];
  };
}

/**
 * Minimal product list query. The selection set is intentionally
 * identical to the original homepage query in app/page.tsx.
 */
export const PRODUCTS_QUERY = `#graphql
  query Products($first: Int!) {
    products(first: $first) {
      nodes {
        id
        title
        handle
      }
    }
  }
`;

/**
 * Fetches the first `first` products from Shopify.
 * Throws if the Storefront API responds with errors or without data.
 * Server-side only: credentials are read from environment variables
 * by lib/shopify.ts and never leave the server.
 */
export async function getProducts(first: number): Promise<ProductListItem[]> {
  const { data, errors } = await shopify.request<ProductsQueryData>(
    PRODUCTS_QUERY,
    { variables: { first } }
  );

  if (errors) {
    console.error(errors);
    throw new Error("Unable to load Shopify products");
  }

  if (!data) {
    throw new Error("Unable to load Shopify products");
  }

  return data.products.nodes;
}

/** Response shape of PRODUCT_BY_HANDLE_QUERY. */
export interface ProductByHandleQueryData {
  product: ProductListItem | null;
}

/**
 * Minimal single-product query. Selects the same fields as
 * PRODUCTS_QUERY so both helpers share the ProductListItem type.
 */
export const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
    }
  }
`;

/**
 * Fetches a single product by its handle.
 * Returns null when no product exists for the handle.
 * Throws if the Storefront API responds with errors or without data.
 * Server-side only, like getProducts().
 */
export async function getProductByHandle(
  handle: string
): Promise<ProductListItem | null> {
  const { data, errors } = await shopify.request<ProductByHandleQueryData>(
    PRODUCT_BY_HANDLE_QUERY,
    { variables: { handle } }
  );

  if (errors) {
    console.error(errors);
    throw new Error("Unable to load Shopify product");
  }

  if (!data) {
    throw new Error("Unable to load Shopify product");
  }

  return data.product;
}
