import React, { useState } from 'react'
import Card from '../components/Card'
import ProjectModal from '../components/ProjectModal'
import { FaUser, FaPlusCircle, FaCheckSquare} from 'react-icons/fa'


const demo = [
  {id:1, title:'Projet de Création de nola ', subtitle:'Coaching scolaire', description: 'Détail du projet A: coaching pour jeunes.', avatar: '/ecole/ecole1.jpg'},
  {id:2, title:'Projet B', subtitle:'Incubateur local', description: 'Détail du projet B: création d\'incubateur.', avatar: '/ecole/ecole2.jpg'},
  {id:2, title:'Cahier de charge', subtitle:'Description de tous les projets', description: 'Détail du Cahier de charge: création d\'incubateur. ', avatar: '/ecole/ecole3.jpg'},
  {id:3, title:'Projet C', subtitle:'Formation numérique', description: 'Détail du projet C', avatar: '/ecole/ecole2.jpg'},
]

export default function Projects(){
  const [selected, setSelected] = useState(null)
  return (
    <div className="container py-10 text-center bg-slate-100 w-full md:p-12 p-8 ">
      <h2 className="text-2xl font-bold mb-6 cont"><span className='text-green-500'>Nos</span> Réalisations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {demo.map((p) => (
          <div key={p.id} className='bg-white p-2 shadow-md rounded-md '>
                  <div className='relative'>
                    <img src={p.avatar} className='rounded-md mb-2 h-40  w-[100%]'/>
                    {/* <p className='text-white text-sm text-center absolute top-2 left-3 py-1 px-3 rounded-lg bg-blue-700'>{equipe.speciality}</p> */}
                  </div>
                    <h1 className='text-gray-700 text-center text-sm font-bold'>{p.title}</h1>
                    <p className='text-gray-800 text-center text-sm'>{p.subtitle}</p>
                    <div className='flex space-x-2 justify-center mt-1'>
                      <FaCheckSquare size={16} className='text-green-500'/>
                      <p className='text-sm text-green-500 text-center'>{p.description}</p>
                    </div>
                    <div className='flex space-x-2 justify-center mt-3'>
                      <FaUser size={15} className='text-gray-400'/>
                        <p className='text-gray-400 text-sm text-center'>{p.description}</p>
                    </div>
                </div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
