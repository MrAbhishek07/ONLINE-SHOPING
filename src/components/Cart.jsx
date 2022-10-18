import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../features/cartSlice';



const Cart = () => {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };


    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    };

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    };

    const handleClearCart = () => {
        dispatch(clearCart())
    };


    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16" >
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                    <p>YOUR CART IS CORRENTLY EMPTY</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (<div>
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.title} />
                                <div>
                                    <h3>{cartItem.title}</h3>
                                    <p>{cartItem.description}</p>
                                    <button onClick={() => handleRemoveCart(cartItem)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">${cartItem.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                <div className="count"> {cartItem.cartQuantity}</div>
                                <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ${cartItem.price * cartItem.cartQuantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className='amount'>${cart.cartTotalAmount}</span>
                        </div>
                        <p>texes and shipping calculated at ckeckout</p>
                        <button>Check Out</button>
                        <div className="Continue-shopping">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default Cart;