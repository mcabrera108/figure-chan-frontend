import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import SubHeader from "../components/ui/SubHeader";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/ui/GoToTop";

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
