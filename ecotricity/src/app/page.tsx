import BannerPage from "../component/main/banner/banner";
import ProductCarousal from "../component/main/carousal/carousal";
import EcotricityPlans from "../component/main/ecotricity-plans/ecotricity-plans";
import EmissionSavingPage from "../component/main/emission-saving/emission-saving";
import Navbar from "../component/nav/nav";
import style from "./style.module.css";

const HomePage = () => {
  return (
    <div>
      <header
        style={{ position: "fixed", top: 0, background: "white", zIndex: 1000 }}
        className={`${style.flexCol} ${style.fullWidth}`}
      >
        <Navbar />
      </header>
      <header className={`${style.flexCol} ${style.fullWidth}`}>
        <Navbar />
      </header>
      <main>
        <BannerPage />
        <ProductCarousal />
        <EmissionSavingPage />
        <EcotricityPlans />
      </main>
    </div>
  );
};

export default HomePage;
