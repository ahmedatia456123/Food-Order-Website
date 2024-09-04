import Header from './components/Layout/Header'
import React from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import {useState} from 'react'
import CartProvider from './store/CartProvider'
function App() {
  const [cartShowState, setCartShowState] = useState(false)

  const showCartHandler = () => {
    setCartShowState(true)
  }

  const hideCartHandler = () => {
    setCartShowState(false)
  }

  return (
    <CartProvider>
      {cartShowState && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </CartProvider>

  );
}

export default App;
