import React from 'react'

export default function SectionHead({headContent}) {
  return (
    <div className='sectionhead'>
           <h2 className='secondary_title'>{headContent.title}</h2>
           <p className='primary_text'>{headContent.desc}</p>
    </div>
  )
}
