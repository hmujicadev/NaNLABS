import { SparklesIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import brand from "../../assets/brand.svg";
import ModalDetails from "../ModalDetails";

const Header = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);

  function closeModalDetails() {
    setIsOpen(false);
  }

  function openModalDetails() {
    setIsOpen(true);
  }
  return (
    <div className="h-14 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <span className="before:block before:content-['Photos'] before:absolute relative inline-block before:-right-[46px] before:top-[27px] before:font-bold before:opacity-60">
          <img className="h-14 p-2" alt="NaNLABS" src={brand} />
        </span>
        <button
          onClick={() => openModalDetails()}
          alt="transform"
          type="button"
          className="p-2 visible md:invisible"
        >
          <SparklesIcon className="h-8 text-blue-700 outline-none md:hidden" />
        </button>
      </div>
      <ModalDetails isOpen={isOpen} closeModal={() => closeModalDetails()} />
    </div>
  );
};

export default Header;
