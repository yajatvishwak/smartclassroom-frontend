import BaseTemplate from "../components/BaseTemplate";
import greetingTime from "greeting-time";
import Card from "../components/Card";
import date from "date-and-time";

function Home(params) {
  return (
    <BaseTemplate>
      <section className="lg:col-span-3 border">
        <section className=" m-16 mt-14 flex flex-col">
          <div className=" flex justify-between">
            <div className="flex flex-col">
              <span className="text-3xl">
                {greetingTime(new Date())} Vibha,
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
            <Card priority={"high"}></Card>
            <Card priority={"med"}></Card>
            <Card></Card>
            <Card></Card>
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
