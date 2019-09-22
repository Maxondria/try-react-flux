import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const courses = await getCourses();

    this.setState({
      courses
    });
  }

  renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
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

          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
