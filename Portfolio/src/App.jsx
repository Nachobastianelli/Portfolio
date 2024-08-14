import { useEffect, useState } from "react";
import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LinkedButtons from "./components/linkedButtons/LinkedButtons";
import { socialMedia } from "./mocks/socialMedia";
import Profile from "./components/profile/Profile";
import CardProyectItem from "./components/cardProyectItem/CardProyectItem";
import CardProyects from "./components/cardProyects/CardProyects";
import CvButton from "./components/cvButton/CvButton";
import ContactMe from "./components/contactMe/ContactMe";
import CardProfile from "./components/cardProfile/CardProfile";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Suspense fallback="Loading translations...">
      <div
        className="min-h-screen text-white "
        style={{
          background:
            "radial-gradient(at center top, rgb(55, 65, 81), #223, #050510)",
        }}
      >
        <div className="max-w-[70vw] m-auto w-full ">
          <div className="flex justify-center items-center mb-24">
            <Header />
          </div>
          <section id="home">
            <Profile buttons={socialMedia} />
          </section>
          <CvButton />
          <section id="about-me">
            <AboutMe />
          </section>
          <section id="proyects">
            <CardProyects />
          </section>
          <section id="contact" className="mb-24">
            <CardProfile isVisible={openModal} />
          </section>
          <div className="flex justify-center items-start mt-6 ">
            <Footer buttons={socialMedia} />
          </div>
        </div>
        {showModal && <ContactMe isVisible={openModal} onClose={closeModal} />}
      </div>
    </Suspense>
  );
};
export default App;
