import { useGetCategories } from "../../services/api/Categories/hooks";

type Props = {
  categoryId: number;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
};

const Categories: React.FC<Props> = ({ categoryId, setCategoryId }) => {
  const { data = [], isLoading, isError, error } = useGetCategories();

  if (isLoading) {
    return <div className="p-4 text-gray-400">در حال بارگذاری...</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">خطا: {error?.message}</div>;
  }

  return (
    <div className="flex gap-2 overflow-x-auto py-2 mr-6">
           <div
            key={0}
            onClick={() => setCategoryId(0)}
            className={`
                relative w-full overflow-hidden  cursor-pointer transition-colors h-20 
              
            `}
          >
             <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="All Categories" className={` ${categoryId === 0 ? "border-blue-600 border-4 text-white" : " text-gray-100 hover:bg-gray-700"} w-full border h-full object-cover rounded-full `} />
            <h3 className="font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 bg-opacity-50 px-2 rounded  text-center backdrop-blur-sm">All Categories</h3>
          </div>
      {data.map((category) => {
        const isActive = category.id === categoryId;
        return (
          <div
            key={category.id}
            onClick={() => setCategoryId(category.id)}
            className={`
                relative w-full  cursor-pointer transition-colors h-20 
              
            `}
          >
             <img src={category?.image || "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" } alt={category.name} className={` ${isActive ? "border-blue-600 border-4 text-white" : " text-gray-100 hover:bg-gray-700"} w-full border h-full object-cover rounded-full `} />
            <h3 className="font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 bg-opacity-50 px-2 rounded  text-center backdrop-blur-sm">{category.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
