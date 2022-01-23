/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import { defaulTabs, fit } from "../../constants/globals";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Galery = ({ selectImageToEdit, closeModal }) => {
  // Context
  const { imagesList, myImages, imageSelected, resetImage } =
    useContext(ChallengeContext);

  // Hooks and variables
  const [tabs, setTabs] = useState(defaulTabs);
  const [activeImagesList, setActiveImagesList] = useState(imagesList);

  // Functions
  const toggleTab = (tabSelected) => {
    const newTabs = tabs.map((tab) => {
      tabSelected === tab ? (tab.current = true) : (tab.current = false);
      return tab;
    });
    setTabs(newTabs);
    tabSelected.name === "Imgix List"
      ? setActiveImagesList(imagesList)
      : setActiveImagesList(myImages);
  };

  // Listeners
  useEffect(() => {
    toggleTab(tabs[0]);
  }, []);

  return (
    <div className="flex-1 flex items-stretch overflow-hidden">
      <main className="flex-1 p-2">
        <div className="block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            className="bg-gray-100 rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
            onClick={() => closeModal()}
          >
            <span className="sr-only">Close</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Photos</h1>

        {/* Tabs */}
        <div className="mt-3 sm:mt-2">
          <div className="sm:hidden">
            <label className="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              onChange={(e) => toggleTab(JSON.parse(e.target.value))}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="Imgix List"
            >
              {tabs?.map((tab) => (
                <option key={tab.name} value={JSON.stringify(tab)}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center border-b border-gray-200">
              <nav
                className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                aria-label="Tabs"
              >
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => toggleTab(tab)}
                    aria-current={tab.current ? "page" : undefined}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <section
          className="mt-8 pb-16 max-h-[60vh] overflow-y-auto"
          aria-labelledby="gallery-heading"
        >
          <h2 id="gallery-heading" className="sr-only">
            Recently viewed
          </h2>
          <ul className="p-1 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {activeImagesList.map((file) => (
              <li
                onClick={() => {
                  resetImage();
                  selectImageToEdit(file);
                }}
                aria-hidden="true"
                key={file.name}
                className="relative"
              >
                <div
                  className={classNames(
                    file.name === imageSelected
                      ? "ring-2 ring-offset-2 ring-indigo-500"
                      : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                    "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                  )}
                >
                  <img
                    src={file.url + fit}
                    alt=""
                    className={classNames(
                      file.current ? "" : "group-hover:opacity-75",
                      "object-cover pointer-events-none"
                    )}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.name}
                    </span>
                  </button>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {file.name}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  {file.size}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
export default Galery;
