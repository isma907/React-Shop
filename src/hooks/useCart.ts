import { useMutation } from '@tanstack/react-query';
import type { Product } from '../interfaces/products.interface';
import { addToCart } from '../services/cart.service';
import { useCartStore } from '../store/cart.store';

export const useCart = () => {
  const { addToCart: addToCartStore } = useCartStore();

  const addToCartMutation = useMutation({
    mutationFn: (product: Product) => addToCart(product),
    onSuccess: (data) => {
      addToCartStore(data);
    },
  });

  return { addToCartMutation };
};
