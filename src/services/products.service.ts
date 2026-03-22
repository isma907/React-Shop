export function getProducts() {
    return fetch('https://api.escuelajs.co/api/v1/products?offset=1&limit=10')
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function getProduct(id: number) {
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function getRelatedProducts(id: number) {
    return fetch(`https://fakestoreapi.com/products/${id}/related`)
        .then(res => res.json())
        .catch(err => console.log(err))
}