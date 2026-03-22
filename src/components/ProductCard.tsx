import { Link } from "react-router"
import type { Product } from "../interfaces/products.interface"

export const ProductCard = ({ product }: { product: Product }) => {
    const placeholder = "https://placehold.co/1000x1000?text=Product&bg=E5E7EB&fg=6B7280";
    return (
        <div className="group relative">
            <img
                alt={product.title}
                src={product.images[0]}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholder;
                }}
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.category}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    )
}
