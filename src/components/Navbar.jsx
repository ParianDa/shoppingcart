import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-box'>
            <span className='logo'>
                Parian Cart
            </span>
            <div className='cart'>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>100</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar