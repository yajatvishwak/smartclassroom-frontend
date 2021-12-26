import { useState } from "react";
import Modal from "react-modal";
import BaseTemplateTeacher from "../components/BaseTemplateTeacher";

function TeacherDashboard(params) {
  const [submissionModal, setsubmissionModal] = useState(false);
  const [selectedSubmission, setselectedSubmission] = useState("");
  function toggleSubmissionModal(submissionID) {
    console.log(submissionID);
    if (submissionID) setselectedSubmission(submissionID);
    setsubmissionModal(!submissionModal);
  }

  return (
    <BaseTemplateTeacher>
      <Modal isOpen={submissionModal}>
        <div className="grid grid-cols-1 gap-2">
          <div className="col-start-1">
            <div className="text-xl">
              Title of the Project = {selectedSubmission}
            </div>
            <div className="my-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              pariatur iusto expedita quasi voluptates est! Vero nesciunt,
              architecto esse voluptate ratione libero autem odio quasi culpa
              ullam optio nam! Sequi!
            </div>
          </div>

          <div className="col-start-1">
            <div className="text-xl mb-5">All submissions </div>
            <div>
              <div className="p-5 hover:bg-yellow-200 transition-all border flex items-center justify-between">
                <div>this is person • friday</div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row-start-1 col-start-2">
            <div className="text-xl">Submission Details</div>
            <div className="my-5">
              This document is submitted by{" "}
              <span className="font-bold">Yajat</span> on{" "}
              <span className="font-bold">Friday</span>{" "}
            </div>
            <div className="my-5">
              <div className="border p-3 rounded-md text-center hover:bg-yellow-200 transition-all">
                Download Submission
              </div>
            </div>
          </div> */}
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
          <div
            onClick={() => toggleSubmissionModal("submission id")}
            className="flex mt-6"
          >
            <div className="p-3 hover:bg-yellow-200 transition-all border w-full rounded-md flex items-center justify-between">
              <div>
                <div className="text-xl ">
                  This is the title of the submission
                </div>
                <div>5D • 10/2/22</div>
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
        </div>
      </div>
      <div className="col-span-2 m-16">
        <div className="mt-16">
          <div>Your Notification Requests</div>
          <div className="flex mt-6">
            <div className="p-3 border w-full ">
              <div className="text-xl ">this is the title of the request</div>

              <div>Low • 5D • 10/2/22</div>
            </div>
          </div>
        </div>
      </div>
    </BaseTemplateTeacher>
  );
}

export default TeacherDashboard;
