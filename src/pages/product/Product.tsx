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

  if (isFetching) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="pt-16">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link to="/" className="mr-2 text-sm font-medium text-gray-900">
                    Home
                  </Link>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <Link
                  to={`/product/${product.id}`}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.title}
                </Link>
              </li>
            </ol>
          </nav>

          {isFetching && <div>Loading product...</div>}

          {/* Image gallery */}
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
            {/* <img
                        src={product.images[3] ?? placeholder}
                        className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = placeholder;
                        }}
                    /> */}
          </div>

          {/* Product info */}
          <div className="pt-10 pb-16 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$ {product.price}</p>

              <div className="mt-10">
                <button
                  onClick={() => addToCartMutation.mutate(product)}
                  disabled={addToCartMutation.isPending}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  {addToCartMutation.isPending ? 'Adding to bag...' : 'Add to bag'}
                </button>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Category</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.category.name}</p>
                </div>
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
    </>
  );
};

export default Product;
