import { Link } from "react-router";
import HomeCategories from "../components/HomeCategories";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
    const { productsQuery } = useProducts()
    if (productsQuery.isFetching) return <div>Loading...</div>

    return (
        <div>
            <h1>HOME</h1>
            <HomeCategories />
            <div className="content-wrapper">
                {productsQuery.data.map((el: any) => {
                    return (
                        <div key={el.id}>
                            <img src={el.images[0]} alt={el.title} width={200} />
                            {el.title}
                            <Link to={`/product/${el.id}`}>Ver</Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
