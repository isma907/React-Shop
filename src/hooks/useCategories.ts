import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/categories.service';
import type { Category } from '../interfaces/category.interface';

export const useCategories = () => {
  const categoriesQuery = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: Infinity,
  });

  return { categoriesQuery };
};
