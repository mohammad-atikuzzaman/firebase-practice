import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../AuthContex/AuthContexComponent";

const Register = () => {

  const { registerWithEmailPassoward } = useContext(AuthContex);
  const [success, setSuccess] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  // console.log(RegisterWithEmailPassoward);

  const handleRegister =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    registerWithEmailPassoward(email, password)
    .then(result => setSuccess("Account created successfully"))
    .catch(err => setErrorMsg(err.message))
    // console.log(email,password)
  }
  console.log(success, errorMsg)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="login" className="label-text-alt link link-hover">
                  Have an account? Login
                </Link>
              </label>
              <div></div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
