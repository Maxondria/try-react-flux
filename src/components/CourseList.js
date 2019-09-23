import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = function(props) {
  const renderRow = course => {
    return (
      <tr key={course.id}>
        <td>
          <Link to={`/course/${course.slug}`}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteCourse(course.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>Author's ID</td>
          <td>Category</td>
          <td>Delete Course</td>
        </tr>
      </thead>
      <tbody>{props.courses.map(renderRow)}</tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,

  deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
