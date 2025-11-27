import React, { useState } from "react";
import type { ProductType } from "../../services/api/Products/types";

type Props = {
  product: ProductType;
};

const ProductsDetails: React.FC<Props> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


// function
function sum(a:number,b:number):number{
  return a + b;
}
sum(2,3);




  if (!product) {
    return <div className="p-4 text-gray-400">محصولی یافت نشد</div>;
  }

  const images = product.images || [];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleSetImg = (id: number) => {
    setCurrentImageIndex(id);
  };

  return (
    <div className="flex gap-8 px-4  transition-transform duration-200 ">
      {/* اسلایدر تصاویر */}
      <div className="flex  gap-2 w-1/2  ">
        <div className="relative   w-full  bg-gray-700 rounded-xl overflow-hidden flex  items-center justify-center">
          <div className="flex w-full h-full  gap-4">
            {images.length > 0 ? (
              <img
                src={images[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                className="object-cover h-full w-full"
              />
            ) : (
              <span className="text-sm text-gray-400">تصویری موجود نیست</span>
            )}
          </div>

          {/* دکمه‌های جابجایی */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded-xl hover:bg-opacity-75"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded-xl hover:bg-opacity-75"
              >
                ▶
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col  w-40    gap-2 overflow-x-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} - ${index + 1}`}
              className={`${
                index === currentImageIndex
                  ? "border-blue-500 border-4 opacity-100"
                  : " opacity-50"
              } object-cover h-full w-full border   rounded-xl`}
              onClick={() => handleSetImg(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-4 w-1/2">
        {/* عنوان و توضیحات */}
        <h3 className="text-white text-3xl font-semibold">{product.title}</h3>
        <p className="text-gray-400 text-lg mt-3  line-clamp-10">
          {product.description || "توضیحی موجود نیست"}
        </p>

        {/* دسته‌بندی */}
        <div className="flex gap-1 mt-2 items-center text-gray-400 text-sm">
          <span className="font-medium">دسته‌بندی:</span>
          <span>{product.category?.name || "نامشخص"}</span>
        </div>
        {/* قیمت */}
        <div className="mt-3 text-blue-400 font-semibold text-lg">
          {product.price?.toLocaleString()} $
        </div>

        <div className="flex gap-4 w-full mt-auto items-center justify-end  ">
          <button className="h-11 px-6 rounded-xl hover:scale-105 bg-blue-800">
            {" "}
            add to cart
          </button>
          <button className="h-11 px-6 rounded-xl hover:scale-105 bg-blue-500">
            add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
