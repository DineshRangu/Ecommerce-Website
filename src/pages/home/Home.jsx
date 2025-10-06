import React, { useState, useRef } from 'react';
import Nav from '../../components/nav/nav';   
import bg from '../../assets/bg0.gif';
import './Home.css';
import { category } from '../../Category';
import Product from '../../components/Product/Product';
import { dummydata } from '../../dummydata.js';

function Home() {
  let [cate, setCate] = useState(dummydata);
  const productRef = useRef(null); // <-- add this

  function filterProducts(category) {
    const updatedata = dummydata.filter((item) => item.category === category);
    setCate(updatedata);

    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="category-section">
        {category.slice(0,5).map((item) => (
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

      <h1>Trending Products</h1>
      <div className="product-section" ref={productRef}>
        {cate.slice(0,5).map((item) => (
          <Product 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} id={item.id}/>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
