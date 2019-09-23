import React, { useState, useEffect } from "react";
import CourseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

const CoursesPage = function() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(CourseStore.getCourses());
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary my-2 float-right" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
