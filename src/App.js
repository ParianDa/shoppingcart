import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)

  const handleClick = (item) => {
      let isPresent = false;

      cart.forEach((product) => {
        if(item.id === product.id)
          isPresent = true
      })
      if(isPresent){
        setWarning(true)
        setTimeout(() => {
          setWarning(false)
        }, 2000);
        return;
      }
      setCart([...cart, item])
  }

  return (
    <div className="App">
      <Navbar size={cart.length}/>
      <Shop handleClick={handleClick}/>
      {warning && <div className='warning'>You already added the item</div>}
    </div>
  );
}

export default App;
