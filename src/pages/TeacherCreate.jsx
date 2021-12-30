import axios from "axios";
import BaseTemplateTeacher from "../components/BaseTemplateTeacher";

import { useState } from "react";

function TeacherReport() {
  const [priority, setPriority] = useState("Low");
  const [class2, setClass2] = useState("");
  const [class1, setClass1] = useState("");
  const [ntitle, setNtitle] = useState("");
  const [stitle, setStitle] = useState("");
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");

  function createSub(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createSubmissionRequest", {
        class: class1,
        tid: localStorage.getItem("tid"),
        desc: desc,
        title: stitle,
        deadline: deadline,
      })
      .then((res) => {
        if (res.data.statuscode === 200) {
          alert("SR made");
        } else {
          alert("SR couldnt be made");
        }
      });
  }
  function createNotification(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createNotification", {
        class: class2,
        tid: localStorage.getItem("tid"),
        priority: priority,
        title: ntitle,
      })
      .then((res) => {
        if (res.data.statuscode === 200) {
          alert("Notification made");
        } else {
          alert("Notification couldnt be made");
        }
      });
  }

  return (
    <BaseTemplateTeacher>
      <section className="m-16  col-span-2">
        <div className="text-3xl ">Create Submission</div>
        <form className="flex flex-col mt-10" action="">
          <div class="mb-6 flex items-center">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Assigning to:
            </label>
            <select
              onChange={(e) => setClass1(e.target.value)}
              name=""
              className="mx-2 p-2"
              id=""
            >
              <option value="5A">5A</option>
              <option value="5B">5B</option>
              <option value="5C">5C</option>
              <option value="5D">5D</option>
              <option value="5E">5E</option>
            </select>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Title
            </label>
            <input
              onChange={(e) => setStitle(e.target.value)}
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title of the Submission"
              required
            ></input>
            <div className="mt-6"> Deadline</div>
            <input
              onChange={(e) => setDeadline(e.target.value)}
              type="text"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deadline"
              required
            ></input>
          </div>
          <div class="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            onClick={createSub}
            className="p-5 bg-gray-800 rounded-lg font-bold text-yellow-200 "
          >
            SUBMIT
          </button>
        </form>
      </section>
      <section className="m-16  col-span-2">
        <div className="text-3xl ">Create Notification</div>
        <form className="flex flex-col mt-10" action="">
          <div className="flex justify-between">
            <div class="mb-6 flex items-center">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Priority:
              </label>
              <select
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
                name=""
                className="mx-2 p-2"
                id=""
              >
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="Med">Med</option>
              </select>
            </div>
            <div class="mb-6 flex items-center">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Assigning to:
              </label>
              <select
                onChange={(e) => {
                  setClass2(e.target.value);
                }}
                name=""
                className="mx-2 p-2"
                id=""
              >
                <option value="5A">5A</option>
                <option value="5B">5B</option>
                <option value="5C">5C</option>
                <option value="5D">5D</option>
                <option value="5E">5E</option>
              </select>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              onChange={(e) => setNtitle(e.target.value)}
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title of the Submission"
              required
            ></input>
          </div>

          <button
            onClick={createNotification}
            className="p-5 bg-gray-800 rounded-lg font-bold text-yellow-200 "
          >
            SUBMIT
          </button>
        </form>
      </section>
    </BaseTemplateTeacher>
  );
}
export default TeacherReport;
