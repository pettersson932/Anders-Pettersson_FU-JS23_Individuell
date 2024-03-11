import { Link } from "react-router-dom";
import useMenu from "../globals/Menu";
import "./MainNav.scss";
import CloseNavIcon from "../assets/icons/close.png";

const MainNav = () => {
  const { isOpen, setOpen } = useMenu();
  return (
    <div className="nav" style={{ display: isOpen ? "block" : "none" }}>
      <figure className="nav__close">
        <img
          src={CloseNavIcon}
          alt="close_nav"
          onClick={() => setOpen(false)}
        />
      </figure>
      <nav>
        <ul className="nav__ul">
          <li className="nav__li">
            <Link
              onClick={() => setOpen(false)}
              to="/menu"
              className="nav__link"
            >
              Meny
            </Link>
          </li>
          <li className="nav__li">
            <Link
              onClick={() => setOpen(false)}
              to="/about"
              className="nav__link"
            >
              Vårt kaffe
            </Link>
          </li>
          <li className="nav__li">
            <Link
              onClick={() => setOpen(false)}
              to="/profile"
              className="nav__link"
            >
              Min profil
            </Link>
          </li>
          <li className="nav__li">
            <Link
              onClick={() => setOpen(false)}
              to="/status"
              className="nav__link"
            >
              Orderstatus
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
