import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = function(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setCourse({
      ...course,
      [name]: value
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
