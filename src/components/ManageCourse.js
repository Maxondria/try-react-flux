import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

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

  const handleSubmit = async event => {
    event.preventDefault();
    await courseApi.saveCourse(course);
    props.history.push("/courses");

    toast.success("🦄 Course Saved!", {
      position: "top-right"
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
