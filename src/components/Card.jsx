import React from 'react'
import { FiFileMinus } from 'react-icons/fi'

export default function Card({title, subtitle, children}) {
  return (
    <article className="bg-slate-50 rounded-lg p-6 shadow-2xl cont">
      <div className='flex justify-center '>
          <FiFileMinus size={30} className='text-green-600 text-2xl p-2 bg-green-300 rounded-md '/>
      </div>
      <h3 className="font-semibold text-md text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-green-600 dark:text-gray-300">{subtitle}</p>}
      <div className="mt-3 text-gray-700 dark:text-gray-200 text-sm">{children}</div>
    </article>
  )
}
