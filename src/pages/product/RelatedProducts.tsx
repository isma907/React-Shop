import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';

const RelatedProducts = ({ productId }: { productId: number }) => {
  const { data: relatedProducts, isFetching } = useProducts(productId).relatedProductsQuery;
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related products</h2>

      {isFetching && <div>Loading...</div>}

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
