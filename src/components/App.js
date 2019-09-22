import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const App = function() {
  const route = window.location.pathname;

  if (route === "/about") {
    return <AboutPage />;
  }
  return <HomePage />;
};

export default App;
