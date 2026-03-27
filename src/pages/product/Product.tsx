import { Link, useParams } from 'react-router';
import { useProducts } from '../../hooks/useProducts';
import RelatedProducts from './RelatedProducts';
import { useCart } from '../../hooks/useCart';

const Product = () => {
  const { id } = useParams();
  const { addToCartMutation } = useCart();

  const placeholder = 'https://placehold.co/1000x1000?text=Product&bg=E5E7EB&fg=6B7280';

  const productId = id ? Number(id) : undefined;

  const { data: product, isFetching, isError } = useProducts(productId).productQuery;

  const isInitialLoading = isFetching && !product;

  if (isInitialLoading) {
    return <ProductSkeleton />;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to="/" className="mr-2 text-sm font-medium text-gray-900">
                  Home
                </Link>
              </div>
            </li>
            <li className="text-sm">
              <Link
                to={`/product/${product.id}`}
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </Link>
            </li>
          </ol>
        </nav>

        {isFetching && (
          <div className="mt-2 text-sm text-gray-400 animate-pulse">Updating product...</div>
        )}

        <div className="mt-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img
            src={product.images[0] ?? placeholder}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = placeholder;
            }}
          />
          <img
            src={product.images[1] ?? placeholder}
            className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = placeholder;
            }}
          />
          <img
            src={product.images[2] ?? placeholder}
            className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = placeholder;
            }}
          />
        </div>

        <div className="pt-10 pb-16 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.title}</h1>
          </div>

          <div className="mt-4 lg:mt-0">
            <p className="text-3xl text-gray-900">$ {product.price}</p>

            <button
              onClick={() => addToCartMutation.mutate(product)}
              disabled={addToCartMutation.isPending}
              className="mt-10 w-full rounded-md bg-indigo-600 px-8 py-3 text-white disabled:opacity-50"
            >
              {addToCartMutation.isPending ? 'Adding to bag...' : 'Add to bag'}
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:pt-6 lg:pr-8">
            <p className="text-base text-gray-900">{product.description}</p>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Category</h2>
              <p className="text-sm text-gray-600">{product.category.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100">
        <div className="container py-16">
          <RelatedProducts productId={productId!} />
        </div>
      </div>
    </div>
  );
};

export default Product;

function ProductSkeleton() {
  return (
    <div className="pt-16 animate-pulse">
      <div className="container">
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 aspect-[3/4] bg-gray-200 rounded-lg" />
          <div className="space-y-4">
            <div className="aspect-[3/2] bg-gray-200 rounded-lg" />
            <div className="aspect-[3/2] bg-gray-200 rounded-lg" />
          </div>
        </div>

        <div className="mt-10 space-y-4 max-w-2xl">
          <div className="h-8 bg-gray-200 rounded w-2/3" />
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-200 rounded w-full" />
          <div className="h-20 bg-gray-200 rounded w-full" />
        </div>
      </div>
    </div>
  );
}
