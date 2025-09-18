import React from 'react'
import Card from '../components/Card'

export default function Services(){
  return (
    <div className="container py-10 text-center px-14 bg-slate-100">
      <h2 className="text-2xl font-bold mb-6 text-green-400 ">Nos Ex<span className='text-black'>perti</span>ses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Card title="Coaching individuel" subtitle="Accompagnement personnalisé">Séances de coaching pour entrepreneurs et dirigeants.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
      </div>
    </div>
  )
}
