import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';

const RelatedProducts = ({ productId }: { productId: number }) => {
  const { data: relatedProducts, isFetching } = useProducts(productId).relatedProductsQuery;

  const products = relatedProducts ?? [];
  const isInitialLoading = isFetching && !products.length;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related products</h2>

        {isFetching && !isInitialLoading && (
          <span className="text-sm text-gray-400 animate-pulse">Updating...</span>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {isInitialLoading
          ? Array.from({ length: 8 }).map((_, i) => <RelatedProductSkeleton key={i} />)
          : products.map((product: any) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default RelatedProducts;

function RelatedProductSkeleton() {
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
