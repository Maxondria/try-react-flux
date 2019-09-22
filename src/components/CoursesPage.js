import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

const CoursesPage = function() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  const renderRow = course => {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Author's ID</td>
            <td>Category</td>
          </tr>
        </thead>

        <tbody>{courses.map(renderRow)}</tbody>
      </table>
    </>
  );
};

export default CoursesPage;
