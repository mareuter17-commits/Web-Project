import { getProducts } from "../../lib/queries";

export const metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  const products = await getProducts(20);

  return (
    <main>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} — {product.handle}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
