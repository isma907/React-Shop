import HomeCategories from "../components/HomeCategories";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
    const { productsQuery } = useProducts()
    if (productsQuery.isFetching) return <div>Loading...</div>

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <HomeCategories />

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {productsQuery.data?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </div>
    )
}
