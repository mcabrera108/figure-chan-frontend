import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import SubHeader from "../components/ui/Header/SubHeader";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/ui/Body/GoToTop";
import { useMediaQuery } from "react-responsive";
function BaseLayout() {
  const isMobileDevice = useMediaQuery({
    maxWidth: 1024,
  });
  return (
    <>
      <Header isMobileDevice={isMobileDevice} />
      <SubHeader />
      <main>
        <Outlet isMobileDevice={isMobileDevice} />
      </main>
      <Footer />
      <GoToTop />
    </>
  );
}
BaseLayout.propTypes = {
  children: PropTypes.object,
};
export default BaseLayout;
