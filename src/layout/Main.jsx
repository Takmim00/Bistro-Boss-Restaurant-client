import { Outlet, useLocation } from "react-router-dom";

import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
