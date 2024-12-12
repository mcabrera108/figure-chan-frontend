/*Styling files */
import homestyle from "../style_modules/home.module.scss";
/*React Components*/
import Announcements from "../features/announcements/Announcements";
import SellerAds from "../features/seller_ads/SellerAds";
import TrendingGallery from "../features/trending_gallery/TrendingGallery";
import News from "../features/news/News";
/*Sample Data */
import announceData from "../utils/testdata/announcementData";
import Boards from "../features/boards/Boards";
import RecommendedItems from "../features/recommended_items/RecommendedItems";
import TrendingItems from "../features/trending_items/TrendingItems";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobileDevice = useMediaQuery({
    maxWidth: 768,
  });
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.bannerContainer}>
        <Announcements announceData={announceData} to={announceData.url} />
      </div>
      <div className={homestyle.homeContainer}>
        <div className={homestyle.homeWrapper}>
          {/*When Full App is implemented, add drop lists support for react using an API to save user settings */}
          {isMobileDevice ? (
            <div className={homestyle.mainContentContainer}>
              <TrendingGallery />
              <Boards />
              <RecommendedItems />
              <SellerAds />
              <TrendingItems />
              <News />
            </div>
          ) : (
            <>
              <div className={homestyle.mainContentContainer}>
                <TrendingGallery />
                <Boards />
                <RecommendedItems />
                <SellerAds />
              </div>
              <div className={homestyle.homeSideWidgetContainer}>
                <TrendingItems />
                <News />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
