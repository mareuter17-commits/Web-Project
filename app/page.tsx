import { shopify } from "../lib/shopify";

const PRODUCTS_QUERY = `#graphql
  query Products {
    products(first: 5) {
      nodes {
        id
        title
        handle
      }
    }
  }
`;

export default async function Home() {
  const { data, errors } = await shopify.request(PRODUCTS_QUERY);

  if (errors) {
    console.error(errors);
    throw new Error("Unable to load Shopify products");
  }

  return (
    <main>
      <h1>Shopify Storefront</h1>

      <h2>Products</h2>

      {data.products.nodes.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {data.products.nodes.map((product) => (
            <li key={product.id}>
              {product.title} — {product.handle}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
