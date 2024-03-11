import OpenNav from "../assets/icons/nav.png";
import useMenu from "../globals/Menu";

const Header = () => {
  const { setOpen } = useMenu();

  return (
    <header>
      <img onClick={() => setOpen(true)} src={OpenNav} alt="open_nav" />
    </header>
  );
};
export default Header;
