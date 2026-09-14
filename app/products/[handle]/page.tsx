import { notFound } from "next/navigation";
import { getProductByHandle } from "../../../lib/queries";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.title}</h1>

      <p>Handle: {product.handle}</p>
    </main>
  );
}
