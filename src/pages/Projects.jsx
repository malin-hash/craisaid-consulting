import React, { useState } from 'react'
import Card from '../components/Card'
import ProjectModal from '../components/ProjectModal'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const demo = [
  {id:1, title:'Projet A', subtitle:'Coaching scolaire', description: 'Détail du projet A: coaching pour jeunes.', docs: [{label:'Télécharger PDF', href:'/src/assets/project-A.pdf'}]},
  {id:2, title:'Projet B', subtitle:'Incubateur local', description: 'Détail du projet B: création d\'incubateur.', docs: [{label:'Télécharger PDF', href:'/src/assets/project-B.pdf'}]},
  {id:2, title:'Projet B', subtitle:'Incubateur local', description: 'Détail du projet B: création d\'incubateur.', docs: [{label:'Télécharger PDF', href:'/src/assets/project-B.pdf'}]},
  {id:3, title:'Projet C', subtitle:'Formation numérique', description: 'Détail du projet C: formation en compétences numériques.'},
]

export default function Projects(){
  const [selected, setSelected] = useState(null)
  return (
    <div className="container py-20 text-center bg-slate-200 w-full p-12 ">
      <h2 className="text-2xl font-bold mb-6">Projets réalisés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {demo.map((p, i) => (
          <motion.div key={p.id} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i * 0.08}}>
            <button className="text-left w-full" onClick={() => setSelected(p)}>
              <Card title={p.title} subtitle={p.subtitle}>
                Description courte du projet. Cliquer pour plus de détails.
                <div className='flex space-x-2 mt-3 '>
                  <p className='text-green-600 hover:text-green-800'>En savoir plus</p>
                  <FiArrowRight size={20} className='mt-1 text-green-600 hover:text-green-800'/>
                </div>
              </Card>
            </button>
          </motion.div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
