import { getProductById } from "@/entities/product/api/get-product-by-id";
import { ProductDetailsWidget } from "@/widgets/product-details";
import { notFound } from "next/navigation";

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
