import { useState } from "react";
import BaseTemplateTeacher from "../components/BaseTemplateTeacher";

function TeacherEntry() {
  const allStudents = {
    A: ["1", "1223", "123", "12345"],
    B: ["2", "s", "123", "as"],
    C: ["3", "12as23", "123", "12345"],
  };
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
          <select onChange={changeClass} className="p-4 rounded-lg w-full">
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
          <div className="m-10">this is bro</div>
        </div>
        <div className="ml-10 mt-10 mr-10">
          <div className="text-xl">Enter Marks</div>
          <select
            onChange={changeClass}
            className="p-4 mt-10 rounded-lg w-full"
          >
            <option disabled selected hidden>
              Choose category
            </option>
            {renderClasses}
          </select>
        </div>
      </section>
    </BaseTemplateTeacher>
  );
}
export default TeacherEntry;
