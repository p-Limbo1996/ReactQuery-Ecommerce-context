import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./endpoints";

export const useGetCategories = () => {
  const { data = [], error, isLoading, isError, status } = useQuery({
    queryKey: ["categories"],
    queryFn:fetchCategories,
  });

  return { data, error, isLoading, isError, status };
};

