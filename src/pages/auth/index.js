import React, { useState } from "react";
import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const existUser = {
    name: "user1",
    password: "12345",
    token:
      "eyJ1c2VybmFtZSI6InVzZXJzIiwicGFzc3dvcmQiOiJwYXNzd29yZDEyMyIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.S6QN_zMDVBzIqhM",
  };

  const handleChangeForm = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (
      formData.username === existUser.name &&
      formData.password === existUser.password
    ) {
      Cookies.set("token", existUser.token);
      Cookies.set("user", existUser.name);
      alert("Login successfully");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-10 text-white">
      <h1 className="text-3xl font-bold">Log in to your account</h1>

      <form className="max-w-md w-full flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-lg">User</label>
          <input
            type="text"
            name="username"
            placeholder="input username"
            className="px-3 py-2 bg-transparent rounded-md border border-slate-600"
            onChange={handleChangeForm}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg">Password</label>
          <div className="px-3 py-2 flex items-center gap-1 bg-transparent rounded-md border border-slate-600 focus-within:border-white">
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              placeholder="input password"
              className="bg-transparent w-full focus:outline-none"
              onChange={handleChangeForm}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <MdRemoveRedEye className="text-xl cursor-pointer" />
              ) : (
                <MdOutlineRemoveRedEye className="text-xl cursor-pointer" />
              )}
            </span>
          </div>
        </div>
        <button
          onClick={(e) => handleSignIn(e)}
          className="p-3 rounded-md bg-gray-700 font-medium text-white"
        >
          Sign in
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
