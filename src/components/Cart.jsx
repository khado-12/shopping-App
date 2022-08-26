import React, { useContext } from 'react'
import { cartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//toast.configure();
const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(cartContext);
   const handleToken = async (token) => {
    const product = {name: "All products", price:totalPrice}
    const response = await axios.post("http://localhost:8080/checkout",{
 token,
 product
    });
    const {status} = response.data;
    if(status === "success"){
      dispatch({type:'EMPTY'});
      props.history.push(`/`);
      toast.success(" You have paid sucessfully now you can continious your shopping ",
       {
        position: toast.POSITION.TOP_RIGHT});
       
    }
   
   }
   console.log(shoppingCart);
  return (
    <div className='cartContainer'>
      <div className='containerDetails' style={{ margin: '100px' }}>
        {shoppingCart.length > 0 ?
          shoppingCart.map((cart) => (

            <div className='cart' key={cart.id}>
              <span className="cartProImage"><img src={cart.image} alt="no Image" /> </span>
              <span className='cartProductName'>{cart.name}</span>
              <span className='cartProductPrice'>${cart.price}.00</span>
              <span className='inc' onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><i className="fa fa-plus"></i></span>
              <span className='productQuantity'>{cart.qty}</span>
              <span className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><i className="fa fa-minus"></i></span>
              <span className='productTotalPrice'>${cart.price * cart.qty}.00</span>
              <span className='deleteCartPro' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><i className="fa fa-trash"></i></span>
            </div>

          )) :
          <div className='empty'>Sorry your card is currently empty </div>}
      </div>
       {
        shoppingCart.length > 0? 
    <div className="cartSummary">
      <div className='summary'>
      <h3>Cart Summary</h3>
        <div className='totalItems'>
          <div className='items'>Total Item</div>
          <div className='itemCount'>{qty}</div>
        </div>
        <div className='totalPriceSection'>
          <div className='justTitle'>Total Price</div>
          <div className='itemsPrice'>${totalPrice}.00</div>
        </div>
        <div className='stripeSection'>
         <StripeCheckout 
         stripeKey='pk_test_51LXVk2JCZIwZn5xOAxpaIGp5k37cQ0LnmqkxlAfL1ggOBUzqIbg5G8fTIlTedT8E32H2Sq185PpzXnHUc2vwfMSz001wgsB4tb'
         token={handleToken}
         billingAddress
         shippingAddress 
         amount={totalPrice* 100}
         name="All products"
         >

         </StripeCheckout>
        </div>
      </div>
      </div>:""} 
    </div>
  )
}

export default Cart;
