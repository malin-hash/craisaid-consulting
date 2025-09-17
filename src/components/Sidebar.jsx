import React from 'react'
import { FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export default function Sidebar({ open, onClose }){
  const { t } = useTranslation()
  // if(!open) return null
  return (
    <div className={open ? "fixed inset-0 z-50" : "hidden"}>
      <div className="absolute inset-0 bg-black/60" ></div>
      <aside className="absolute right-0 top-0 w-72 h-full bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center mb-3 w-full bg-slate-200 p-5">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">C</div>
          <button className='hover:text-red-500 text-xl transition-colors duration-300' onClick={onClose}><FaTimes /></button>
        </div>
        {/* <p className='p-2 font-bold text-lg'>Menu</p> */}
        <nav className="flex flex-col px-8">
           <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-99} activeClass='bg-green-500 text-center text-lg' to="home" className='mb-2  block p-3 hover:bg-green-500 rounded-lg  cursor-pointer transition-all duration-300 font-semibold'>{t('home')}</Link>
           <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-90} activeClass='bg-green-500 text-center text-lg' to="about"className='mb-2  block p-3 hover:bg-green-500 rounded-lg  cursor-pointer transition-all duration-300 font-semibold'>{t('about')}</Link>
           <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-90} activeClass='bg-green-500 text-center text-lg' to="services" className='mb-2  block p-3 hover:bg-green-500 rounded-lg  cursor-pointer transition-all duration-300 font-semibold'>{t('services')}</Link>
           <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-90} activeClass='bg-green-500 text-center text-lg' to="projects" className='mb-2  block p-3 hover:bg-green-500 rounded-lg  cursor-pointer transition-all duration-300 font-semibold'>{t('projects')}</Link>
           <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-90} activeClass='bg-green-500 text-center text-lg' to="contact" className='mb-2  block p-3 hover:bg-green-500 rounded-lg  cursor-pointer transition-all duration-300 font-semibold'>{t('contact')}</Link>
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
