import React, { useState, useEffect, useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import { imgixRotationFlip } from "../../constants/imgixParameters";
import { fit } from "../../constants/globals";

const SliderRotation = () => {
  // Context
  const {
    imageSelected,
    setRotationFlip,
    rotationFlip,
    imageState,
    setImageState,
    updateImage,
    imageUndo,
  } = useContext(ChallengeContext);

  // Hooks and variables
  const [activeSlide, setActiveSlide] = useState();
  const [loadingSlider, setLoadingSlider] = useState(true);
  const { innerWidth: width } = window;
  const sliderRef = useRef();

  // Functions
  const changeParameterRotation = () => {
    const { label, value } = rotationFlip;
    if (imageState.length > 0) {
      imageState.push({
        ...imageState[imageState.length - 1],
        [label]: `${label}=${value}`,
      });
    } else {
      imageState.push({
        [label]: `${label}=${value}`,
      });
    }
    setImageState(imageState);
  };

  // Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width < "769" ? 1 : 3,
    slidesToScroll: 1,
    swipe: false,
    beforeChange: () => changeParameterRotation(),
    afterChange: (next) => setActiveSlide(next),
  };

  // Functions
  const addHistoryChange = () => {
    if (imageState.length > 1)
      if (
        JSON.stringify(imageUndo[imageUndo.length - 1]) !==
        JSON.stringify(imageState[imageState.length - 1])
      ) {
        const stateLength = imageState.length - 1;

        const newImageUndo = Object.fromEntries(
          Object.entries(imageState[stateLength])
        );
        imageUndo.push(newImageUndo);
        updateImage(imageState[imageState.length - 1]);
      }
  };

  // Listeners
  useEffect(() => {
    setRotationFlip(imgixRotationFlip[activeSlide]);

    addHistoryChange();
  }, [activeSlide]);

  useEffect(() => {
    setRotationFlip(imgixRotationFlip[0]);
    setTimeout(() => {
      setLoadingSlider(false);
      sliderRef.current.slickNext();
    }, 500);
  }, []);

  return (
    <div className="rotation">
      {imageSelected && (
        <Slider {...settings} ref={sliderRef}>
          {imgixRotationFlip.map((Rotation, index) => (
            <div key={Rotation.label} className="text-center">
              {imageSelected.url && (
                <img
                  alt="test"
                  className={`object-scale-down mx-auto p-2 h-[9em] ${
                    !loadingSlider &&
                    rotationFlip === Rotation &&
                    "border-dashed border-2 border-indigo-600 rounded"
                  }`}
                  src={`${imageSelected.url}?${fit}&${
                    imgixRotationFlip[index].label
                  }=${imgixRotationFlip[index === 0 ? 3 : index - 1].value}`}
                />
              )}

              <span className="font-bold opacity-60 capitalize">
                {Rotation.display_name}
              </span>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
export default SliderRotation;
