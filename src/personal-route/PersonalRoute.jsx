import { useContext } from "react";
import { AuthContex } from "../AuthContex/AuthContexComponent";
import { Navigate } from "react-router-dom";

const PersonalRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
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
  return <Navigate to="/accounts/login"></Navigate>;
};

export default PersonalRoute;
