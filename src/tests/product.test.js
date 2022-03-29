import productsData from '../data/products'
import products, { getProduct, getProducts } from '../ducks/products'

describe("No action", () => {
    it("Should return the initial state (default) in case of an undefined state and action", () => {
        const initialState = []
        const action = { type: "" }
        const result = products(undefined, action)

        expect(result).toEqual(initialState)
    })
})

describe("Get product", () => {
    it("Should return the product associated with the id provided", () => {
        const state = { products: productsData }
        const product = productsData[Math.floor(Math.random() * productsData.length)];

        const result = getProduct(state, { id: product.id })

        expect(result).toEqual(product)
    })

    it("Should return the current product list", () => {
        const _products = productsData.splice(0, Math.floor(productsData.length / 2))
        const state = { products: _products[0] }

        const result = getProducts(state)

        expect(result).toEqual(_products[0])
    })
})
