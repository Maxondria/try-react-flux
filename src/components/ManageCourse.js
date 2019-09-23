import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = function(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]);

  const FormIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Please provide a title";
    if (!course.authorId) _errors.author = "Please choose an author";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    //Form Valid if _errors has no properties
    return Object.keys(_errors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setCourse({
      ...course,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!FormIsValid()) return;

    await courseApi.saveCourse(course);
    props.history.push("/courses");

    return toast.success("🦄 Course Saved!", {
      position: "top-right"
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
