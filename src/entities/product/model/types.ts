export type Product = {
  id: string;
  category: string;
  brand: string;
  series: string;
  model: string;
  power: string;
  energyClass: string;
  price: number | string;
  features: string[];
  imageUrl: string | null;
  description: string | null;
  createdAt: string | Date;
  name: string;
  area: string;
};
