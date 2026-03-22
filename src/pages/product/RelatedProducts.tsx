import { Link } from "react-router";
import { useProducts } from "../../hooks/useProducts";

const RelatedProducts = ({ productId }: { productId: number }) => {
    const { data: relatedProducts } = useProducts(productId).relatedProductsQuery;

    return (
        <div>
            <h3>Related products</h3>
            {!relatedProducts && <div>Loading...</div>}
            {relatedProducts && (
                <div>
                    {relatedProducts.map((p: any) => (
                        <div key={p.id}>
                            <img src={p.images[0]} alt={p.title} width={150} />
                            <h3>
                                {p.title}
                            </h3>
                            <Link to={`/product/${p.id}`}>Ver</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RelatedProducts;