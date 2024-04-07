import { Outlet } from "react-router-dom";

const Accounts = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-red-500">
        this is account section If you have not any account you can register or
        have any account you can log in
      </h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Accounts;
