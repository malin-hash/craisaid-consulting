import React from 'react'

export default function About(){
  return (
    <div className="container py-10 w-full bg-[url('/ecole/ecole2.jpg')] bg-cover bg-center md:px-64 h-screen">
      <h2 className="text-xl font-bold mb-4 text-center text-green-500 content">Qui nous sommes ? </h2>
      <div className='grid grid-cols-1 gap-4 px-8'>
        <div>
          <h1 className='text-lg font-bold text-green-500 text-justify content'>Nos Objectif</h1>
          <p className="text-sm text-white font-bold text-justify content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum omnis, delectus incidunt ea repellendus fugiat culpa ratione quae vero earum velit iure excepturi ad? Iure facilis necessitatibus animi magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quidem explicabo incidunt esse tempora quod id officia, in quos ullam, magni rem asperiores quisquam repellat at itaque autem harum velit.</p>
        </div>
        <div>
          <h1 className='text-lg font-bold text-green-500 text-justify content'>Notre vision</h1>
          <p className="text-sm text-white font-bold text-justify content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, veritatis eum rerum voluptates et nisi, error labore repellendus, repellat soluta eligendi! Quos repellendus eos vitae dolorum recusandae iusto sunt reprehenderit! CRISAID Consulting est une ONG dédiée au coaching, à l'entrepreneuriat et au développement personnel.</p>
        </div>
      </div>
    </div>
  )
}
