import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import SubHeader from "../components/ui/Header/SubHeader";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/ui/Body/GoToTop";

function BaseLayout() {
  return (
    <>
      <Header />
      <SubHeader />
      <main>
        <Outlet />
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
