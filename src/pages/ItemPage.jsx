import Error from "./Error";
import Loading from "../components/ui/Body/Loading";
import PropTypes from "prop-types";
import homestyle from "../style_modules/home.module.scss";
import itemstyle from "../style_modules/entrypage.module.scss";
import { useMediaQuery } from "react-responsive";
import boardData from "../utils/testdata/boardData";
import NotesWidget from "../features/entry/entry_notes/NotesWidget";
import EntryGallery from "../features/entry/entry_gallery/EntryGallery";
import EntryImgBanner from "../features/entry/entry_gallery/EntryImgBanner";
import EntryDetails from "../features/entry/entry_character/EntryDetails";
function ItemPage({ id }) {
  // const { item, error, loading } = useItem(id);
  const isMobileDevice = useMediaQuery({
    maxWidth: 768,
  });
  // if (error) return <Error />;

  // if (loading) return <Loading />;

  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={itemstyle.entryPageWrapper}>
          {isMobileDevice ? (
            <></>
          ) : (
            <>
              <div className={itemstyle.entryHeaderContainer}>
                <div className={itemstyle.entryHeaderWrapper}>
                  <div className={itemstyle.entryHeaderLeft}>
                    <div>
                      <span className={itemstyle.entryTitle}>
                        {boardData[1].boardTitle}
                      </span>
                    </div>
                    <div>
                      <span className={itemstyle.entryCompany}>
                        (Insert Company Name Here)
                      </span>
                    </div>
                  </div>
                  <div className={itemstyle.entryHeaderRight}>
                    <button className={itemstyle.addBtn}>
                      Add To Collection
                    </button>
                    <button className={itemstyle.buyBtn}>Buy</button>
                    <button className={itemstyle.addListBtn}>
                      Add To List
                    </button>
                    <button className={itemstyle.editBtn}>Edit Entry</button>
                  </div>
                </div>
              </div>

              <div className={itemstyle.entryMainContentContainer}>
                <div className={homestyle.mainContentContainer}>
                  <div className={itemstyle.mainItemWrapper}>
                    <EntryImgBanner />
                    <EntryDetails />
                  </div>
                </div>
                <div className={homestyle.homeSideWidgetContainer}>
                  <NotesWidget />
                  <EntryGallery />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
ItemPage.propTypes = {
  id: PropTypes.object,
};
export default ItemPage;
