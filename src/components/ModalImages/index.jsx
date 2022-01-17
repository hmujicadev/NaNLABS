import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import Galery from "../Galery";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";

const ModalImages = ({ closeModal, isOpen }) => {
  // Context
  const { setImageSelected } = useContext(ChallengeContext);

  // Functions
  const selectImageToEdit = (image) => {
    setImageSelected(image);
    closeModal();
  };

  // Render
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 bg-black bg-opacity-60"
        onClose={() => closeModal()}
      >
        <div className=" px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-full md:max-w-screen-2xl p-6 my-8 text-left align-middle transition-all transform bg-gray-100 shadow-xl rounded-2xl max-h-[90vh] overflow-hidden">
              <Galery
                selectImageToEdit={selectImageToEdit}
                closeModal={closeModal}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ModalImages;
