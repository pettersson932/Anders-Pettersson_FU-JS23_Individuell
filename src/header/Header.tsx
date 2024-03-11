import OpenNav from "../assets/icons/nav.png";
import useMenu from "../globals/Menu";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { setOpen } = useMenu();
  const navigate = useNavigate();

  return (
    <header>
      <img onClick={() => setOpen(true)} src={OpenNav} alt="open_nav" />
      {props.showCartIcon && (
        <img src={OpenNav} onClick={() => navigate("/cart")} alt="open_nav" />
      )}
    </header>
  );
};
export default Header;
