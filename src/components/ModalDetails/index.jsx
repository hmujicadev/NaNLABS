import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import Aside from "../Aside";

const ModalDetails = ({ closeModal, isOpen }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 bg-black bg-opacity-60 "
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
            <div className="block absolute top-0 right-5 pt-4 pr-4">
              <button
                type="button"
                className="bg-gray-100 rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Aside />
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default ModalDetails;
