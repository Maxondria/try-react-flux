import React, { useState, useEffect } from "react";
import CourseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

const CoursesPage = function() {
  const [courses, setCourses] = useState(CourseStore.getCourses());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (courses.length === 0) courseActions.loadCourses();

    //unmounting callback
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length]);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary my-2 float-right" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={courseActions.deleteCourse} />
    </>
  );
};

export default CoursesPage;
