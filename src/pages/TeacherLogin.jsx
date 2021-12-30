import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function TeacherLogin(params) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/loginTeacher", { username, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "auth successful") {
          localStorage.setItem("tid", res.data.user.tid);
          history.push("/teacher");
        } else {
          alert("something went wrong");
        }
      });
  }
  return (
    <section className="h-screen bg-gray-800 flex flex-col justify-center items-center  ">
      <div className="text-3xl bg-white p-6 rounded-xl ">
        <div className="mb-">
          {" "}
          <span className="font-bold">Smart</span>{" "}
          <span className="text-yellow-500 font-bold">Classroom</span>{" "}
        </div>
        <div className="text-lg mb-5 ">Login teacher</div>
        <form className="flex flex-col text-lg w-screen max-w-xl">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border-2 rounded-md p-3 my-2"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2 rounded-md p-3 my-2 mb-10"
          />
          <button
            onClick={(e) => login(e)}
            type="submit"
            className="bg-yellow-300 text-white text-lg font-bold px-6 py-6 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
export default TeacherLogin;
