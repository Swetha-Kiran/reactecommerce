import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./homepage.css"

function AllProducts() {

  const [products, setProducts] = useState([]);

  //fetch all the products from the api
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
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
        products.length <= 0 ? <div id="spinner">Loading....</div>
          :
          <>
            <h5 id="heading">All Products</h5>
            <section id="products" className="container mt-5">
              <div className="row">
                {
                  products.map((product) => {
                    const { id, title, price, category, image } = product;
                    return (
                      <Link to={`/products/${id}`} className="col-sm-12 col-md-6 col-lg-3 my-3 cursor-pointer">
                        <div className="card p-3 rounded">
                          <img
                            className="card-img-top mx-auto"
                            alt={title}
                            src={image} />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <h5>{title}</h5>
                            </h5>
                            <p className="card-text">Category : {category}</p>
                            <p className="card-text"> Price : Rs.{price}</p>
                          </div>
                          <button id="view_btn">View Details</button>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            </section>
          </>
      }
      <Footer />
    </div>
  )
}

export default AllProducts