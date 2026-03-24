import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import { useCartStore } from '../store/cart.store';

export default function Header() {
  const { cartItems } = useCartStore();

  return (
    <header className="main-navbar bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between gap-4">
          <div className="text-xl font-bold cursor-pointer">
            <Link to="/">MyShop</Link>
          </div>
          {/* <div>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="border border-gray-300 px-3 py-1 min-h-15
                            min-w-80
                               rounded-2xl
                            "
                        />
                    </div> */}

          <div className="text-gray-500 hover:text-indigo-700">
            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 " />
              Cart
              {cartItems.length > 0 && (
                <span className="ml-2 text-xs font-medium text-white bg-red-600 rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
