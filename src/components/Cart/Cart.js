import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ history, items, total, currency, removeFromCart }) => {

    const onBuy = () => history.push('/ticket')
    
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        {total > 0 && <div className="cart__subtotal">Subtotal: {total} {currency}</div>}
                        {total > 0 && <div className="cart__iva text-danger">+16% IVA</div>}
                        <div className="cart__total">Total: {total + total * 0.16} {currency}</div>
                        <button
                            className='cart__button btn btn-danger'
                            onClick={onBuy}
                            disabled={!Boolean(total)}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
