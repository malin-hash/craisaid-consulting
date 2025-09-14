import React from 'react'
import { FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Sidebar({ open, onClose }){
  const { t } = useTranslation()
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <aside className="absolute right-0 top-0 w-72 h-full bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center mb-6 w-full bg-green-500 p-5">
          <strong>Menu</strong>
          <button className='hover:text-white text-xl transition-colors duration-300' onClick={onClose}><FaTimes /></button>
        </div>
        <nav className="flex flex-col px-8">
          <a href="#home" className='block p-3 hover:bg-green-500 rounded-lg hover:text-center transition-all duration-300 font-semibold' onClick={onClose}>{t('home')}</a>
          <a href="#services" className='block p-3 hover:bg-green-500 rounded-lg hover:text-center transition-all duration-300 font-semibold' onClick={onClose}>{t('services')}</a>
          <a href="#projects" className='block p-3 hover:bg-green-500 rounded-lg hover:text-center transition-all duration-300 font-semibold' onClick={onClose}>{t('projects')}</a>
          <a href="#about" className='block p-3 hover:bg-green-500 rounded-lg hover:text-center transition-all duration-300 font-semibold' onClick={onClose}>{t('about')}</a>
          <a href="#contact" className='block p-3 hover:bg-green-500 rounded-lg hover:text-center transition-all duration-300 font-semibold' onClick={onClose}>{t('contact')}</a>
        </nav>
        <hr />
        <h1 className='p-4 font-bold ml-4'>Nos réseaux sociaux</h1>
        <div className="mt-1 flex gap-4 px-8 py-2">
          <FaFacebook size={20}  className='hover:text-green-400 transition-all duration-300'/>
          <FaTwitter size={20}  className='hover:text-green-400 transition-all duration-300'/>
          <FaLinkedin size={20}  className='hover:text-green-400 transition-all duration-300'/>
          <FaInstagram  size={20} className='hover:text-green-400 transition-all duration-300'/>
        </div>


      </aside>
    </div>
  )
}
