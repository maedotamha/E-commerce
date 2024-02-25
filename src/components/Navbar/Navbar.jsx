import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src = {logo} alt = "logo"/>
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style = {{textDecoration: 'none'}} to ='/'> Shop </Link>{menu === "shop"? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style = {{textDecoration: 'none'}} to = '/mens'> Men </Link> {menu === "mens"? <hr/> :<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style = {{textDecoration: 'none'}} to = '/womens'>Women </Link>{menu === "womens"? <hr/> :<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style = {{textDecoration: 'none'}} to = '/kids'>kids </Link>{menu === "kids"? <hr/> :<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to ='/login'><button>Login</button></Link> 
            <Link to = '/cart'><img src ={cart_icon} alt = "icon"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}