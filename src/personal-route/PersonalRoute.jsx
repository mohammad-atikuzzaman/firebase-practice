import { useContext } from "react";
import { AuthContex } from "../AuthContex/AuthContexComponent";
import { Navigate, useLocation } from "react-router-dom";

const PersonalRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/accounts/login" state={location.pathname}></Navigate>;
};

export default PersonalRoute;
