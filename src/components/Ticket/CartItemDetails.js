import React from 'react';
import PropTypes from 'prop-types';

const CartItemDetails = ({ name, price, image, currency }) => {
    return (
        <div className="cart-item">
            <div className='cart-image-content'>
                <img src={image} className="cart-image" />
            </div>
            <div className='cart-info'>
                <DisplayData label='Product name' value={name} />
                <DisplayData label='Price' value={`${price} ${currency}`} />
            </div>
        </div>
    );
}

CartItemDetails.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

const DisplayData = ({ label, value }) => (
    <div className='cart-display'>
        <div className='cart-label'>
            {label}:
        </div>
        <div className="cart-text">
            {value}
        </div>
    </div>
)
export default CartItemDetails;
