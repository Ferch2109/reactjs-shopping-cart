import React from 'react'
import ProductList from '../containers/ProductList'
import Cart from '../containers/Cart'

const HomeView = ({ history }) => {

    return (
        <div className="row">
            <div className="col-md-8">
                <ProductList />
            </div>
            <div className="col-md-4">
                <Cart history={history}/>
            </div>
        </div>
    )
}

export default HomeView