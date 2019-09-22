import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";

const App = function() {
  return (
    <div className="container-fluid">
      <Header />

      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </div>
  );
};

export default App;
