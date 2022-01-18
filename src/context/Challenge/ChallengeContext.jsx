/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useEffect } from "react";
import axios from "../../config/axios";
import { myImagesAPI } from "../../constants/globals";
import {
  imgixAdjustments,
  imgixRotation,
  imgixRotationFlip,
} from "../../constants/imgixParameters";

export const ChallengeContext = createContext();

/* Principal Componente, for managment of context */
const ChallengeProvider = ({ children }) => {
  const [imagesList, setImagesList] = useState([]);
  const [myImages, setMyImages] = useState([]);
  const [imageSelected, setImageSelected] = useState(null);
  const [adjustmentSelected, setAdjustmentSelected] = useState(
    imgixAdjustments[0]
  );
  const [imageState, setImageState] = useState([{}]);
  const [imageRedo, setImageRedo] = useState([]);
  const [imageUndo, setImageUndo] = useState([{}]);
  const [rotationFlip, setRotationFlip] = useState(imgixRotationFlip[0]);
  const [rotationSelected, setRotationSelected] = useState(imgixRotation[0]);
  const [imagesURLParams, setImagesURLParams] = useState();

  // Get image list by default
  const getImages = async () => {
    const res = await axios.get(
      "https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json"
    );
    setImagesList(res);
  };
  // Get images of my imgix storage
  const getMyImages = async () => {
    const res = await axios.get(
      "/api/v1/sources/61d793a00591ee0a3ef1b057/assets",
      {
        baseURL: "https://api.imgix.com",
        headers: {
          Authorization:
            "Bearer ak_c7c9bf4c619f24477f31a09afde20875905203cd6177463c3f995d1096ab7e21",
        },
      }
    );
    const newRes = res.data.map((data) => ({
      name: data.attributes.origin_path.replace("/", ""),
      url: `${myImagesAPI + data.attributes.origin_path}`,
    }));
    setMyImages(newRes);
  };

  // Funtions
  const updateImage = () => {
    setImagesURLParams(
      Object.values(imageState[imageState.length - 1]).join("&")
    );
  };
  const resetImage = () => {
    setImageSelected();
    setImageState([{}]);
    setImageUndo([{}]);
    setImageRedo([]);
    setImagesURLParams();
  };

  useEffect(() => {
    getImages();
    getMyImages();
  }, []);

  return (
    <ChallengeContext.Provider
      value={{
        imagesList,
        myImages,
        imageSelected,
        setImageSelected,
        adjustmentSelected,
        setAdjustmentSelected,
        rotationFlip,
        setRotationFlip,
        rotationSelected,
        setRotationSelected,
        imageState,
        setImageState,
        imagesURLParams,
        setImagesURLParams,
        updateImage,
        resetImage,
        imageRedo,
        imageUndo,
        setImageRedo,
        setImageUndo,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
export default ChallengeProvider;
