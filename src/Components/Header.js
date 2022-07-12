import React from 'react'

export default function Header({categorie, title}) {
  return (
    <div className='mb-8 ml-5'>
        <p className='text-gray-400'>
            {categorie}
        </p>
        <p className='text-2xl font-extrabold tracking-tight text-slate-900'>
            {title}
        </p>
    </div>
  )
}
