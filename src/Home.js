import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/10/YL/KC/NY/12354778/ecommerce-online-shopping-website.png"
            alt=""
            className="home_image"
          />

          <div className="home__row">
            <Product
              id="12321341"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="49538094"
              title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="4903850"
              title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
              price={199.99}
              rating={3}
              image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
