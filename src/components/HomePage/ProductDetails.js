import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ProductDetails() {

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  //fetch the required products using the product id
  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      console.log(data);
      setProductDetails(data);
    }
    fetchProductDetails();
  }, [id])

  //handle add to cart button
  const handleCart = (productDetails) => {
    console.log(productDetails);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExists = cart.find(item => item.id === productDetails.id)
    if (isProductExists) {
      const updatedCart = cart.map(item => {
        if (item.id === productDetails.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...productDetails, quantity: 1 }]))
    }
    alert("Product added to cart")
  }

  //rendering the component
  return (
    <>
      <Header />
      <div class="container container-fluid ">
        <div class="row f-flex justify-content-around">
          <div class="col-12 col-lg-5 img-fluid" id="product_image">
            <img src={productDetails?.image} alt="sdf" height="300" width="300" />
          </div>
          <div class="col-12 col-lg-5 mt-5">
            <h3>{productDetails?.title}</h3>
            <hr />
            <p><b>Category : </b>{productDetails?.category}</p>
            <hr />
            <p id="product_price"><b>Price :</b> Rs. {productDetails?.price}</p>
            <hr />
            <h4 class="mt-2">Description:</h4>
            <p>{productDetails?.description}</p>
            <hr />
            <button type="button" id="cart_btn" class="btn btn-primary d-inline ml-6" onClick={() => handleCart(productDetails)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails