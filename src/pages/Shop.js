import React, { useState } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaChevronDown } from 'react-icons/fa';

import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';
import product6 from '../assets/images/product6.png';
import product7 from '../assets/images/product7.png';
import product8 from '../assets/images/product8.png';

const products = [
  { id: 1, image: product1, price: '$30.00' },
  { id: 2, image: product2, price: '$30.00' },
  { id: 3, image: product3, price: '$30.00' },
  { id: 4, image: product4, price: '$30.00' },
  { id: 5, image: product5, price: '$30.00' },
  { id: 6, image: product6, price: '$30.00' },
  { id: 7, image: product7, price: '$30.00' },
  { id: 8, image: product8, price: '$30.00' },
];

const filterData = [
  {
    title: 'Categories',
    options: ['Shirt', 'T-Shirt', 'Pant', 'Dress'],
  },
  {
    title: 'Type',
    options: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    title: 'Size',
    options: ['1.2ft', '2.5ft', '3.2ft', '5.2ft'],
  },
  {
    title: 'Color',
    options: ['White', 'Green', 'Blue', 'Sky Blue', 'Gray'],
  },
  {
    title: 'Price Range',
    options: [
      '$10 - $20',
      '$20 - $30',
      '$50 - $80',
      '$100 - $120',
      '$200 - $300',
      '$500 - $600',
    ],
  },
];

function Shop() {
  const [openFilter, setOpenFilter] = useState({});

  const toggleFilter = (title) => {
    setOpenFilter((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="shop-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="breadcrumb">
          <Link to="/">HOME</Link> <span>&gt;</span> <span>SHOP</span>
        </div>
      </div>

      {/* Section Title */}
      <div className="section-title">
        <h2>SHOP WITH US</h2>
        <p>Browse from 230 latest items</p>
      </div>

      <div className="shop-content">
        {/* Sidebar Filters */}
        <div className="filters-sidebar">
          {filterData.map((section, idx) => (
            <div key={idx} className="filter-section">
              <div
                className="filter-title"
                onClick={() => toggleFilter(section.title)}
              >
                {section.title}
                <FaChevronDown className="dropdown-icon" />
              </div>
              {openFilter[section.title] && (
                <ul className="filter-options">
                  {section.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-area">
          <div className="product-grid">
            {products.map((item, index) => (
              <div
                className={`product-card ${index >= 6 ? 'two-per-row' : 'three-per-row'
                  }`}
                key={item.id}
              >
                <div className="product-image">
                  <img src={item.image} alt="product" />
                  <div className="cart-icon">
                    <FaShoppingCart />
                  </div>
                </div>
                <div className="product-info">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ffcc00" />
                    ))}
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;