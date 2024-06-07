import React from "react";
import { MdWbSunny } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setTimeout(() => {
      navigate("/auth");
    }, 1000);
  };

  return (
    <div className="sticky top-0 w-full px-20 py-4 flex justify-between items-center bg-slate-950 text-white">
      <button>Logo</button>
      <div className="flex items-center gap-3">
        <button className="p-3 rounded-md bg-gray-700">
          <MdWbSunny />
        </button>
        {token && (
          <button
            className="p-3 rounded-md bg-gray-700 leading-none"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
