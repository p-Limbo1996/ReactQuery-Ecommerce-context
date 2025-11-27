import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "./endpoints";
import type { ProductsType, ProductType } from "./types"; // فرض بر اینکه تایپ قبلی رو استفاده می‌کنیم

export const useGetProducts = (categoryId: number = 0) => {
  const { data = [], error, isLoading, isError, status } = useQuery<ProductsType>({
    queryKey: ["products", categoryId],
    queryFn: () => fetchProducts(categoryId),
  });

  return { data, error, isLoading, isError, status };
};
export const useGetProductById = (productId: number) => {
  const { data, error, isLoading, isError, status } = useQuery<ProductType>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId, // فقط زمانی اجرا شود که productId معتبر باشد
  });
return { data, error, isLoading, isError, status };
}

