import type { Category } from '../interfaces/category.interface';

export function getCategories(): Promise<Category[]> {
  return fetch('https://api.escuelajs.co/api/v1/categories')
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
