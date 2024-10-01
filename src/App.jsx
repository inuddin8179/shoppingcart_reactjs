import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nvabar from './components/Nvabar'
import Shop from './components/Shop'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import CartPage from './page/CartPage';
import Scrolltop from './components/Scrolltop';
import Scrollbottom from './components/Scrollbottom';

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false)
  const [show, useShow] = useState(true)
  function handleClick(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return
    }
    setCart([...cart, item])
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <Scrolltop />
      <Scrollbottom />
      <Router>
        <Nvabar size={cart.length} />
        <Routes>
          <Route path="/" element={<Shop handleClick={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage cart={cart} total={total} />} />
        </Routes>
      </Router>


      {warning && alert('item is already present')}
    </div>
  )
}

export default App
