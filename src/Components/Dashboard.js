import React from 'react';  

export default function Dashboard() {
  const center = [51.505, -0.09]
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1>Dashboard</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7719.916648557242!2d-17.4378091!3d14.6583066!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1655946206503!5m2!1sfr!2ssn" className='w-4/5 h-4/5' style={{'border' : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
