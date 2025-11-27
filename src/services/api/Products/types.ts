export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category?: ProductCategory; // ممکنه null باشه
  images?: string[];           // ممکنه خالی باشه
  creationAt: string;
  updatedAt: string;
};


export type ProductsType = ProductType[];
