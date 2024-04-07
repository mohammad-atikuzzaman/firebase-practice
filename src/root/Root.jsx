import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
