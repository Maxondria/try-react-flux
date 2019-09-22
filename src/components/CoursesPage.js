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

  render() {
    return <h2>Courses</h2>;
  }
}

export default CoursesPage;
