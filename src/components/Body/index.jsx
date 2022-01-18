import { useState, useContext } from "react";
import { ArchiveIcon } from "@heroicons/react/solid";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import Card from "../Card";
import BarButtons from "../BarButtons";
import Tabs from "../Tabs";
import Aside from "../Aside";
import ModalImages from "../ModalImages";

const Body = () => {
  // Context
  const { imageSelected, imageState, imagesURLParams } =
    useContext(ChallengeContext);
  // Hooks and variables
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  function closeModalImages() {
    setIsOpen(false);
  }

  function openModalImages() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="container p-3 md:p-5 max-w-screen-2xl mx-auto">
        <div className="flex">
          <div className="basis-full md:basis-9/12 md:mr-5">
            <BarButtons openModalImages={() => openModalImages()} />
            <Card className="h-[45vh] md:h-[55vh]">
              {imageSelected ? (
                <img
                  className="object-scale-down h-[40vh] md:h-[50vh] mx-auto"
                  alt={imageSelected.name}
                  src={`${imageSelected.url}?${imagesURLParams}`}
                />
              ) : (
                <div className="h-full">
                  <button
                    onClick={() => openModalImages()}
                    type="button"
                    className="w-full relative top-[35%] mx-auto"
                  >
                    <ArchiveIcon className="h-20 text-blue-700 outline-none animate animate-pulse m-auto" />
                    <span className="opacity-40 font-bold">
                      No image Selected
                    </span>
                  </button>
                </div>
              )}
            </Card>
            <Tabs />
          </div>
          {imageState && (
            <Card className="hidden md:block md:basis-3/12 h-[85vh]">
              <Aside />
            </Card>
          )}
        </div>
      </div>
      {/* Modals */}
      <ModalImages isOpen={isOpen} closeModal={() => closeModalImages()} />
    </>
  );
};
export default Body;
