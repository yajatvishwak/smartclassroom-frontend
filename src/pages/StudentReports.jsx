import BaseTemplate from "../components/BaseTemplate";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function StudentReports(params) {
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)"],
      },
    ],
  };
  return (
    <BaseTemplate>
      <section className="m-10 ">
        <div className="text-2xl font-semibold">Report for Assignment</div>
        <div className="flex items-center">
          <div className="p-4 m-2 rounded-xl bg-gray-100  ">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Assignment 1</div>
          </div>
          <div className="p-4 m-2 rounded-xl bg-gray-100">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Assignment 2</div>
          </div>
          <div className="p-4 m-2 rounded-xl bg-gray-100">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Assignment 3</div>
          </div>
        </div>
        <div className="text-2xl font-semibold mt-10">Report for Quiz</div>
        <div className="flex items-center">
          <div className="p-4 m-2 rounded-xl bg-gray-100  ">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Quiz 1</div>
          </div>
          <div className="p-4 m-2 rounded-xl bg-gray-100">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Quiz 2</div>
          </div>
          <div className="p-4 m-2 rounded-xl bg-gray-100">
            <Doughnut data={data} />
            <div className="text-center mt-5 ">Quiz 3</div>
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
}
export default StudentReports;
