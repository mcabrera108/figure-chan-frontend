import PropTypes from "prop-types";
import homestyle from "../../style_modules/home.module.scss";
import { Link } from "react-router-dom";
import ReactTimeago from "react-timeago";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function SalePreview({ adInfo }) {
  const [collapseBtn, setCollapseBtn] = useState(false);
  const [blurStyle, setBlurStyle] = useState(adInfo.isNSFW);

  function handleBlurStyle() {
    setBlurStyle(false);
  }

  const blurEffect = {
    filter: blurStyle ? "blur(5px)" : "",
  };
  function getTagBackgroundColor(tag) {
    const colors = {
      Trade: "orange",
      Sale: "green",
      MIB: "blue",
      "Bundle Sale": "purple",
      Displayed: "yellowgreen",
      Damaged: "red",
      "Missing Parts": "#585858",
      NSFW: "pink",
      "Paypal G&S": "skyblue",
    };
    return colors[tag] || "gray";
  }
  function getTagFontColor(tag) {
    const colors = {
      Trade: "black",
      Sale: "white",
      MIB: "white",
      "Bundle Sale": "white",
      Displayed: "black",
      Damaged: "white",
      "Missing Parts": "white",
      NSFW: "black",
      "Paypal G&S": "black",
    };
    return colors[tag] || "white";
  }
  return (
    <div className={homestyle.classifiedContainer}>
      <div className={homestyle.classifiedWrapper}>
        <div className={homestyle.adImgContainer}>
          <div className={homestyle.classifiedImg} style={blurEffect}>
            <img
              src={adInfo.adImgURL.img}
              alt={adInfo.adImgURL.imgAlt}
              width={86}
              height={128}
              onClick={handleBlurStyle}
            />
          </div>
        </div>
        <div className={homestyle.adDescContainer}>
          <h2 className={homestyle.adTitle}>{adInfo.adTitle}</h2>
          <div className={homestyle.adTagsContainer}>
            {adInfo.adTags.map((ad) => {
              return (
                <Link
                  key={ad.id}
                  className={homestyle.adTag}
                  style={{
                    backgroundColor: getTagBackgroundColor(ad.tagName),
                    color: getTagFontColor(ad.tagName),
                  }}
                >
                  {ad.tagName}
                </Link>
              );
            })}
          </div>
          <div className={homestyle.priceContainer}>
            <span className={homestyle.adPrice}>
              {adInfo.currencyType}
              {adInfo.adPrice}{" "}
            </span>
            {adInfo.freeShipping ? (
              <span className={homestyle.adShipping}>Free Shipping</span>
            ) : (
              <></>
            )}
          </div>
          <div className={homestyle.sellerContainer}>
            <span className={homestyle.username}>{adInfo.sellerUsername}</span>
            <span className={homestyle.rating}>({adInfo.sellerReviews})</span>
            <span className={homestyle.postDate}>
              <ReactTimeago date={adInfo.listingDate} live={false} />
            </span>
            <span className={homestyle.watching}>
              {adInfo.watching} watching
            </span>
          </div>
        </div>
        <div
          className={homestyle.collapseBtn}
          onClick={() => {
            setCollapseBtn(!collapseBtn);
          }}
        >
          {collapseBtn ? (
            <FontAwesomeIcon icon={faChevronDown} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size="2xl" />
          )}
        </div>
      </div>
      {collapseBtn ? (
        <div className={homestyle.previewTextContainer}>
          <span className={homestyle.previewTest}>{adInfo.previewText}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
SalePreview.propTypes = {
  adInfo: PropTypes.object,
};
export default SalePreview;
