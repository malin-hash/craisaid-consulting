import React from 'react'

export default function About(){
  return (
    <div className="container py-20 w-full bg-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-green-500">A propos de nous ! </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 px-8'>
        <div>
          <h1 className='text-lg font-semibold text-gray-500 text-justify'>Notre Objectif</h1>
          <p className="text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum omnis, delectus incidunt ea repellendus fugiat culpa ratione quae vero earum velit iure excepturi ad? Iure facilis necessitatibus animi magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quidem explicabo incidunt esse tempora quod id officia, in quos ullam, magni rem asperiores quisquam repellat at itaque autem harum velit.</p>
        </div>
        <div>
          <h1 className='text-lg font-semibold text-gray-500 text-justify'>Notre vision</h1>
          <p className="text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, veritatis eum rerum voluptates et nisi, error labore repellendus, repellat soluta eligendi! Quos repellendus eos vitae dolorum recusandae iusto sunt reprehenderit! CRISAID Consulting est une ONG dédiée au coaching, à l'entrepreneuriat et au développement personnel.</p>
        </div>
      </div>
    </div>
  )
}
