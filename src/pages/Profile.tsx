import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import MainNav from "../components/nav/MainNav";
import Footer from "../components/footer/Footer";
import Logo from "../assets/logo/grey_small.svg";
import "./styles/Page.scss";
import "./styles/PageProfile.scss";

import useCreateAccount from "../hooks/useCreateAccount";

const Profile = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { createAccount, response, error } = useCreateAccount();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    if (formData.name.length > 4 && formData.email.length > 4) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      console.log(formData);
      createAccount(formData.name, formData.email);
    }
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
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} />

          <label htmlFor="email">Epost</label>
          <input type="text" id="email" onChange={handleChange} />
          <button type="submit" className="pageProfile__form__button">
            Brew me a cup!
          </button>
          <div>
            {response.success ? (
              <p className="accountCreated">Konto skapat</p>
            ) : (
              <p className="accountNotCreated">{response.message}</p>
            )}
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
