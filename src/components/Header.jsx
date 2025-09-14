import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { useTranslation } from 'react-i18next'

export default function Header({ setTheme }){
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-200 dark:bg-black p-4">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">C</div>
          <div>
            <div className="text-lg font-bold text-black dark:text-white">CRISAID Consulting</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Coaching • Entrepreneuriat • Développement</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-primary border-b-2 border-green-500 transition-all duration-500 font-semibold">{t('home')}</a>
          <a href="#services" className="hover:text-primary border-b-2 hover:border-green-500 transition-all duration-500 font-semibold">{t('services')}</a>
          <a href="#projects" className="hover:text-primary border-b-2 hover:border-green-500 transition-all duration-500 font-semibold">{t('projects')}</a>
          <a href="#about" className="hover:text-primary border-b-2 hover:border-green-500 transition-all duration-500 font-semibold">{t('about')}</a>
          <a href="#contact" className="hover:text-primary border-b-2 hover:border-green-500 transition-all duration-500 font-semibold">{t('contact')}</a>
          {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-1 border rounded">{theme === 'dark' ? 'Light' : 'Dark'}</button> */}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} aria-label="open menu"><FaBars size={22} /></button>
        </div>
      </div>

      <Sidebar open={open} onClose={() => setOpen(false)} setTheme={setTheme} />
    </header>
  )
}
