import React from "react";
import Header from "./common/Header";
import AppRouter from "./common/AppRoutes";

const App = function() {
  return (
    <div className="container-fluid">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
