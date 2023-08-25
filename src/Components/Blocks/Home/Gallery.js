import React from 'react'
import ImageBlock from '../../Global/ImageBlock'
export default function Gallery({galleryImages}) {
  return (
    <div className="gallery">

          {
            galleryImages.map((items)=>
               <div className="images" key={items.id}>
                   <ImageBlock image={items.image}/>
                </div>
            
            )
          }
              
    </div>
  )
}
