import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault(); // Stop form refresh

      // Collect data from form
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
          console.log('user created at fb', result.user);
          const createdAt = result?.user?.metadata?.creationTime;

          const newUser = { name, email, createdAt }// Store data in an object
            fetch('http://localhost:5000/user',{ // Send data to backend API
              method:'POST',// POST method to send data
              headers: {
                'content-type':'application/json',// Specify JSON format
              },
              body: JSON.stringify(newUser)// Convert API response to JSON
            },
          )
          .then(res => res.json())
          .then(data =>{
            console.log(data)
          })
        })
        .catch(error => {
            console.log(error)
        })
    };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
            <p>
              New to coffee drinker: <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
