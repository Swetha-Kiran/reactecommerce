import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [data, setData] = useState([])

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = input;

    if (name === "") {
      alert(' Name field is required!')
    } else if (email === "") {
      alert(' Email field is required!')
    } else if (!email.includes("@") || (!email.includes("."))) {
      alert(' Invalid email')
    } else if (password === "") {
      alert('Password is required!')
    } else if (password.length < 5) {
      alert('Password must be atleast 5 characters long')
    } else {
      console.log("Registered succesfully");
      localStorage.setItem("user", JSON.stringify([...data, input]));
      navigate('/login');
    }
  }

  return (
    <section class="vh-100" >
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">Your Name</label>
                          <input type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })}
                            style={{ width: "100%" }}
                            id="form3Example1c"
                            class="form-control" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Your Email</label>
                          <input type="email"
                            name="email"
                            value={input.email}
                            onChange={(e) => setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })}
                            style={{ width: "100%" }}
                            id="form3Example3c"
                            class="form-control" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Password</label>
                          <input type="password"
                            name="password"
                            value={input.password}
                            onChange={(e) => setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })}
                            style={{ width: "100%" }}
                            id="form3Example4c"
                            class="form-control" />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg" style={{ width: "150px" }}>Register</button>
                      </div>
                      <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to={"/login"}
                        className="link-danger">Login</Link></p>
                    </form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register