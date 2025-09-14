import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Home(){
  const { t } = useTranslation()
  return (
    <div className="container p-8 bg-green-600 text-center rounded-lg">
      <h2 className="text-3xl font-bold mb-4  text-white">{t('welcome')}</h2>
      <p className=" text-gray-300">CRISAID Consulting propose du coaching, de l'entrepreneuriat <br /> et du développement personnel.</p>
    </div>
  )
}
