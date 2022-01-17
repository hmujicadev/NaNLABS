import { useState, useContext } from "react";
import { ClipboardIcon } from "@heroicons/react/solid";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import Toast from "../Toast";

const Aside = () => {
  // Context
  const { imageSelected, imageState, imagesURLParams } =
    useContext(ChallengeContext);

  // Hooks anv variables
  const [toast, setToast] = useState();

  // Functions
  const copyPathToClipboard = () => {
    const newClipboard = document.querySelector("#pathURL").textContent;
    navigator.clipboard.writeText(newClipboard);
    setToast({
      message: "URL copied to clipboard",
      isSuccess: true,
      show: true,
    });
  };

  return (
    <div className="overflow-y-auto p-2 select-none">
      <div className="space-y-6">
        <div className="relative">
          <h3 className="font-medium text-gray-900 md:text-center">
            Image URL
          </h3>
          <button
            type="button"
            onClick={() => copyPathToClipboard()}
            title="Copy to clipboard"
            className="absolute left-24 md:right-0 -top-1 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ClipboardIcon className="h-6 " aria-hidden="true" />
          </button>
          <div className=" mt-2 flex items-center justify-between text-ellipsis overflow-hidden">
            <span
              id="pathURL"
              className="text-sm text-gray-500 italic whitespace-wrap flex-grow pr-5 w-56"
            >
              {imageSelected
                ? `${imageSelected.url}?${
                    imagesURLParams !== undefined ? imagesURLParams : ""
                  }`
                : "Select a image for obtain this URL."}
            </span>
          </div>
        </div>
        {imageState && (
          <div>
            <h3 className="font-medium text-gray-900">Modificators</h3>
            <dl className="max-h-[60vh] overflow-y-auto md:max-h-auto mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 scroll-custom">
              {Object.keys(imageState[imageState.length - 1]).map(
                (key, index) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="py-3 flex justify-between text-sm font-medium"
                  >
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="text-gray-900">
                      {imageState[imageState.length - 1][key]}
                    </dd>
                  </div>
                )
              )}
            </dl>
          </div>
        )}
      </div>
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
};
export default Aside;
