
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from "./Components/Cart/Cart.jsx"
import { CartProvider } from './Context/CartContext';


function App() {

  function onAdd(){
    alert(`Se añadieron los items a tu Carrito!`)
  }

  return (
    <CartProvider> 
      <main> 
        <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
      </main>
    </CartProvider>
  );
}

export default App;
