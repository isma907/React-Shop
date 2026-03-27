import { useCategories } from '../hooks/useCategories';

export default function HomeCategories() {
  const { categoriesQuery } = useCategories();
  const placeholder = 'https://placehold.co/1000x1000?text=Category&bg=E5E7EB&fg=6B7280';

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Categories</h2>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5 lg:grid-cols-5 xl:gap-x-8">
        {categoriesQuery.isFetching
          ? Array.from({ length: 5 }).map((_, i) => <CategorySkeleton key={i} />)
          : categoriesQuery.data?.map((category) => (
              <div key={category.id} className="group relative">
                <img
                  alt={category.name}
                  src={category.image}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 lg:aspect-square"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://placehold.co/1000x1000?text=Category&bg=E5E7EB&fg=6B7280';
                  }}
                />

                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {category.name}
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

function CategorySkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-square bg-gray-200 rounded-lg" />
      <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
    </div>
  );
}
