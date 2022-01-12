import { useState, useEffect } from "react";
import BaseTemplateTeacher from "../components/BaseTemplateTeacher";
import axios from "axios";

function TeacherEntry() {
  const [allStudents, setallStudents] = useState({});
  const [max, setMax] = useState({});
  const [marks, setMarks] = useState({});
  const [type, setType] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/getAllStudents").then((res) => {
      setallStudents(res.data.students);
    });
  }, []);

  const [students, setstudents] = useState([]);
  const [selected, setselected] = useState(0);
  const classes = Object.keys(allStudents);
  const renderClasses = classes.map((item) => {
    return <option value={item}>{item}</option>;
  });
  const changeClass = (e) => {
    console.log(e.target.value);
    setstudents(allStudents[e.target.value]);
  };

  const renderStudent = students.map((item, index) => {
    if (selected === index) {
      return (
        <div className="p-4 cursor-pointer bg-gray-200 border-b-2">{item}</div>
      );
    } else {
      return (
        <div
          onClick={() => {
            setselected(index);
          }}
          className="p-4 cursor-pointer hover:bg-gray-200 border-b-2"
        >
          {item}
        </div>
      );
    }
  });
  return (
    <BaseTemplateTeacher>
      <section className="col-span-2 border  ">
        <div className="m-16 mb-0">Choose class</div>
        <div className="m-16 mt-3">
          <select
            onChange={changeClass}
            className="p-4 rounded-lg w-full border"
          >
            <option disabled selected hidden>
              Select Class
            </option>
            {renderClasses}
          </select>
        </div>
        <div className="mt-10 m-16 overflow-auto" style={{ height: "79vh" }}>
          {renderStudent}
        </div>
      </section>
      <section className=" col-span-2 border border-r-0">
        <div className="border-b-2">
          <div className="m-10">{students[selected]}</div>
        </div>
        <div className="ml-10 mt-10 mr-10">
          <div className="text-xl">Enter Marks</div>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="p-4 mt-10 rounded-lg w-full border"
          >
            <option disabled selected hidden>
              Choose category
            </option>
            <option value="Assignment1"> Assignment1</option>
            <option value="Assignment2"> Assignment2</option>
            <option value="Quiz1">Quiz1</option>
            <option value="Quiz1">Quiz2</option>
            <option value="CIE1">CIE1</option>
            <option value="CIE2">CIE2</option>
            <option value="CIE3">CIE3</option>
          </select>
          <form action="">
            <input
              type="text"
              placeholder="max marks"
              onChange={(e) => setMax(e.target.value)}
              className="border p-2 w-full rounded-md mt-10"
            />
            <input
              type="text"
              placeholder="marks obtained"
              onChange={(e) => setMarks(e.target.value)}
              className="border p-2 w-full rounded-md mt-3"
            />
            <button
              className="mt-16 bg-yellow-300 w-full  p-3 rounded-lg"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post("http://localhost:5000/addEntry", {
                    usn: students[selected],
                    type: type,
                    total: max,
                    marksObtained: marks,
                  })
                  .then((res) => {
                    if (res.status === 200) return alert("added");
                    alert("something went wrong");
                  });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </BaseTemplateTeacher>
  );
}
export default TeacherEntry;
