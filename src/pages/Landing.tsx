import MainNav from "../nav/MainNav";
import Header from "../header/Header";
import "./styles/PageStyles.scss";
import useMenuStore from "../globals/Menu";
import BackgroundImageLeft from "../assets/backgrounds/header4444.png";
import BackgroundImageRight from "../assets/backgrounds/page_landing_right.svg";
import Background from "../assets/backgrounds/page__landing.png";
import "./styles/PageLanding.scss";
import Logo from "../assets/logo/airbean__small__white.png";
import BackgroundLeft from "../assets/backgrounds/header.svg";

const Landing = () => {
  const { openMenu } = useMenuStore();
  return (
    <div className="pageLanding">
      <MainNav />
      <div className="pageLanding__text">
        <figure onClick={openMenu} className="pageLanding__logo">
          <img src={Logo} alt="airbean__logo" />
        </figure>
        <h1>AIR BEAN</h1>
        <p>DRONEDELIVERED COFEE</p>
      </div>
    </div>
  );
};
export default Landing;
