import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import CoursesPage from "../CoursesPage";
import PageNotFound from "./NotFoundPage";

const AppRouter = function() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default AppRouter;
