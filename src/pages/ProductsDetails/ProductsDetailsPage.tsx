import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../services/api/Products/hooks";
import ProductsDetails from "./ProductsDetails";

const ProductsDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data, isLoading, isError, error } = useGetProductById(productId);

  if (isLoading) return <div className="p-6 text-gray-300">در حال بارگذاری...</div>;
  if (isError) return <div className="p-6 text-red-400">خطا: {error?.message}</div>;

  return (
    <div className="h-full w-full overflow-y-auto rounded-xl">
      <h2 className="text-white text-2xl p-4 font-bold">Product Details</h2>
      {data ? (
        <ProductsDetails product={data && data  } />
      ) : (
        <div className="p-6 text-gray-400">محصولی یافت نشد.</div>
      )}
    </div>
  );
};

export default ProductsDetailsPage;
