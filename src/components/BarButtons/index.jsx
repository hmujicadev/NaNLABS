/* eslint-disable react/jsx-no-target-blank */
import { useContext, useState, useEffect } from "react";
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
    imageUndo,
    setImageRedo,
    setImageUndo,
    imageState,
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

  const goBackHistory = () => {
    if (imageUndo.length > 1) {
      if (
        imageState[imageState.length - 1] !== imageUndo[imageUndo.length - 1]
      ) {
        imageRedo.push(imageState[imageState.length - 1]);
        imageState.push(imageUndo[imageUndo.length - 1]);
        updateImage();
        console.log("dentro back1");
      } else {
        imageRedo.push(imageUndo[imageUndo.length - 1]);
        imageState.push(imageUndo[imageUndo.length - 2]);
        imageUndo.splice(imageUndo.length - 1, 1);
        updateImage();
        console.log("dentro back2");
      }
      // imageRedo.push(imageState[imageState.length - 1]);
      // if (Object.entries(imageState[imageState.length - 1]).length !== 0) {
      //   imageState.push(imageUndo[imageUndo.length - 1]);
      // }
    } else if (
      imageState[imageState.length - 1] !== imageUndo[imageUndo.length - 1]
    ) {
      if (Object.entries(imageState[imageState.length - 1]).length !== 0) {
        imageRedo.push(imageState[imageState.length - 1]);
        imageState.push(imageUndo[imageUndo.length - 1]);
        updateImage();
      }
    }

    // } else if (Object.entries(imageState[imageState.length - 1]).length !== 0) {
    //
    //   updateImage();
    //   console.log("dentro back2");
    // } else if (imageState[imageState.length - 2]) {
    //   if (
    //     imageState[imageState.length - 2] !== imageRedo[imageRedo.length - 1]
    //   ) {
    //     imageRedo.push(imageState[imageState.length - 2]);
    //   }
    //   console.log("dentro back 3");
    //   updateImage();
    // }

    console.log("imageState", imageState);
    console.log("imageUndo", imageUndo);
    console.log("imageRedo", imageRedo);
    console.log("fuera back");
  };

  // useEffect(() => {
  //   setHistoryPosition(imageRedoUndo.length - 1);
  // }, [imagesURLParams]);

  const goNextHistory = () => {
    if (imageRedo.length >= 1) {
      console.log("dentro next");
      imageUndo.push(imageRedo[imageRedo.length - 1]);
      imageState.push(imageRedo[imageRedo.length - 1]);
      imageRedo.splice(imageRedo.length - 1, 1);
      updateImage();
    }
    console.log("imageState2", imageState);
    console.log("imageUndo2", imageUndo);
    console.log("imageRedo2", imageRedo);
    console.log("fuera next");
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
