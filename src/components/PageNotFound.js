import React from "react";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600 mb-2">
          Oops!! Something went wrong
        </h1>
        <p className="text-gray-600 text-lg">
          {err.status + " : " + err.statusText}
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
