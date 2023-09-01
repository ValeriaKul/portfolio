import React from "react";
import TechnologiesItem from "./TechnologiesItem";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const { t } = useTranslation();
  const technologies = [
    {
      id: 1,
      title: "JavaScript, React, Ajax, Fetch, HTML, CSS",
      status: "Advanced",
      total: 80,
    },
    {
      id: 2,
      title: "UI design in Figma, JAVA, MySQL, Gira",
      status: "Regular",
      total: 60,
    },
    {
      id: 3,
      title: "TypeScript, Angular, React Native",
      status: "Beginner",
      total: 20,
    },
  ];

  return (
    <section id="technologies" className="technologies">
      <p className="title">{t("Technologies")}</p>
      {technologies.map((elem) => (
        <TechnologiesItem key={elem.id} {...elem} />
      ))}
      <p>{t("Additional technologies and skills")}</p>
      <ul>
        <li>Git</li>
        <li>{t("Teamwork")}</li>
        <li>{t("Quick learning")}</li>
        <li>{t("Sociability")}</li>
      </ul>
    </section>
  );
}
