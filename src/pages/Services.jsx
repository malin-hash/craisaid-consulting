import React from 'react'
import Card from '../components/Card'

export default function Services(){
  return (
    <div className="container py-10 text-center md:px-14 px-8 bg-slate-100">
      <h2 className="text-2xl font-bold text-green-400">Nos Ex<span className='text-black'>perti</span>ses</h2>
      <p className='text-sm mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor fugiat id assumenda nihil doloribus possimus similique repellat voluptate eveniet!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 ">
        <Card title="Coaching individuel" subtitle="Accompagnement personnalisé">Séances de coaching pour entrepreneurs et dirigeants.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
        <Card title="Formation" subtitle="Entrepreneuriat">Ateliers pratiques pour lancer et développer des projets.</Card>
      </div>
    </div>
  )
}
