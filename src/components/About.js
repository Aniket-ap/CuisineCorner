import React from "react";

const About = () => {
  return (
    <>
      <div className="my-5 flex flex-col justify-center items-center ">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">About Project</h1>
          <p className="font-semibold mb-4">
            Created by: <span className="font-bold">Aniket Pradhan</span>{" "}
          </p>
          <p className="font-semibold mb-4">
            Email:{" "}
            <span className="font-bold">
              <a href="mailto:aniket.itm@gmail.com">aniket.itm@gmail.com</a>
            </span>{" "}
          </p>

          <h3 className=" font-bold mb-4">App description</h3>
          <ul className="text-gray-600 mb-4 list-disc pl-6">
            <li>
              <span className="font-bold">CUISINECORNER</span> is a food
              ordering single page webapp.
            </li>
            <li>
              This webapp was designed with the notion of integrating major
              concepts of ReactJs, such as hooks(built in and custom hooks),
              optimizing app performance using lazy loading etc... .
            </li>
            <li>Used Parcel as bundler</li>
            <li>Used inbuilt hooks like useState, useEffect, useContext.</li>
            <li>
              Created multiple custom hooks like:
              <ul className="text-gray-600 mb-4 list-disc pl-6">
                <li>
                  {" "}
                  <span className="font-bold">useOnline</span> (Checks if user
                  is connected to internet or not)
                </li>
                <li>
                  {" "}
                  <span className="font-bold">useRestaurant</span> (used to get
                  list of restaurants)
                </li>
              </ul>
            </li>
            <li>
              Loading components on demand using different chunks to make app
              performant.
            </li>
            <li>Built own Shimmer component to make UI more good.</li>
            <li>
              Used Packages:
              <ul className="text-gray-600 mb-4 list-disc pl-6">
                <li>
                  <span className="font-bold">Tailwind CSS</span> (used for
                  styling the UI)
                </li>
                <li>
                  <span className="font-bold">react-router-dom</span> (used for
                  routing)
                </li>
                <li>
                  <span className="font-bold">redux-toolkit</span> (used for
                  state management)
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex items-center">
            <span className="font-bold mr-2">Profile Links:</span>
            <a
              href="https://www.linkedin.com/in/aniket-pro/"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 mx-2"
            >
              <i className="fab fa-linkedin fa-lg" />
            </a>
            <a
              href="https://github.com/Aniket-ap"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 mx-2"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
