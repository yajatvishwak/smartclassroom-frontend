import axios from "axios";
import { useEffect, useState } from "react";
import BaseTemplate from "../components/BaseTemplate";

function Submission(params) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [selectedFile, setselectedFile] = useState(null);
  useEffect(() => {
    axios
      .post("http://localhost:5000/getSubmissionRequest", {
        class: localStorage.getItem("classid"),
      })
      .then((res) => {
        setSubmissions(() => {
          console.log(res.data);
          return res.data.map((item) => item);
        });

        setLoading(() => false);
      });

    // const networkcall = [
    //   {
    //     submissionID: "123",
    //     title: "This is tit111le",
    //     description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
    //           ratione dignissimos nostrum earum! Aliquid maxime accusamus
    //           placeat, nam facere quasi praesentium at neque quibusdam,
    //           recusandae perferendis totam eos voluptates ut.`,
    //     assignedTeacher: "This is assigned teacher",
    //     teacherPicture: "https://via.placeholder.com/50",
    //   },
    //   {
    //     submissionID: "1223",
    //     title: "This is tit111le 22222",
    //     description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
    //           ratione dign222222 ioafgklsdnfgaksdf asgdfasdfg hahahah gay earum! Aliquid maxime accusamus
    //           placeat, nam facere quasi praesentium at neque quibusdam,
    //           recusandae perferendis totam eos voluptates ut.`,
    //     assignedTeacher: "This is assigned teacher",
    //     teacherPicture: "https://via.placeholder.com/50",
    //   },
    // ];
    // setSubmissions(() => {
    //   return networkcall;
    // });
  }, []);

  const components = submissions.map((item, index) => {
    if (index === selected)
      return (
        <SubmissionCard
          selected={true}
          index={index}
          title={item.title}
          changeSelection={() => setSelected(index)}
        />
      );
    else
      return (
        <SubmissionCard
          selected={false}
          index={index}
          title={item.title}
          changeSelection={() => setSelected(index)}
        />
      );
  });
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <BaseTemplate>
        <section className="col-span-2">
          <div className="m-16">
            <div className=" text-3xl">Submissions</div>
            <div className="flex flex-col mt-4"> {components}</div>
          </div>
        </section>
        <section className="col-span-2 border-l-2">
          <div className="m-16">
            <span className="text-xl">Submission Details</span>
            <div className="mt-10 text-2xl font-semibold">
              {submissions[selected].title}
            </div>
            <div className="mt-10">{submissions[selected].description}</div>
            <div className="flex items-center mt-10 border rounded-xl p-5">
              <img
                src={submissions[selected].teacherPicture}
                className="rounded-full"
                alt=""
              />
              <span className="mx-3">
                {submissions[selected].assignedTeacher}
              </span>
            </div>
            <div className="mt-10">Turn in your work</div>
            <div className="flex items-center mt-4 border rounded-xl p-5">
              <form className="flex flex-col w-full">
                <input
                  type="file"
                  onChange={(e) => setselectedFile(e.target.files[0])}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("file", selectedFile, selectedFile.name);
                    console.log(submissions[selected]);

                    formData.append("sid", localStorage.getItem("sid"));
                    formData.append("srid", submissions[selected].submissionID);
                    console.log(submissions[selected])
                    formData.append("type", submissions[selected].type);
                    axios
                      .post("http://localhost:5000/turnin", formData)
                      .then(() => {
                        alert("done");
                      });
                  }}
                  type="submit"
                  className="p-3 bg-yellow-200 rounded-xl hover:bg-yellow-400 w-full mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </BaseTemplate>
    );
  }
}

function SubmissionCard({ selected, changeSelection, title }) {
  if (!selected) {
    return (
      <div
        onClick={changeSelection}
        className="p-5 my-2 border hover:bg-yellow-100 hover:border-yellow-200 rounded-xl"
      >
        {title}
      </div>
    );
  } else {
    return (
      <div
        onClick={changeSelection}
        className="p-5 my-2 border bg-yellow-100 border-yellow-200 rounded-xl"
      >
        {title}
      </div>
    );
  }
}

export default Submission;
