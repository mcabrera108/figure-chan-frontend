/*Styling files */
import homestyle from "../style_modules/home.module.scss";
import searchstyle from "../style_modules/search.module.scss";

// Importing Hooks
import { useState } from "react";

/*Importing Other Components */
import AdvSearchInputSelectMultiple from "../components/form/input/AdvSearchInputSelectMultiple";
import AdvSearchInputSelectOne from "../components/form/input/AdvSearchInputSelectOne";
/*Importing Static Data */
import itemType from "../utils/advsearchdata/itemtype";
import categorytype from "../utils/advsearchdata/categorytype";
import countrytype from "../utils/advsearchdata/countrytype";
import itemstatustype from "../utils/advsearchdata/itemstatustype";
import castoff from "../utils/advsearchdata/castoff";
import categorytypegood from "../utils/advsearchdata/categorytypegood";
import categorytypemedia from "../utils/advsearchdata/categorytypemedia";
import AdvSearchNumberText from "../components/form/input/AdvSearchNumberText";
import AdvSearchSelect from "../components/form/input/AdvSearchSelect";
import AdvSearchDate from "../components/form/input/AdvSearchDate";
import WidgetLayout from "../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../components/ui/Widget/WidgetHeader";
/*Importing 3rd Part Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import WidgetBody from "../components/ui/Widget/WidgetBody";
function AdvanceSearch() {
  const [isActiveComponent, setActiveComponent] = useState(-1);
  const [itemTypeBtnValue, setItemTypeBtnValue] = useState("Any");
  const [categoryTypeBtnValue, setCategoryTypeBtnValue] = useState("Any");
  const [countryTypeBtnValue, setCountryTypeBtnValue] = useState("Any");
  const [itemStatusBtnValue, setItemStatusBtnValue] = useState("Any");
  const [castOffBtnValue, setCastOffBtnValue] = useState("Any");
  const [characterBtnValue, setCharacterBtnValue] = useState("Any");
  const [manufacturerBtnValue, setManufacturerBtnValue] = useState("Any");
  const [artistBtnValue, setArtistBtnValue] = useState("Any");
  const [originBtnValue, setOriginBtnValue] = useState("Any");
  const [materialBtnValue, setMaterialBtnValue] = useState("Any");
  const [releaseDateBtnValue, setReleaseDateBtnValue] = useState(
    new Date().toISOString().slice(0, 10)
  );

  function renderSwitch(val) {
    switch (val) {
      case "Any":
        return [...categorytype, ...categorytypegood, ...categorytypemedia];
      case "Figures":
        return [...categorytype];
      case "Goods":
        return [...categorytypegood];
      case "Media":
        return [...categorytypemedia];
      default:
        return [...categorytype, ...categorytypegood, ...categorytypemedia];
    }
  }

  function handleItemTypeBtnValue(val) {
    // Set Button Value to our selected option then close the dropdown menu
    setItemTypeBtnValue(val);
    // Resets Category Button Value
    setCategoryTypeBtnValue("Any");
    handleActiveComponent(-1);
  }
  function handleCategoryTypeBtnValue(val) {
    setCategoryTypeBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleCountryTypeBtnValue(val) {
    setCountryTypeBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleItemStatusBtnValue(val) {
    setItemStatusBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleCastOffBtnValue(val) {
    setCastOffBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleCharacterBtnValue(val) {
    setCharacterBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleManufacturerBtnValue(val) {
    setManufacturerBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleArtistBtnValue(val) {
    setArtistBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleOriginBtnValue(val) {
    setOriginBtnValue(val);
    handleActiveComponent(-1);
  }
  function handleMaterialsBtnValue(val) {
    setMaterialBtnValue(val);
    handleMaterialsBtnValue(-1);
  }
  function handleReleaseDateBtnValue(val) {
    setReleaseDateBtnValue(val);
    handleMaterialsBtnValue(-1);
  }

  function handleActiveComponent(val) {
    if (isActiveComponent === val) {
      setActiveComponent(-1);
    } else if (isActiveComponent !== val) {
      setActiveComponent(val);
    }
  }
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={searchstyle.searchPageWrapper}>
          <div className={searchstyle.searchInputContainer}>
            <WidgetLayout>
              <WidgetHeader>
                <div className={homestyle.widgetHeaderLeft}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    color="white"
                    className={homestyle.iconWidget}
                  />
                  <span>Advance Search</span>
                </div>
              </WidgetHeader>
              <WidgetBody>
                <form action="">
                  <AdvSearchInputSelectOne
                    inputTagTitle={"Item Type"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={1}
                    isActiveComponent={isActiveComponent}
                    searchOptions={itemType}
                    buttonValue={itemTypeBtnValue}
                    handleButtonValue={handleItemTypeBtnValue}
                  />
                  <AdvSearchInputSelectMultiple
                    inputTagTitle={"Category Type"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={2}
                    isActiveComponent={isActiveComponent}
                    searchOptions={renderSwitch(itemTypeBtnValue)}
                    buttonValue={categoryTypeBtnValue}
                    handleButtonValue={handleCategoryTypeBtnValue}
                  />

                  <AdvSearchInputSelectMultiple
                    inputTagTitle={"Country Type"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={3}
                    isActiveComponent={isActiveComponent}
                    searchOptions={countrytype}
                    buttonValue={countryTypeBtnValue}
                    handleButtonValue={handleCountryTypeBtnValue}
                  />
                  <AdvSearchInputSelectMultiple
                    inputTagTitle={"Item Status"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={4}
                    isActiveComponent={isActiveComponent}
                    searchOptions={itemstatustype}
                    buttonValue={itemStatusBtnValue}
                    handleButtonValue={handleItemStatusBtnValue}
                  />
                  <AdvSearchInputSelectOne
                    inputTagTitle={"Cast-Off"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={5}
                    isActiveComponent={isActiveComponent}
                    searchOptions={castoff}
                    buttonValue={castOffBtnValue}
                    handleButtonValue={handleCastOffBtnValue}
                  />
                  <AdvSearchNumberText inputTagTitle={"Content Level"} />
                  <AdvSearchSelect
                    inputTagTitle={"Character"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={6}
                    buttonValue={characterBtnValue}
                    handleButtonValue={handleCharacterBtnValue}
                    isActiveComponent={isActiveComponent}
                  />
                  <AdvSearchSelect
                    inputTagTitle={"Manufacturer"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={7}
                    buttonValue={manufacturerBtnValue}
                    handleButtonValue={handleManufacturerBtnValue}
                    isActiveComponent={isActiveComponent}
                  />
                  <AdvSearchSelect
                    inputTagTitle={"Artist"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={8}
                    buttonValue={artistBtnValue}
                    handleButtonValue={handleArtistBtnValue}
                    isActiveComponent={isActiveComponent}
                  />
                  <AdvSearchSelect
                    inputTagTitle={"Origin"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={9}
                    buttonValue={originBtnValue}
                    handleButtonValue={handleOriginBtnValue}
                    isActiveComponent={isActiveComponent}
                  />
                  <AdvSearchSelect
                    inputTagTitle={"Materials"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={10}
                    buttonValue={materialBtnValue}
                    handleButtonValue={handleMaterialsBtnValue}
                    isActiveComponent={isActiveComponent}
                  />
                  <AdvSearchDate
                    inputTagTitle={"Release Date"}
                    handleActiveComponent={handleActiveComponent}
                    searchInputValue={11}
                    buttonValue={releaseDateBtnValue}
                    handleButtonValue={handleReleaseDateBtnValue}
                    isActiveComponent={isActiveComponent}
                  />

                  <button type="submit" className={searchstyle.searchFormBtn}>
                    Search
                  </button>
                </form>
              </WidgetBody>
            </WidgetLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdvanceSearch;
