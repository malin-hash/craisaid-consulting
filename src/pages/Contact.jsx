import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaLocationArrow} from 'react-icons/fa'

export default function Contact(){
  return (
    <div className="container py-20 text-center p-24" id="contact-form">
      <h2 className="text-2xl font-bold">Contactez-nous </h2>
      <p className='text-sm text-gray-400 mb-6'>Nous sommes là pour répondre à vos besoins</p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <form className="space-y-3">
          <div>
            <h1 className="font-bold text-xl">Envoyez-nous un message</h1>
            <p className='text-sm text-gray-400 mt-0'>Ecrivez-nous à n'importe quelle heure</p>
          </div>
          <input className="w-full border-2 rounded p-2" placeholder="Votre nom" />
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
            <input className="w-full border-2 rounded p-2" placeholder="Votre Prénom" />
            <input className="w-full border-2 rounded p-2" placeholder="Objet du message" />
          </div>
          <input className="w-full border-2 rounded p-2" placeholder="Votre Email" />
          <textarea className="w-full border-2 rounded p-2 resize-none" rows="6" placeholder="Message"></textarea>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded w-full hover:bg-green-600">Envoyer</button>
        </form>
      </div>
      <div>
        <h1 className="font-bold text-xl">Information sur le contact</h1>
        <p className='text-sm text-gray-400 mb-2'>Comment nous contactez</p>
        <div className='flex-col space-y-3 text-justify mt-8'> 
          <div className='flex space-x-2'>
            <div className='p-5 rounded-full bg-green-500'>
              <FaLocationArrow size={15} className='text-white'/>
            </div>
            <div>
               <h1 className='font-bold md:text-lg text-md'> Adresse</h1>
               <p className='text-sm text-gray-500'>Avenue D.Dacko</p>
            </div>
          </div>
          <div className='flex space-x-2'>
            <div className='p-5 rounded-full bg-green-500'>
              <FaPhone size={15} className='text-white'/>
            </div>
            <div>
              <h1 className='font-bold md:text-lg text-md'> Téléphone</h1>
              <p className='text-sm text-gray-500'>+236 74427249</p>
            </div>
          </div>
          <div className='flex space-x-2'>
            <div className='p-5 rounded-full bg-green-500'>
              <FaEnvelope size={15} className='text-white'/>
            </div>
            <div>
              <h1 className='font-bold md:text-lg text-md'> Email</h1>
              <p className='text-sm text-gray-500'>mokosseakowoe@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-semibold mt-3'>Nos réseaux sociaux</h1>
          <p className='text-sm text-gray-500'>Vous pouvez nous retrouver sur ces différents réseaux.</p>
          <div className="mt-3 justify-center flex gap-4 px-3 py-2">
            <FaFacebook size={20}  className='hover:text-green-400 transition-all duration-300'/>
            <FaTwitter size={20}  className='hover:text-green-400 transition-all duration-300'/>
            <FaLinkedin size={20}  className='hover:text-green-400 transition-all duration-300'/>
            <FaInstagram  size={20} className='hover:text-green-400 transition-all duration-300'/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
