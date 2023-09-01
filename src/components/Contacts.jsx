import React from "react";
import { useTranslation } from "react-i18next";
import { VscGithub } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import ButtonDownloadCV from "./ButtonDownloadCV";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className="contacts">
      <p className="title">{t("Link with me")}</p>
      <ButtonDownloadCV />
      <div className="contacts__links">
        <span>
          <BsTelegram />
          <a
            href="https://t.me/Valeriia_Kuli"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Valeriia_Kuli
          </a>
        </span>
        <span>
          <BiLogoGmail />
          <a href="mailto:airelav.vk@gmail.com">airelav.vk@gmail.com</a>
        </span>
        <span>
          <VscGithub />
          <a
            href="https://github.com/ValeriaKul"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ValeriaKul
          </a>
        </span>
        <span>
          <BsLinkedin />
          <a
            href="https://www.linkedin.com/in/valeriiakulikova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valeriia Kulikova
          </a>
        </span>
      </div>
    </section>
  );
}
