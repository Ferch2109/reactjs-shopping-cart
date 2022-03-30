import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import sessionReducer from './ducks/session'
import rolesReducer from './ducks/role_grants'
import usersReducer from './ducks/users'
import cartReducer from './ducks/cart'
import productsReducer from './ducks/products'
import App from './App'
import usersData from './data/users'
import productsData from './data/products'
import rolesData from './data/role_grants'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    roles: rolesReducer,
    cart: cartReducer,
    products: productsReducer
})

let store = createStore(
    rootReducer,
    {
        users: usersData,
        roles: rolesData, // initial store values
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
