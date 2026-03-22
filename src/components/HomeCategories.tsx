import { useCategories } from "../hooks/useCategories"

export default function HomeCategories() {
    const { categoriesQuery } = useCategories()

    if (categoriesQuery.isLoading) return <div>Loading...</div>

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categoriesQuery.data?.map((category) => (
                <div key={category.id} className="group relative">
                    <img
                        alt={category.name}
                        src={category.image}
                        className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
                    <h3 className="mt-6 text-sm text-gray-500">
                        <a href={category.slug}>
                            <span className="absolute inset-0" />
                            {category.name}
                        </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{category.slug}</p>
                </div>
            ))}
        </div>
    )
}
