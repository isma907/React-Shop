import { useQuery } from "@tanstack/react-query"
import { getProduct, getProducts } from "../services/products.service"

export const useProducts = (id?: number) => {
    const productsQuery = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: Infinity,
    })

    const productQuery = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id! as number),
        enabled: !!id,
        staleTime: Infinity,
    })

    return { productsQuery, productQuery }
}
