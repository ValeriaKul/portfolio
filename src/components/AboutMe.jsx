import React from "react";
import { useTranslation } from "react-i18next";
import ButtonDownloadCV from "./ButtonDownloadCV";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="aboutMe" className="about">
      <img className="about_photo__active" src={process.env.PUBLIC_URL + "/images/photo.jpg"} alt="My_photo" />
      <div className="about_text">
      <img className="about_photo__nonactive" src={process.env.PUBLIC_URL + "/images/photo.jpg"} alt="My_photo" />
        <p className="animated">{t("Hello!")}</p>
        <p className="animated">
          {t(
            "I'm Valeriia and I'm an experienced front-end developer with over 1.5 years of practice. 👍 My technology suite includes React, JavaScript, TypeScript, HTML and CSS."
          )}{" "}
        </p>
        <p className="animated">
          {t(
            "My experience covers both front-end and back-end (Java). One of my strengths is the ability to combine knowledge and skills from different fields to solve complex problems. My portfolio is diverse: it includes projects in React, JavaScript, TypeScript, HTML and CSS. In addition, experience in back-end development (Java, MySQL) allows me to take a full look at the entire technology stack and the interaction between them.🔥"
          )}
        </p>
        <ButtonDownloadCV />
      </div>
    </section>
  );
}
