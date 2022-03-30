import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CartItemDetails from './CartItemDetails';

const Ticket = ({ history, items, total, currency }) => {

    useEffect(() => {
        if (total === 0)
            history.push('/')
    }, [history, total])

    const onReturn = () => history.push('/')

    return (
        <div className="ticket-root">
            <h3>Shopping Ticket</h3>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <>
                                        <CartItemDetails key={item.id} {...item} />
                                        <hr></hr>
                                    </>
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Ticket is empty</div>
                        )}
                        {total > 0 && <div className="cart__subtotal">Subtotal: {total} {currency}</div>}
                        {total > 0 && <div className="cart__iva text-danger">+16% IVA</div>}
                        <div className="cart__total">Total: {total + total * 0.16} {currency}</div>
                        <div className='cart__buttons'>
                            <button
                                className='btn btn-primary'
                                onClick={onReturn}
                            >
                                Return to Home
                            </button>
                            <button
                                className='btn btn-danger'
                                disabled
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Ticket.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Ticket;
