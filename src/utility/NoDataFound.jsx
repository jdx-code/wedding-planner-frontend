import React from "react";

const NoDataFound = () => {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-base text-center font-bold tracking-tight text-gray-900">
        No Data Found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the data you’re looking for.
      </p>
    </div>
  );
};

export default NoDataFound;
