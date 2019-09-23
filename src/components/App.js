import React from "react";
import Header from "./common/Header";
import AppRouter from "./common/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = function() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
