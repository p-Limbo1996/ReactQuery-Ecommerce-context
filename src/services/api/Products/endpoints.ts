import axios from "axios";
import type { ProductsType, ProductType } from "./types";

export async function fetchProducts(categoryId: number=0): Promise<ProductsType> {
  const PRODUCTS_URL = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`;
  const { data } = await axios.get<ProductsType>(PRODUCTS_URL);
  return data;
}
export async function fetchProductById(productId: number): Promise<ProductType> {
  const PRODUCTS_URL = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const { data } = await axios.get<ProductType>(PRODUCTS_URL);
  return data;
}
  