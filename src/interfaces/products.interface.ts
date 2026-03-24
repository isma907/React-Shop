import type { Category } from './category.interface';

export interface productFilters {
  title?: string;
  price_min?: number;
  price_max?: number;
  categoryId?: number;
  categorySlug?: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface CartItem {
  quantity: number;
  productId: number;
  product: Product;
}
