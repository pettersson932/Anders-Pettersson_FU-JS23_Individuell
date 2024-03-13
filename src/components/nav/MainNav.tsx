import { Link } from "react-router-dom";
import useMenuStore from "../../globals/Menu";
import "./MainNav.scss";
import CloseNavIcon from "../../assets/icons/close.png";

const MainNav = () => {
  const { isMenuOpen, closeMenu } = useMenuStore();
  return (
    <div className="nav" style={{ display: isMenuOpen ? "block" : "none" }}>
      <figure className="nav__close">
        <img src={CloseNavIcon} alt="close_nav" onClick={closeMenu} />
      </figure>
      <nav>
        <ul className="nav__ul">
          <li className="nav__li">
            <Link onClick={closeMenu} to="/menu" className="nav__link">
              Meny
            </Link>
          </li>
          <li className="nav__li">
            <Link onClick={closeMenu} to="/about" className="nav__link">
              Vårt kaffe
            </Link>
          </li>
          <li className="nav__li">
            <Link onClick={closeMenu} to="/profile" className="nav__link">
              Min profil
            </Link>
          </li>
          <li className="nav__li">
            <Link onClick={closeMenu} to="/status" className="nav__link">
              Orderstatus
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
