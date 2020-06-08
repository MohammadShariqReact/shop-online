import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.componet';
import {connect} from 'react-redux';

const CartDropDown = ({cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(meraItem => (
                    <CartItem key={meraItem.id} item={meraItem}/>
                ))
            }
        </div>
        <CustomButton>Go to Check Out </CustomButton>
    </div>
);

const mapToStateProps = ({cart:{cartItems}}) => (
    {
        cartItems
    }
)
export default connect(mapToStateProps)(CartDropDown);
