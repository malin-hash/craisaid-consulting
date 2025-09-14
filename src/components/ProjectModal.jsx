import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({project, onClose}){
  if(!project) return null
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <motion.di initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="relative bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6 z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 dark:text-gray-300">✕</button>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
        <div className="flex gap-3">
          {project.docs && project.docs.map((d,i) => (
            <a key={i} href={d.href} download className="px-3 py-2 border rounded bg-primary text-white">{d.label}</a>
          ))}
        </div>
      </motion.di>
    </div>
  )
}
