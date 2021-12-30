import BaseTemplate from "../components/BaseTemplate";
import greetingTime from "greeting-time";
import Card from "../components/Card";
import date from "date-and-time";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(params) {
  useEffect(() => {
    axios
      .post("http://localhost:5000/getNotification", {
        class: localStorage.getItem("classid"),
      })
      .then((res) => {
        setnotifications(() => {
          return res.data.map((item) => item);
        });
      });
  }, []);
  const [notifications, setnotifications] = useState([]);
  const notifiComp = notifications.map((item) => {
    return (
      <Card
        priority={item.priority}
        title={item.title}
        teacher={item.teacher}
      ></Card>
    );
  });
  return (
    <BaseTemplate>
      <section className="lg:col-span-3 border">
        <section className=" m-16 mt-14 flex flex-col">
          <div className=" flex justify-between">
            <div className="flex flex-col">
              <span className="text-3xl">
                {greetingTime(new Date())} {localStorage.getItem("name")},
              </span>
              <span className="">Get to speed with your day</span>
            </div>
            <span className="opacity-70">
              {date.format(new Date(Date.now()), "ddd, DD MMMM, YYYY")}
            </span>
          </div>
          <div className="mt-14"></div>
          <div className="font-medium">Annoucements</div>
          <div className="mt-7"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {notifiComp}
          </div>
        </section>
      </section>
      <section className="grid grid-rows-2 m-16 lg:m-0">
        <div className="lg:border lg:border-l-0">
          <div className="m-14 mx-5">
            Calendar of Events
            <img
              src="https://via.placeholder.com/200"
              className=" w-full mt-3 rounded-xl"
              alt=""
            />
          </div>
        </div>
        <div className="lg:border  lg:border-t-0 lg:border-l-0">
          <div className="m-14 mt-5 mx-5">
            Calendar of Events
            <img
              src="https://via.placeholder.com/200"
              className=" w-full mt-3 rounded-xl"
              alt=""
            />
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
}
export default Home;
