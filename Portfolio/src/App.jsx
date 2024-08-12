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

const App = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(at center top, rgb(55, 65, 81), rgb(07, 10, 17), #111)",
      }}
    >
      <div className="max-w-[60vw] m-auto w-full ">
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
        <section id="contact">
          <CardProfile />
        </section>

        <div className="flex justify-center items-start mt-6 ">
          <Footer buttons={socialMedia} />
        </div>
      </div>
    </div>
  );
};
export default App;
