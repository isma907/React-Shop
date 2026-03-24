import type { Product } from '../interfaces/products.interface';

export async function addToCart(product: Product): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return product;
}
