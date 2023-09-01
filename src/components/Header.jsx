import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../components/hooks/use-localstorage";
import i18n from "../i18n";
import Menu from "./Menu";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useLocalStorage("language", "en");
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const relocateToGit = () => {
    window.open("https://github.com/ValeriaKul", "_blank");
  };

  const relocateToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/valeriiakulikova/", "_blank");
  };

  return (
    <header>
      <img
        className="black_logo"
        src={process.env.PUBLIC_URL + "/images/BlackLogo.png"}
        alt="logo"
      />
      <img
        className="white_logo"
        src={process.env.PUBLIC_URL + "/images/1.png"}
        alt="logo"
      />
      <nav>
        <Menu />
      </nav>

      <div className="icons">
        <VscGithub onClick={relocateToGit} />
        <BsLinkedin onClick={relocateToLinkedIn} />
      </div>
      <select name="language" onChange={handleLanguageChange} value={language}>
        <option value="ru">{t("RUS")}</option>
        <option value="en">{t("ENG")}</option>
        <option value="ukr">{t("UKR")}</option>
      </select>
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        {menuOpen && (
          <div className="dropdown-menu">
            <Menu closeMenu={() => setMenuOpen(false)} />
          </div>
        )}
      </button>
    </header>
  );
}
