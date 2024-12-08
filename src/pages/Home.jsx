/*Styling files */
import homestyle from "../style_modules/home.module.scss";
/*React Components*/
import SideNav from "../components/ui/SideNav";
import Announcements from "../features/announcements/Announcements";
import SellerAds from "../features/seller_ads/SellerAds";
import TrendingGallery from "../features/trending_gallery/TrendingGallery";
/*Sample Data */
import announceData from "../utils/testdata/announcementData";
import Boards from "../features/boards/Boards";
import RecommendedItems from "../features/recommended_items/RecommendedItems";
function Home() {
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.bannerContainer}>
        <Announcements announceData={announceData} to={announceData.url} />
      </div>
      <div className={homestyle.homeContainer}>
        <div className={homestyle.homeWrapper}>
          <div className={homestyle.mainContentContainer}>
            <TrendingGallery />
            <Boards />
            <RecommendedItems />
            <SellerAds />
          </div>
          <div className={homestyle.homeSideNavContainer}>
            <SideNav />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
