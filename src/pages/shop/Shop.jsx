import React, { useState } from 'react'
import './Shop.css'
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import Product from '../../components/Product/Product'
import { MdLocalMall } from "react-icons/md";
import { useRef } from 'react';
function Shop() {
  let [cate, setCate] = useState(dummydata) 
  const productRef = useRef(null);//  create ref
  
    function filterProducts(category) {
      if(category==="All"){
        setCate(dummydata)
      }
      else{
      const updatedata = dummydata.filter((item) => item.category === category)
      setCate(updatedata)
    }
  }
  return (
    <div className='shop'>
      <div className="heading">
        <span>Shop</span>
        <MdLocalMall />
      </div>
      <div className="category-section">
            {category.map((item) => (
              <div 
                className="category-card" 
                key={item.name} 
                onClick={() => filterProducts(item.name)}
              >
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
           <div className="product-section" ref={productRef}>
        {cate.map((item) => (
          <Product
            key  ={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
          </div>
  )
}

export default Shop