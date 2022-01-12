import BaseTemplate from "../components/BaseTemplate";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

function StudentReports(params) {
  let [assignmentdata, setasss] = useState([]);
  let [ciedata, setcie] = useState([]);
  let [quizdata, setquiz] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getScores", {
        sid: localStorage.getItem("sid"),
      })
      .then((res) => {
        const data = res.data;
        const ass = data.assignments;
        const cie = data.cie;
        const quiz = data.quiz;
        console.log(res.data);
        let assignmentdata1 = ass.map((item) => {
          return (
            <div className="p-4 m-2 rounded-xl bg-gray-100  ">
              <Doughnut
                data={{
                  labels: ["marks", "total"],
                  datasets: [
                    {
                      data: [item.marks, item.total],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                      ],
                    },
                  ],
                }}
              />
              <div className="text-center mt-5 ">{item.name}</div>
            </div>
          );
        });
        let quizdata1 = quiz.map((item) => {
          return (
            <div className="p-4 m-2 rounded-xl bg-gray-100  ">
              <Doughnut
                data={{
                  labels: ["marks", "total"],
                  datasets: [
                    {
                      data: [item.marks, item.total],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                      ],
                    },
                  ],
                }}
              />
              <div className="text-center mt-5 ">{item.name}</div>
            </div>
          );
        });
        let ciedata1 = cie.map((item) => {
          return (
            <div className="p-4 m-2 rounded-xl bg-gray-100  ">
              <Doughnut
                data={{
                  labels: ["marks", "total"],
                  datasets: [
                    {
                      data: [item.marks, item.total],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                      ],
                    },
                  ],
                }}
              />
              <div className="text-center mt-5 ">{item.name}</div>
            </div>
          );
        });
        setasss(assignmentdata1);
        setquiz(quizdata1);
        setcie(ciedata1);
      });
  }, []);

  return (
    <BaseTemplate>
      <section className="m-10 ">
        <div className="text-2xl font-semibold">Report for Assignment</div>
        <div className="flex items-center">{assignmentdata}</div>
        <div className="text-2xl font-semibold mt-10">Report for Quiz</div>
        <div className="flex items-center">{quizdata}</div>
        <div className="text-2xl font-semibold mt-10">Report for CIE</div>
        <div className="flex items-center">{ciedata}</div>
      </section>
    </BaseTemplate>
  );
}
export default StudentReports;
