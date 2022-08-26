import React, {createContext,useState} from 'react';
import shirt from '../images/shirt.jpg';
import watch from '../images/watch.jpg';
import ring from '../images/Ring.jpg';
import cap from '../images/cap.jpg';
import glass from '../images/glass.jpg';
import sandel from '../images/sandel.jpg';
export const ProductContext= createContext();
const ProductContextProvider = (props) => {
  const [products] = useState([
    {id:1, name:'Shirt',  price: 300,image:shirt,status:'new'},
    {id:2, name:'Watch',  price: 5000,image:watch,status:'hot'},
    {id:3, name:'Ring',  price: 10000,image:ring,status:'hot'},
    {id:4, name:'Cap',  price: 200,image:cap,status:'hot'},
    {id:5, name:'Sandel',  price: 3000,image:sandel,status:'hot'},
    {id:6, name:'Glass',  price: 2500,image:glass,status:'new'},
    {id:4, name:'Cap',  price: 1200,image:cap,status:'new'},
    {id:5, name:'Sandel',  price: 3000,image:sandel,status:'hot'},
    {id:6, name:'Glass',  price: 2500,image:glass,status:'new'}
    
    
  ]);
  return (
    <div>
      <ProductContext.Provider value={{products: [...products]}}>
       {props.children}
      </ProductContext.Provider>
    </div>
  );
}

export default ProductContextProvider;
