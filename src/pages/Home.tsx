import HomeCategories from '../components/HomeCategories';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container min-h-[50vh] ">
          <HomeCategories />
        </div>
      </div>

      <div className="container">
        <HomeProducts />
      </div>
    </>
  );
}

function HomeProducts() {
  const { productsQuery } = useProducts();
  if (productsQuery.isFetching)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productsQuery.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
