import React, { useState, useEffect } from 'react'
import Products from "./Products"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {

  const [products, setProducts] = useState([]);

  //fetch the products the api
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit')
      const data = await response.json()
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, [])

  //rendering the component
  return (
    <div>
      <Header />
      {
        products.length > 0 ? <Products products={products} />
          : <div id="spinner">Loading....</div>
      }
      <Footer />
    </div>
  )
}

export default Home