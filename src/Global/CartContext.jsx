import React, {createContext,useReducer} from 'react'
import CartReducer from './CartReducer';;
export const cartContext = createContext();
const CartContextProvider = (props) => {
 const [cart, dispatch] = useReducer(CartReducer,{shoppingCart:[],totalPrice:0,message: '', qty:0});

  return (
    <div>
  <cartContext.Provider value={{...cart,dispatch}}>
    
    {props.children} 
   </cartContext.Provider>
    </div>
  )
}

export default CartContextProvider;

