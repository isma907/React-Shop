import { Link } from "react-router";
import { useCategories } from "../hooks/useCategories"

export default function HomeCategories() {
    const { categoriesQuery } = useCategories()

    if (categoriesQuery.isLoading) return <div>Loading...</div>

    return (
        <nav className="navbar-categories">
            {categoriesQuery.data.map((category: { id: string; name: string; slug: string }) => (
                <Link key={category.id} to={`category/${category.slug}`}>
                    {category.name}
                </Link>
            ))}
        </nav>
    )
}
