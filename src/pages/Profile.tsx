import Header from "../header/Header";
import MainNav from "../nav/MainNav";
import Footer from "../footer/Footer";
import "./styles/PageProfile.scss";

const Profile = () => {
  return (
    <div className="pageProfile">
      <Header />
      <MainNav />
      <h1>Profile</h1>
      <Footer />
    </div>
  );
};
export default Profile;
