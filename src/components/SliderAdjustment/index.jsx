import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import { imgixAdjustments } from "../../constants/imgixParameters";

const SliderAdjustment = () => {
  // Context
  const {
    imageSelected,
    setAdjustmentSelected,
    adjustmentSelected,
    imageState,
    setImageRedo,
    imageUndo,
    setImageUndo,
  } = useContext(ChallengeContext);

  // Hooks and variables
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadingSlider, setLoadingSlider] = useState(true);
  const { innerWidth: width } = window;

  // Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width < "769" ? 1 : 3,
    slidesToScroll: 1,
    // beforeChange: (current, next) => changeParameterValue(),
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
        setImageRedo([]);
        setImageUndo(imageUndo.concat(newImageUndo));
      }
  };

  // Listeners
  useEffect(() => {
    setAdjustmentSelected(imgixAdjustments[activeSlide]);
    addHistoryChange();
  }, [activeSlide]);

  useEffect(() => {
    setAdjustmentSelected(imgixAdjustments[0]);
    setTimeout(() => {
      setLoadingSlider(false);
    }, 500);
  }, []);

  return (
    <div className="">
      {imageSelected && (
        <Slider {...settings}>
          {imgixAdjustments.map((Adjustment) => (
            <div key={Adjustment.label} className="text-center">
              {imageSelected.url && (
                <img
                  alt="test"
                  className={`object-scale-down mx-auto p-2 h-[9em] ${
                    !loadingSlider &&
                    adjustmentSelected === Adjustment &&
                    "border-dashed border-2 border-indigo-600 rounded"
                  }`}
                  src={`${imageSelected.url}?fit=scale&w=900&h=600&${Adjustment.label}=20`}
                />
              )}

              <span className="font-bold opacity-60 capitalize">
                {Adjustment.display_name}
              </span>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
export default SliderAdjustment;
