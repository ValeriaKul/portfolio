import React from 'react'
import { useTranslation } from "react-i18next";

export default function ButtonDownloadCV() {
    const { t } = useTranslation();
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/cv/CV-Kulikova.pdf';
        link.download = 'CV-Kulikova.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <button className='btn_download' onClick={downloadCV}>
        {t('Download CV')}
    </button>
  )
}
