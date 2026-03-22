import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../services/categories.service"

export const useCategories = () => {
    const categoriesQuery = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: Infinity,
    })

    return { categoriesQuery }
}