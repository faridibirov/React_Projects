import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const totalLectures = "3";
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building
          TaskOPedia!
        </p>
        <p>Total Lectures - {totalLectures}</p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        {/* <div>
          Enter Task :
          <input maxLength={5} readOnly={false} placeholder="Ben10"></input>
        </div> */}
        <div className="row container">Students Enrolled</div>
        <Student
          experience={2}
          name="Kris Walley"
          headshot="https://i.pravatar.cc/150"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="Angel Patrice"
          headshot="https://i.pravatar.cc/151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Rene Parker"
          headshot="https://i.pravatar.cc/152"
        />
      </div>
    );
  }
}

export default MainBody;
