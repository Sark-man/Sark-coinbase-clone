import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DisclaimerBanner from "../common/DisclaimerBanner";
import FooterDisclaimer from "../common/FooterDisclaimer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <DisclaimerBanner />

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      <FooterDisclaimer />

    </div>
  );
};

export default MainLayout;