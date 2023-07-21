import React, { useState } from 'react'
import "./login.css"
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { email, password } = input;

    if (email === "") {
      alert(' Email field is required!')
    } else if (!email.includes("@") || (!email.includes("."))) {
      alert(' Invalid email')
    } else if (password === "") {
      alert('Password is required!')
    } else if (password.length < 5) {
      alert('Invalid password')
    }
    else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password
        });
        if (userlogin.length === 0) {
          alert("invalid details")
        } else {
          console.log("user login succesfulyy");
          localStorage.setItem("loggedIn", "true")
          localStorage.setItem("user_login", JSON.stringify(userlogin))
          navigate("/home")
        }
      }
    }
  }

  //rendering the component
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Email address</label>
                <input type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">Password</label>
                <input type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) => setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })}
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password" />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLleft: "2.5rem", paddingLright: "2.5rem", marginRight: "40px" }}>Login</button>

                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"}
                  className="link-danger">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login