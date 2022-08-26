import React,{useContext} from 'react';
import { ProductContext } from '../Global/ProductContext';
import { cartContext } from '../Global/CartContext';
import Banner from './Banner';
const Products = () => {
    const {products} = useContext(ProductContext)
    // const {dispatch} = useContext(cartContext);
     const {dispatch}= useContext(cartContext);
    
  return (
    <div className='container'>
        <Banner/> 
    <div className='products' style={{marginTop:'30px'}}>
        {
            products.map((product)=>(
               
                <div className='product' key={product.id}>
                     <div className='pro'>
                    <div className='productImage'>
                     <img src={product.image} alt="not found"/>
                
                    </div>
                    <div className='productDetails'>
                        <div className='proName'>
                            {product.name}
                        </div>
                        <div className='proPrice'>
                            ${product.price}.000
                        </div>
                    </div>
                    <div className='proButton' onClick={()=>dispatch({type:'Add_To_Card',id:product.id, product})}>
                        Add to cart
                    </div>
                    
                    {product.status ==='hot'? <div className='hot'>HOt</div>: ''}
                    {product.status ==='new'? <div className='new'>New</div>: ''}
                    </div>
                    
                    
                </div>
            ))
        }
        
    </div> 
    </div>  
  );
}

export default Products;
