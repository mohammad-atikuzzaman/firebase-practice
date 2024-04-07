import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContex } from "../AuthContex/AuthContexComponent";

const Login = () => {
  const { logInWithEmailPassword} = useContext(AuthContex);
  const [showErrormessage, setShowErrMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmailPassword(email, password)
      .then(() => {
        navigate("/");
        e.target.reset();
      })
      .catch((err) => setShowErrMessage(err.message));
  };

  console.log(showErrormessage);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            If you have any accunt you can login your account. and if you have
            not an account you can register an accounts
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
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
                <Link
                  to={"/accounts"}
                  className="label-text-alt link link-hover">
                  Dont have account? Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              {showErrormessage && (
                <span className="text-red-500 ">
                  {showErrormessage.split(":")[1]}
                </span>
              )}
            </div>
          </form>
          <hr className="mx-6" />
          <div className="mx-auto p-2">
            <h2 className="text-center">Or Signin with</h2>
            <button className="btn btn-ghost text-center">
              <FcGoogle className="text-3xl"></FcGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
