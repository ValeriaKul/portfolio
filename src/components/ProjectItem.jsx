import React from 'react'
import { useTranslation } from "react-i18next";

export default function ProjectItem({title, descr, image, ghPages, code}) {
    const { t } = useTranslation();
    const relocateToGHPages = () => {
        window.open(ghPages, '_blank');
    }
    const relocateToCode = () => {
        window.open(code, '_blank');
    }
  return (
    <div className='project_item'>
        <img className="project_item__img" src={image} alt={title} />
        <p className="project_item__title">{title}</p>
        <img className="project_item__line" src={process.env.PUBLIC_URL + "/images/line.png"} alt="line" />
        <p className="project_item__descr">{descr}</p>
        <div className='project_item__btns'>
            <button className='btn_pages' onClick={relocateToGHPages}>{t("Visit site")}</button>
            <button className='btn_code' onClick={relocateToCode}>{t("Open code")}</button>
        </div>
    </div>
  )
}
