import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './CartCard.css';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

function CartCard({ name, price, image, cartId }) {
  const dispatch = useDispatch();

  return (
    <div className='CartCard'>
      <div className='left-card'>
        <img src={image} alt={name} />
        <div className='name-price'>
          <span>{name}</span>
          <span>Rs {price}/-</span>
        </div>
      </div>
      <div className='right-card'>
        <button onClick={() => dispatch(RemoveItem(cartId))}>
          Remove <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
