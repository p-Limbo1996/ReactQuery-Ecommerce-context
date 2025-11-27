import React from "react";
import { Link } from "react-router-dom";
import type { ProductType } from "../../services/api/Products/types";

type Props = {
  products: ProductType[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div className="p-4 text-gray-300">محصولی یافت نشد</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((p) => (
        <Link
          to={`/product/${p.id}`}
          key={p.id}
          className="bg-gray-800 border-gray-800   border hover:border hover:border-gray-600 p-4 transition-all duration-200 hover:-translate-y-2 rounded-lg hover:shadow-lg "
        >
          <div className="h-44 w-full mb-3 bg-gray-700 rounded overflow-hidden flex items-center justify-center">
            {p.images?.[0] ? (
              <img
                src={p.images[0]}
                alt={p.title}
                className="object-cover h-full w-full"
              />
            ) : (
              <span className="text-sm text-gray-400">No image</span>
            )}
          </div>
          <h3 className="text-white text-lg font-medium">{p.title}</h3>
          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
            {p.description}
          </p>
          <div className="flex gap-2">
            <span> category : </span>
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
              {p.category?.name}
            </p>
          </div> 

          <div>
            <div className="mt-3 text-blue-400 font-semibold">{p.price} $ </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
