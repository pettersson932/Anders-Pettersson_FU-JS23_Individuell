import { useState } from "react";
import Header from "../components/header/Header";
import MainNav from "../components/nav/MainNav";
import Footer from "../components/footer/Footer";
import Logo from "../assets/logo/grey_small.svg";
import "./styles/Page.scss";
import "./styles/PageProfile.scss";

const Profile = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="page pageProfile">
      <Header />
      <MainNav />
      <div className="pageProfile__content">
        <figure className="pageProfile__logo__container">
          <img src={Logo} alt="logo" className="pageProfile__logo" />
        </figure>
        <h1>Välkommen till Airbean-familjen!</h1>

        <form onSubmit={handleSubmit} className="pageProfile__form">
          <label htmlFor="user__name">Name</label>
          <input type="text" id="name" onChange={handleChange} />

          <label htmlFor="user__email">Epost</label>
          <input type="text" id="email" onChange={handleChange} />
          <button type="submit" className="pageProfile__form__button">
            Brew me a cup!
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
