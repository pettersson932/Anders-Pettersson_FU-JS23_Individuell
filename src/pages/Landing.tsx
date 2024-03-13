import MainNav from "../components/nav/MainNav";
import "./styles/PageStyles.scss";
import useMenuStore from "../globals/Menu";
import "./styles/PageLanding.scss";
import Logo from "../assets/logo/airbean__small__white.png";

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
