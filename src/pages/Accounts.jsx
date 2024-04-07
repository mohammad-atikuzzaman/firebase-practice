import { Outlet } from "react-router-dom";

const Accounts = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-purple-500 text-center bg-slate-50 py-4 px-2 rounded-xl my-4">
        this is account section If you have not any account you can register or
        have any account you can log in
      </h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Accounts;
