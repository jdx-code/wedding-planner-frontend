import { Tab } from "@headlessui/react";
import getClassnames from "../../utility/getClassnames";

const DynamicSellerTabs = ({ tabsCategories }) => {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(tabsCategories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                getClassnames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : " hover:bg-white/[0.12]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.keys(tabsCategories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={getClassnames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
              )}
            >
              {posts === "about" && <div>{tabsCategories.about}</div>}
              {posts === "feedback" && (
                <div>
                  {tabsCategories.feedback.length > 0 ? (
                    tabsCategories.feedback.map((ele, ind) => (
                      <div
                        key={ind}
                        className="mb-4 p-4 border border-gray-200 rounded"
                      >
                        <div className="font-bold mb-1">{ele.comment}</div>
                        <div className="flex items-center">
                          <span className="text-yellow-500">
                            {"★".repeat(ele.rating)}
                          </span>
                          <span className="text-gray-500 ml-2">
                            {ele.rating}/5
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">No feedback found</div>
                  )}
                </div>
              )}
              {posts === "photos" && (
                <div className="grid grid-cols-3 gap-4">
                  {tabsCategories.photos.length > 0 ? (
                    tabsCategories.photos.map((ele, index) => (
                      <img
                        key={index}
                        src={ele}
                        className="w-full h-full rounded"
                        alt={`Photo ${index + 1}`}
                      />
                    ))
                  ) : (
                    <div className="text-center">No feedback found</div>
                  )}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default DynamicSellerTabs;
