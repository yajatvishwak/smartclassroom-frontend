import axios from "axios";

function StudentLogin(params) {
  function onClick(e) {
    e.preventDefault();
    console.log("Click ho gaya hai bc");
    axios
      .post("http://localhost:5000/loginStudent", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.message === "auth successful") {
        } else {
          alert("wrong credentials");
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
        <div className="text-lg mb-5 ">Login </div>
        <form className="flex flex-col text-lg w-screen max-w-xl">
          <input
            type="text"
            placeholder="USN"
            className="border-2 rounded-md p-3 my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded-md p-3 my-2 mb-10"
          />
          <button
            type="submit"
            onClick={(e) => onClick(e)}
            className="bg-yellow-300 text-white text-lg font-bold px-6 py-6 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
export default StudentLogin;
