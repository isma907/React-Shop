import { useQuery } from "@tanstack/react-query"
import { getProduct, getProducts, getRelatedProducts } from "../services/products.service"
import type { Product } from "../interfaces/products.interface"

export const useProducts = (id?: number) => {
    const productsQuery = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: Infinity,
    })

    const productQuery = useQuery<Product | null>({
        queryKey: ["product", id],
        queryFn: () => getProduct(id! as number),
        enabled: !!id,
        staleTime: Infinity,
    })


    const relatedProductsQuery = useQuery<Product[]>({
        queryKey: ["product related", id],
        queryFn: () => getRelatedProducts(id! as number),
        enabled: !!id,
        staleTime: Infinity,
    })
    return { productsQuery, productQuery, relatedProductsQuery }
}
