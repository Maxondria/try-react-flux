import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

const getPage = function() {
  const route = window.location.pathname;

  if (route === "/about") {
    return <AboutPage />;
  }
  return <HomePage />;
};

const App = function() {
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
