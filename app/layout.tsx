import type { ReactNode } from "react";

export const metadata = {
  title: "Shopify Storefront",
  description: "Custom Shopify storefront",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
