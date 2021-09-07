import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from './CourseList'

function CoursesPage(props) {
  useEffect(() => {
    props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed " + error);
    });
  }, []);

  return (
    <>
      <h2>Courses Page</h2>
      <CourseList courses={props.courses} />
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
