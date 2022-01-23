/* eslint-disable react/jsx-no-target-blank */
import { useContext, useState } from "react";
import {
  PhotographIcon,
  ReplyIcon,
  DownloadIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import ModalConfirm from "../ModalConfirm";

const BarButtons = ({ openModalImages }) => {
  // Hooks
  const {
    imageSelected,
    imageRedo,
    setImageRedo,
    imageUndo,
    setImageUndo,
    imageState,
    setImageState,
    updateImage,
    imagesURLParams,
  } = useContext(ChallengeContext);
  // Modal
  const [isOpen, setIsOpen] = useState(false);

  function closeModalConfirm() {
    setIsOpen(false);
  }

  function openModalConfirm() {
    setIsOpen(true);
  }

  // Functions
  const goBackHistory = () => {
    if (imageUndo.length > 1) {
      if (
        JSON.stringify(imageState[imageState.length - 1]) ===
        JSON.stringify(imageUndo[imageUndo.length - 1])
      ) {
        setImageRedo(imageRedo.concat(imageUndo[imageUndo.length - 1]));
        setImageState(imageState.concat(imageUndo[imageUndo.length - 1]));
        updateImage(imageUndo[imageUndo.length - 1]);
        setImageUndo(
          imageUndo.filter((state, index) => index !== imageUndo.length - 1)
        );
      } else {
        setImageRedo(imageRedo.concat(imageState[imageState.length - 1]));
        setImageState(imageState.concat(imageUndo[imageUndo.length - 1]));
        setImageUndo(
          imageUndo.filter((state, index) => index !== imageUndo.length - 1)
        );
        updateImage(imageUndo[imageUndo.length - 1]);
      }
    } else if (Object.entries(imageState[imageState.length - 1]).length !== 0) {
      if (
        JSON.stringify(imageRedo[imageRedo.length - 1]) !==
        JSON.stringify(imageState[imageState.length - 1])
      ) {
        setImageRedo(imageRedo.concat(imageState[imageState.length - 1]));
        setImageState(imageState.concat({}));
        updateImage();
      } else {
        setImageState(imageState.concat({}));
        updateImage();
      }
    }
  };

  const goNextHistory = () => {
    if (imageRedo.length >= 1) {
      setImageState(imageState.concat(imageRedo[imageRedo.length - 1]));
      updateImage(imageRedo[imageRedo.length - 1]);
      setImageRedo(
        imageRedo.filter((state, index) => index !== imageRedo.length - 1)
      );
      if (Object.entries(imageState[imageState.length - 1]).length !== 0)
        setImageUndo(imageUndo.concat(imageState[imageState.length - 1]));
    }
  };

  return (
    <div className="flex justify-between mb-2 col-10/12">
      <div className="flex basis-8/12">
        <button
          type="button"
          title="Redo"
          disabled={!imageSelected}
          onClick={() => goBackHistory()}
          className="text-center rounded-l-md border border-gray-300 bg-gray-100 px-2  md:px-5 py-1 hover:bg-gray-200 shadow-md"
        >
          <ReplyIcon className="h-8 w-15 text-blue-700 -rotate-[25deg] m-auto" />
        </button>
        <button
          type="button"
          title="Undo"
          onClick={() => goNextHistory()}
          disabled={!imageSelected}
          className="text-center border border-gray-300 bg-gray-100 px-2  md:px-5 py-1 hover:bg-gray-200 shadow-md"
        >
          <ReplyIcon className="h-8 w-15 text-blue-700 -scale-x-100 rotate-[25deg] m-auto" />
        </button>
        <button
          type="button"
          disabled={!imageSelected}
          onClick={() => openModalConfirm()}
          title="Borrar"
          className="text-center border border-gray-300 bg-gray-100 px-2  md:px-5 py-1 hover:bg-gray-200 shadow-md"
        >
          <TrashIcon className="h-8 w-15 text-blue-700 -scale-x-100 rotate-[25deg] m-auto" />
        </button>
        {imageSelected && (
          <a
            href={`${
              imageSelected.url
                ? `${imageSelected.url}?${
                    imagesURLParams !== undefined ? imagesURLParams : ""
                  }`
                : "#"
            }`}
            target="_blank"
            download="test.jpg"
          >
            <button
              type="button"
              title="Rotate"
              disabled={!imageSelected}
              className="rounded-r-md border border-gray-300 bg-gray-100 px-2  md:px-5 py-1 hover:bg-gray-200 shadow-md h-full"
            >
              <DownloadIcon className="h-8 w-15 text-blue-700 m-auto" />
            </button>
          </a>
        )}
      </div>

      <button
        onClick={() => openModalImages()}
        type="button"
        title="Images"
        className="rounded-md"
      >
        <PhotographIcon className="h-12 w-15 text-blue-700 shadow-xl rounded-md animate hover:scale-105" />
      </button>
      <ModalConfirm closeModal={() => closeModalConfirm()} isOpen={isOpen} />
    </div>
  );
};
export default BarButtons;
