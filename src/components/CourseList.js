import React from "react";

const CourseList = function(props) {
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
    <table className="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>Author's ID</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>{props.courses.map(renderRow)}</tbody>
    </table>
  );
};

export default CourseList;
