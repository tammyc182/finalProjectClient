/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <Link to={`/campus/${student.campus.id}`}>
        <h2>{student.campus.name}</h2>
      </Link>
      <img src={student.imageUrl} height="200" alt="" />
      <h3>{"Email: " + student.email}</h3>
      <h3>{"GPA: " + student.gpa}</h3>

    </div>
  );

};

export default StudentView;