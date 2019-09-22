import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import CoursesPage from "../CoursesPage";
import PageNotFound from "./NotFoundPage";
import ManageCoursePage from "../ManageCourse";

const AppRouter = function() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Redirect path="/about-page" to="about" />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default AppRouter;
