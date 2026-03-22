export function getCategories() {
    return fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .catch(err => console.log(err))
}