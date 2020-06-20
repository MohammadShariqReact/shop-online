import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.componet';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';    
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


const CartDropDown = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {   cartItems.length ?(
                cartItems.map(meraItem => (
                    <CartItem key={meraItem.id} item={meraItem}/>
                ))
):(
            <span className='empty-message'>Your cart is empty</span>
 )
             }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>Go to Check Out </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);
export default withRouter(connect(mapStateToProps)(CartDropDown));
