import productsData from '../data/products'
import cart, {
    addToCart, removeFromCart, isInCart,
    getItems, getCurrency, getTotal
} from '../ducks/cart'

describe("No action", () => {
    it("Should return the initial state (default) in case of an undefined state and action", () => {
        const initialState = {
            items: [],
            currency: 'MEX'
        };
        const action = { type: "" }
        const result = cart(undefined, action)

        expect(result).toEqual(initialState)
    })
})

describe("Add product to cart", () => {
    it("Should add a product id to the shopping cart list (cards.items)", () => {
        const product_id = 1
        //We can do this since is expected that the app pass the first test.
        const initialState = undefined

        const props = { id: product_id }
        const action = addToCart(product_id)
        const result = { cart: cart(initialState, action) }

        //We expect that the product id is part of the cart list in the state
        expect(isInCart(result, props)).toBe(true)
    })

    it("Should return a list with the products info after adding multiple the products id to the shopping cart", () => {
        const product_ids = [1, 4, 6]
        const products = productsData.filter(product => product_ids.includes(product.id))

        //We can do this since is expected that the app pass the first test.
        let state = undefined

        product_ids.map(id => {
            const action = addToCart(id)
            state = cart(state, action)
        })

        const result = {
            products: productsData,
            cart: state
        }

        //We expect that the product id is part of the cart list in the state
        expect(getItems(result)).toEqual(products)
    })
})

describe("Remove product from cart", () => {
    it("Should remove the product id from the shopping cart list", () => {
        //We can generate also a an array with a random selections of id's from the productData array
        const product_ids = [1, 4, 6] 

        //We can do this since is expected that the app pass the first test.
        let state = undefined

        product_ids.map(id => {
            const action = addToCart(id)
            state = cart(state, action)
        })

        const props = { id: product_ids[1] }
        const action = removeFromCart(product_ids[1])
        const result = { cart: cart(state, action) }

        //We expect that the product id is not longer part of the cart list in the state
        expect(isInCart(result, props)).toBe(false)
    })
})

describe("Get Currency", () => {
    it("Should return the actual currency", () => {
        //We can do this since is expected that the app pass the first test.
        const initialState = {
            items: [],
            currency: 'US'
        };

        const action = { type: '' }
        const result = { cart: cart(initialState, action) }

        expect(getCurrency(result)).toEqual(initialState.currency)
    })
})

describe("Total from cart items", () => {
    it("Should return the total value of the products in the shopping cart list", () => {
        const product_ids = [1, 4, 6]
        const products = productsData.filter(product => product_ids.includes(product.id))
        const total = products.reduce((prev, next) => prev + next.price, 0)

        //We can do this since is expected that the app pass the first test.
        let state = undefined

        product_ids.map(id => {
            const action = addToCart(id)
            state = cart(state, action)
        })

        const currentState = {
            products: productsData,
            cart: state
        }

        expect(getTotal(currentState)).toEqual(total)
    })
})