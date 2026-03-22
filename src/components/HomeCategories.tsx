import { useCategories } from '../hooks/useCategories';

export default function HomeCategories() {
  const { categoriesQuery } = useCategories();
  const placeholder = 'https://placehold.co/1000x1000?text=Category&bg=E5E7EB&fg=6B7280';

  if (categoriesQuery.isLoading) return <div>Loading Categories...</div>;

  return (
    <>
      <h2 className="text-2xl font-semibold">Categories</h2>
      <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-5 lg:grid-cols-4 xl:gap-x-8">
        {categoriesQuery.data?.map((category) => (
          <div key={category.id} className="group relative">
            <img
              alt={category.name}
              src={category.image}
              className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = placeholder;
              }}
            />
            <h3 className="mt-6 text-sm text-gray-500">
              {/* <Link to={`/category/${category.slug}`}> */}
              <span className="absolute inset-0" />
              {category.name}
              {/* </Link> */}
            </h3>
            <p className="text-base font-semibold text-gray-900 hidden lg:block">
              {category.slug}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
