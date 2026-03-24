import { Link } from 'react-router';
import type { CartItem } from '../interfaces/products.interface';
import { useCartStore } from '../store/cart.store';

export default function Cart() {
  const { cartItems, removeFromCart } = useCartStore();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-[50vh] ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">My Cart</h2>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {cartItems.map((item) => (
          <CartListItem product={item} />
        ))}

        <div className="flex items-center justify-between mt-8">
          <h3 className="text-lg font-medium text-gray-900">Total</h3>
          <p className="text-lg font-medium text-gray-900">
            ${cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

const CartListItem = ({ product }: { product: CartItem }) => {
  const { removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-3">
      <img
        src={product.product.images[0]}
        alt={product.product.title}
        className="h-24 w-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <Link to={`/product/${product.product.id}`}>
          <h3 className="text-lg font-medium text-gray-900">{product.product.title}</h3>
        </Link>
        <p className="text-sm text-gray-600">${product.product.price}</p>
        <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(product.productId)}
        className="text-sm text-red-600 hover:text-red-800 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};
