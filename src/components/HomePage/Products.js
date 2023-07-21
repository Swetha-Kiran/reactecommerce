import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom'


function Products({ products = [] }) {
  return (
    <div>
      <h5 id="heading">Most Featured Products</h5>
      <section id="products" className="container mt-5">
        <div className="row">
          {
            //map through the products array obtained as props
            products.map((product) => {

              //object destructuring
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
    </div>
  )
}

export default Products