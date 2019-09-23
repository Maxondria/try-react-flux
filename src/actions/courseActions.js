import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export const saveCourse = function(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
};

export const loadCourses = function() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses
    });
  });
};
