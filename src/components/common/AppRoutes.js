import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import CoursesPage from "../CoursesPage";

const AppRouter = function() {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </>
  );
};

export default AppRouter;
