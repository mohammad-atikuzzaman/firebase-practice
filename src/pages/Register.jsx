import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../AuthContex/AuthContexComponent";

const Register = () => {
  const { registerWithEmailPassword } = useContext(AuthContex);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    registerWithEmailPassword(email, password)
      .then(() => {
        setSuccess("Account created successfully");
        setErrorMsg("");
        e.target.reset()
        navigate("/")
      })
      .catch((err) => {
        setErrorMsg(err.message);
         setSuccess("");
      });
  };
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
            <div>
              {success && <span className="text-green-600">{success}</span>}{" "}
              {errorMsg && (
                <span className="text-red-500">{errorMsg.split(":")[1]}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
