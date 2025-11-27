import axios from "axios";
import type { ProductCategory } from "../Products/types";

export async function fetchCategories(): Promise<ProductCategory[]> {
  const CATEGORIES_URL = `https://api.escuelajs.co/api/v1/categories`;
  const { data } = await axios.get<ProductCategory[]>(CATEGORIES_URL);
  return data;
}
