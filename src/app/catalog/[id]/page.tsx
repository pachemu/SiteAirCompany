import { getProductById } from "@/entities/product/api";
import products from "@/entities/product/model/products.data.json";
import { ProductDetailsWidget } from "@/widgets/product-details";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return (products as Array<{ id: string }>).map((p) => ({ id: p.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return notFound();

  return <ProductDetailsWidget product={product} />;
}
