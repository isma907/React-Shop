import { useParams } from "react-router"
import { useProducts } from "../hooks/useProducts"

const Product = () => {
    const { id: productId } = useParams()
    const id = productId ? Number(productId) : undefined
    const { data: product, isFetching } = useProducts(id).productQuery

    return (
        <div>
            {
                isFetching && "Loading product..."
            }
            {product && <h1>{product.title}</h1>}
        </div>
    )
}

export default Product
