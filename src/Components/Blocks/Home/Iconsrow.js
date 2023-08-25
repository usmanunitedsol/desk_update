import React from 'react'
import ImageBlock from '../../Global/ImageBlock'

export default function Iconsrow({iconsrow}) {


  

  return (
    <div className='iconsrow'>
        {
           iconsrow.map((data)=>
              
           <div className='iconsData' key={data.id}>
                    <img src={data.image} />
                    <p className='primary_text'>{data.title}</p>
           </div>
           )

        }
    </div>
  )
}
