import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../utility/useFetch";
import { fetchUrl } from "../../constants/constants";
import DynamicSellerTabs from "./DynamicSellerTabs";
const DynamicSellerComp = () => {
  const [tabsCategories, setTabCategories] = useState([]);
  const navigate = useLocation();
  const url = `${fetchUrl.service_details}/${navigate?.state}`;
  const { data, error, loading } = useFetch(url);

  useEffect(() => {
    if (!data) return;
    const temp = {
      about: data.results.about,
      feedback: data.results.feedback,
      photos: data.results.photos,
    };
    setTabCategories(temp);
  }, [data]);

  return (
    <div className="container mx-auto my-8 bg-gray-100 p-8 rounded-md">
      {data && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={data?.results.photos[0]}
              alt={data?.results.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">{data?.results.name}</h1>
            <p className="text-gray-600 mb-4">{data?.results.about}</p>
            <p className="text-gray-800 mb-4">
              ${data?.results.pricePerHour}/hour
            </p>
            <p className="text-gray-800 mb-4">
              Location: {data?.results.location}
            </p>
            <p className="text-gray-800 mb-4">
              Contact: {data?.results.contact}
            </p>
          </div>
        </div>
      )}
      <DynamicSellerTabs tabsCategories={tabsCategories} />
    </div>
  );
};
export default DynamicSellerComp;
