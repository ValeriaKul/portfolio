import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Menu({closeMenu}) {
    const { t } = useTranslation();
    const smoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
        if (closeMenu) closeMenu();
      };
  return (
    <>
        <a className='menu_link' href="#aboutMe" onClick={smoothScroll}>{t("About Me")}</a>
        <a className='menu_link' href="#projects" onClick={smoothScroll}>{t("Projects")}</a>
        <a className='menu_link' href="#technologies" onClick={smoothScroll}>{t("Technologies")}</a>
        <a className='menu_link' href="#contacts" onClick={smoothScroll}>{t("Contact")}</a>
    </>
  )
}
