import React, { use } from 'react'
import { MdLocalMall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import './Nav.css'
import {useDispatch} from 'react-redux';
function Nav() {
  let dispatch=useDispatch()
  let items=useSelector(state=>state)
  console.log(items); 
  return (
    <div className='nav'>
      <div className="top-nav">
        <Link to="/">
          <div className="logo">
            <span>ShopSphere</span>
            <MdLocalMall />
          </div>
        </Link>

        <form className='search-box'>
          <input type="text" placeholder='Search Items..' />
          <button><IoSearch /></button>
        </form>

        <Link to="/cart"><div className="cart-box">
          <HiMiniShoppingCart />
          <span>{items.cart.length}</span>
        </div>
        </Link>
      </div>

      <div className="bottom-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
