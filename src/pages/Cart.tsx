import { Link } from 'react-router';
import type { CartItem } from '../interfaces/products.interface';
import { useCartStore } from '../store/cart.store';

export default function Cart() {
  const { cartItems } = useCartStore();

  return (
    <div className="container">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Shopping cart</h1>

      <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
          {cartItems.length === 0 && (
            <div className="flex items-center justify-center min-h-60">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          )}

          {cartItems.length > 0 && (
            <>
              <div className="mt-8">
                <ul role="list" className="my-6 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <CartListItem key={item.product.id} item={item} />
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
                    Checkout
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const CartListItem = ({ item }: { item: CartItem }) => {
  const { removeFromCart } = useCartStore();

  return (
    <li key={item.product.id} className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={item.product.title}
          src={item.product.images[0]}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${item.product.id}`}>{item.product.title}</Link>
            </h3>
            <p className="ml-4">${item.product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {item.quantity}</p>

          <div className="flex">
            <button
              type="button"
              onClick={() => removeFromCart(item.product.id)}
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
