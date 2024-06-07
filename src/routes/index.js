import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "../pages/auth";
import HomePage from "../pages/home";
import AddBookPage from "../pages/addBook";
import EditBookPage from "../pages/editBook";
import RequiredAuth from "../components/layouts/RequiredAuth";
import RootLayout from "../components/layouts/RootLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="auth" element={<LoginPage />} />

      <Route element={<RequiredAuth />}>
        <Route path="home" element={<HomePage />} />
        <Route path="add-book" element={<AddBookPage />} />
        <Route path="edit-book/:id" element={<EditBookPage />} />
      </Route>
    </Route>
  )
);

export default Router;
