import { useParams } from "react-router"
import { useProducts } from "../../hooks/useProducts"
import RelatedProducts from "./RelatedProducts"

const Product = () => {
    const { id } = useParams()

    const productId = id ? Number(id) : undefined
    const { data: product, isFetching, isError } = useProducts(productId).productQuery

    if (isFetching) {
        return <div>Loading product...</div>
    }

    if (isError) {
        return <div>Error loading product</div>
    }

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt={product.title} width={450} />
            <p>
                {product.description}
            </p>
            <RelatedProducts productId={productId!} />
        </div>
    )
}

export default Product