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

      <div className="container relative">
        <HomeProducts />
      </div>
    </>
  );
}

function HomeProducts() {
  const { productsQuery } = useProducts();

  const products = productsQuery.data ?? [];
  const isInitialLoading = productsQuery.isLoading && !products.length;

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {isInitialLoading
          ? Array.from({ length: 12 }).map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}

function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-square bg-gray-200 rounded-lg" />

      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}
