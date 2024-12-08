import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import SubHeader from "../components/ui/SubHeader";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
      <Header />
      <SubHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
BaseLayout.propTypes = {
  children: PropTypes.object,
};
export default BaseLayout;
