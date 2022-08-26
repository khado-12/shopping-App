
import './App.css';

import Navbar from './components/Navbar';
 import CartContextProvider from './Global/CartContext';
import ProductContextProvider from './Global/ProductContext';
import Products from './components/Products';  
import Cart from './components/Cart';
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
    <BrowserRouter>
   
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*'  element={<NotFound/>}/>
        
      </Routes>
      
      
    </BrowserRouter>
    </CartContextProvider>
    </ProductContextProvider>
    
      
    </>
  );
}

export default App;
