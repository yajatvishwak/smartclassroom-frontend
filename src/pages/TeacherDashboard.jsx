import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import BaseTemplateTeacher from "../components/BaseTemplateTeacher";

function TeacherDashboard(params) {
  useEffect(() => {
    axios
      .post("http://localhost:5000/getTeacherSubmissionRequest", {
        tid: localStorage.getItem("tid"),
      })
      .then((res) => {
        setsubmissionRequest(() => {
          return res.data.map((item) => item);
        });
      });
    axios
      .post("http://localhost:5000/getTeacherNotification", {
        tid: localStorage.getItem("tid"),
      })
      .then((res) => {
        setnotifications(() => {
          return res.data.map((item) => item);
        });
      });
  }, []);

  const [submissionModal, setsubmissionModal] = useState(false);
  const [submissionRequest, setsubmissionRequest] = useState([]);
  const [notifications, setnotifications] = useState([]);

  const [selectedDesc, setselectedDesc] = useState("");
  const [selectedTitle, setselectedTitle] = useState("");
  const [selectedSubmissionArr, setselectedSubmissionArr] = useState([]);

  function toggleSubmissionModal(submissionID, desc, title) {
    console.log(submissionID);
    if (desc) setselectedDesc(desc);
    if (title) setselectedTitle(title);
    if (submissionID) {
      axios
        .post("http://localhost:5000/getTeacherSubmissionDetails", {
          tid: localStorage.getItem("tid"),
          srid: submissionID,
        })
        .then((res) => {
          setselectedSubmissionArr(() => {
            return res.data.map((item) => {
              return (
                <div>
                  <div className="p-5 hover:bg-yellow-200 transition-all border flex items-center justify-between">
                    <div>
                      {item.studentName} • {item.class}
                    </div>
                    <div>
                       <a href={'http://localhost:5000/getfile?file='+item.filepath} download>
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                       </a>
                      
                    </div>
                  </div>
                </div>
              );
            });
          });
        });
    }
    setsubmissionModal(!submissionModal);
  }
  let notificomp = notifications.map((item) => {
    return (
      <div className="p-3 border w-full ">
        <div className="text-xl ">{item.title}</div>
        <div>
          {item.priority} • {item.class}
        </div>
      </div>
    );
  });
  let srcomp = submissionRequest.map((item) => {
    return (
      <div
        onClick={() => toggleSubmissionModal(item.srid, item.desc, item.title)}
        className="flex mt-6"
      >
        <div className="p-3 hover:bg-yellow-200 transition-all border w-full rounded-md flex items-center justify-between">
          <div>
            <div className="text-xl ">{item.title}</div>
            <div>
              {item.class} • {item.deadline}
            </div>
          </div>

         
          <svg
          
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <BaseTemplateTeacher>
      <Modal isOpen={submissionModal}>
        <div className="grid grid-cols-1 gap-2">
          <div className="col-start-1">
            <div className="text-xl">{selectedTitle}</div>
            <div className="my-4 ">{selectedDesc}</div>
          </div>

          <div className="col-start-1">
            <div className="text-xl mb-5">All submissions </div>
            {selectedSubmissionArr}
          </div>
        </div>
        <div
          onClick={() => {
            toggleSubmissionModal();
          }}
          className="p-3 mt-auto cursor-pointer absolute top-0 right-0 z-10 bg-black text-center text-white"
        >
          close
        </div>
      </Modal>
      <div className="col-span-2 m-16">
        <div className="text-xl flex justify-between">
          <div className="text-2xl">Welcome teacher</div>
        </div>
        <div className="mt-10">
          <div>Your Submission Requests</div>
          {srcomp}
        </div>
      </div>
      <div className="col-span-2 m-16">
        <div className="mt-16">
          <div>Your Notification Requests</div>
          <div className="flex flex-col gap-6 mt-6">{notificomp}</div>
        </div>
      </div>
    </BaseTemplateTeacher>
  );
}

export default TeacherDashboard;
