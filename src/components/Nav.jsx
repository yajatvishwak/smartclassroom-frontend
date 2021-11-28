import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function Nav() {
  let location = useLocation();
  let [navComponents, setnavComponents] = useState([]);

  useEffect(() => {
    const routerconfig = [
      {
        routename: "Dashboard",
        routepath: "/",

        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
      },
      {
        routename: "Submissions",
        routepath: "/submission",

        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            />
          </svg>
        ),
      },
      {
        routename: "Reports",
        routepath: "/reports",

        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        routename: "File Dump",
        routepath: "/filedump",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
    ];
    setnavComponents(() => {
      return routerconfig.map((item) => (
        <a
          key={Math.random()}
          href={item.routepath}
          className={
            item.routepath === location.pathname
              ? " text-yellow-300 flex items-center bg-gray-900 p-3 py-4 m-3 rounded-xl"
              : " hover:text-yellow-300 flex items-center   hover:bg-gray-900 p-3 py-4 m-3 rounded-xl"
          }
        >
          {item.logo}
          {item.routename}
        </a>
      ));
    });
  }, [location.pathname]);
  return (
    <section className="bg-gray-800 text-white flex flex-col">
      <div className="text-3xl text-center m-10 mb-6 font-bold">
        Smart Classroom
      </div>
      <div className="p-2 border  w-1/12 self-center border-b-0 border-r-0 border-l-0 border-t-2 border-yellow-200 "></div>
      <div className="my-5"></div>
      <nav className="flex-col flex">{navComponents}</nav>
    </section>
  );
}
export default Nav;
