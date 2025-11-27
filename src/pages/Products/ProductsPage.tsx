import React from "react";
import { useGetProducts } from "../../services/api/Products/hooks";
import ProductsList from "./ProductsList";
import Categories from "../../components/Categories/Categories";

const ProductsPage: React.FC = () => {
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const { data, isLoading, isError, error } = useGetProducts(categoryId);

  if (isError)
    return (
      <div className="p-6 text-gray-300 h-10vw w-full flex items-center justify-center">
        خطا: {(error as Error)?.message}
      </div>
    );

  return (
    <div className="  h-full  w-full overflow-y-auto rounded-xl ">
      <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
      <h2 className="text-white text-2xl p-4 font-bold">Products</h2>

      {!isLoading ? (
        data.length === 0 ? (
          <div className="p-6 text-gray-300 h-[28vw] w-full flex items-center justify-center">
            محصولی یافت نشد
          </div>
        ) : (
          <ProductsList products={data ?? []} />
        )
      ) : (
        <div className="p-6  gap-4 text-gray-300 h-[28vw]  w-full flex items-center justify-center">

          <div className="h-6 w-6 rounded-full border-x-4 border-blue-600 animate-spin"></div>
          در حال بارگذاری 
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
