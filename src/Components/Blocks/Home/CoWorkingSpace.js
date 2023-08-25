import React from 'react'
import SectionHead from '../../Global/SectionHead'
import SectionCta from '../../Global/SectionCta'
import Gallery from '../../Blocks/Home/Gallery'
export default function CoWorkingSpace() {

    const CoWorkingSpace={
             title:"Explore the Desk CoWorking Space",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    }


    const galleryImages=[
        {id:1, image:"images/gallery1.jpg"},
        {id:2, image:"images/gallery2.jpg"},  
        {id:3, image:"images/gallery3.jpg"}, 
        {id:4, image:"images/gallery3.jpg"},
        {id:5, image:"images/gallery2.jpg"}, 
        {id:6, image:"images/gallery1.jpg"},
        {id:7, image:"images/gallery2.jpg"},  
        {id:8, image:"images/gallery3.jpg"}, 
    ]
  return (
    <div className='section_padding'>
        <div className='main_container'>
        
                <div className='CoWorkingSpace'>
                <SectionHead headContent={CoWorkingSpace}/>  
                <Gallery galleryImages={galleryImages}/>  
      
                </div>

                <div className='button_block'><SectionCta prop="Explore Gallery" url="/" /> </div>

        </div>
     </div>

  )
}
