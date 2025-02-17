import React, { useEffect, useState, useRef, useId } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

const CyclOPediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  //const [totalRender, setTotalRender] = useState(0);
  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const feedbackInput = useRef(null);
  const inputNameId = useId();

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  useEffect(() => {
    totalRender.current = totalRender.current + 1;
  }, [state.studentCount]);

  useEffect(() => {
    console.log("This will be called on Every Render");
  });

  useEffect(() => {
    console.log("This will be called on Initial/first Render/Mount");

    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    feedbackInput.current.focus();

    return () => {};
  }, []);

  useEffect(() => {
    // setTotalRender((prevState) => prevState + 1);
    prevStudentCount.current = state.studentCount;
    console.log("render" + totalRender.current);
  });

  const handleAddStudnet = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudnets = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handletoggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor &nbsp;</span>
        <i
          className={`bi  ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
          onClick={handletoggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <Instructor instructor={state.instructor} />
        ) : null}
      </div>{" "}
      <div className="p-3">
        <span className="h3 text-success">
          Total Render: {totalRender.current}
        </span>
      </div>
      <div className="p-3">
        <span className="h3 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          placeholder="Name.."
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          id={inputNameId}
        ></input>
        <label htmlFor={inputNameId}> Value:</label>
        {inputName}
        <br />
        <textarea
          value={inputFeedback}
          ref={feedbackInput}
          placeholder="Feedback..."
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
        ></textarea>
        Feedback:{inputFeedback}
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span> <br />
        <div>Student Count :{state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudnet}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudnets}
        >
          Remove All Students
        </button>
      </div>
      {state.studentList.map((student, index) => {
        return (
          <div className="text-white" key={index}>
            - {student.name}
          </div>
        );
      })}
    </div>
  );
};

export default CyclOPediaFuncPage;
