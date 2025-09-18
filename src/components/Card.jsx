import React from 'react'

export default function Card({title, subtitle, children}) {
  return (
    <article className="bg-slate-50 rounded-lg p-12 shadow-2xl cont">
      <h3 className="font-bold text-lg text-black dark:text-white">{title}</h3>
      {subtitle && <p className="text-sm text-green-600 dark:text-gray-300">{subtitle}</p>}
      <div className="mt-3 text-gray-700 dark:text-gray-200">{children}</div>
    </article>
  )
}
