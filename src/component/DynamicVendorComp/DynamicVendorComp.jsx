import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../connect/Connect";
import useFetch from "../../utility/useFetch";
import { fetchUrl } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../utility/NoDataFound";
const DynamicVendorComp = (props) => {
  const navigate = useNavigate();
  const url = `${fetchUrl.sellers_by_category}/${props.category_id}`;
  const { data, error, loading } = useFetch(url);
  const handleCategoryClick = (callout) => {
    const replacedString = callout.name.toLowerCase().replace(/ /g, "-");
    navigate(replacedString, { state: callout._id });
  };
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-8 lg:max-w-none">
          <h2 className="font-bold text-gray-900 text-xl">Vendors</h2>
          {data?.results.length > 0 ? (
            <div className="mt-1 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {data.results.map((callout) => (
                <div
                  key={callout.name}
                  className="group relative cursor-pointer"
                  onClick={() => handleCategoryClick(callout)}
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.photos[0]}
                      alt={callout.photos[0]}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={callout.href}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        {callout.about}
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-400">
                        &#8377; {callout.pricePerHour}/hour
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicVendorComp);
