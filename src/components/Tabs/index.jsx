import { useState, useEffect, useContext } from "react";
import SliderAdjustment from "../SliderAdjustment";
import SliderRotation from "../SliderRotation";
import { ChallengeContext } from "../../context/Challenge/ChallengeContext";
import { imgixCategories } from "../../constants/imgixParameters";
import Toast from "../Toast";

const Tabs = () => {
  // Context
  const {
    imageSelected,
    adjustmentSelected,
    rotationSelected,
    imageState,
    setImageState,
    updateImage,
  } = useContext(ChallengeContext);

  // Hooks and variables
  const [categories, setCategories] = useState(imgixCategories);
  const [toast, setToast] = useState({});
  const [parametersSelected, setParametersSlected] = useState();
  const [categorieSelected, setCategorieSelected] = useState(
    imgixCategories[0].label
  );
  const inputRange = document.querySelector("#customRange")
    ? document.querySelector("#customRange")
    : "";

  // Functions
  const changeParameterValue = async () => {
    const Rangevalue = await inputRange.value;
    const { label, name } = await inputRange.dataset;

    if (Rangevalue > 0) {
      if (imageState.length > 0) {
        imageState.push({
          ...imageState[imageState.length - 1],
          [name]: `${label}=${Rangevalue}`,
        });
      } else {
        imageState.push({
          [name]: `${label}=${Rangevalue}`,
        });
      }
    }
    setImageState(await imageState);

    await updateImage();
  };

  const updateParametersSelected = () => {
    if (categorieSelected === "Adjustment") {
      setParametersSlected(adjustmentSelected);
    } else {
      setParametersSlected(rotationSelected);
    }
  };

  const toggleParameters = (actualCategorie) => {
    const newCategories = categories.map((categorie) => {
      if (categorie === actualCategorie) {
        categorie.selected = true;
      } else {
        categorie.selected = false;
      }
      return categorie;
    });
    setCategories(newCategories);
    setCategorieSelected(actualCategorie.label);
    if (inputRange) inputRange.value = inputRange.defaultValue;
  };

  // Listeners
  useEffect(() => {
    updateParametersSelected();
    if (inputRange.value) inputRange.value = inputRange.defaultValue;
  }, [categories, adjustmentSelected]);

  useEffect(() => {
    toggleParameters(imgixCategories[0]);
    setToast({
      message: "Image selected",
      isSuccess: true,
      show: true,
    });
  }, [imageSelected]);

  return (
    <div>
      {imageSelected && (
        <>
          <div className="py-4 sm:px-0 flex flex-col md:flex-row">
            <div className="flex p-1 mb-2 space-x-1 bg-blue-900/20 rounded-xl w-full max-w-md shadow-xl">
              {categories.map((category) => (
                <button
                  type="button"
                  disabled={!imageSelected}
                  key={category.label}
                  onClick={() => toggleParameters(category)}
                  className={`w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none ring-offset-2 ring-offset-blue-600 ring-white ring-opacity-60
                   ${
                     category.selected
                       ? `bg-white shadow ring-2`
                       : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                   }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            {parametersSelected && imageState && (
              <div className="pt-1 md:mx-10 grow">
                <label
                  htmlFor="customRange2"
                  className="form-label font-bold opacity-60 capitalize"
                >
                  {parametersSelected.display_name} Range
                </label>
                <input
                  type="range"
                  className="form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                  min={parametersSelected.expects[0].min}
                  defaultValue={parametersSelected.default}
                  max={parametersSelected.expects[0].max}
                  data-category={parametersSelected.category}
                  data-label={parametersSelected.label}
                  data-name={parametersSelected.display_name}
                  onChange={() => changeParameterValue()}
                  id="customRange"
                />
              </div>
            )}
          </div>
          {categorieSelected === "Adjustment" ? (
            <div className="m-auto w-[45vh] md:w-[50vw] px-4">
              <SliderAdjustment />
            </div>
          ) : (
            <div className="m-auto w-[45vh] md:w-[50vw] px-4">
              <SliderRotation />
            </div>
          )}
          <Toast toast={toast} setToast={setToast} />
        </>
      )}
    </div>
  );
};

export default Tabs;
