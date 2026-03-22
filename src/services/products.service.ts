import type { Product } from '../interfaces/products.interface';

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=1&limit=12');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getRelatedProducts(id: number): Promise<Product[]> {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}/related`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
