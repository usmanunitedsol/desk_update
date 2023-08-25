import React from 'react'
import SectionHead from '../../Global/SectionHead'
import SectionCta from '../../Global/SectionCta'
import Iconsrow from './Iconsrow'
export default function Joinus() {

    const headContent={
        id:1, title:"Community, creativity, comfort & more ", desc:"Our mission at TheDesk is to offer the best facilities, amenities and features under one roof. Building a talented community, TheDesk is a professional platform for budding entrepreneurs, long-term freelancers, overtime workers and other types of independent and self-employed workers.From our own innovation, we have designed a place that not only helps your grow, but gives you a greater value for money than any other coworking space in Pakistan.",
    }

    const iconsrow= [
    {id:1,image:"images/internet.png",title:'High Speed Internet'},
    {id:2,image:"images/parking-lot.png",title:'Huge Parking Space'},
    {id:3,image:"images/Conference.png",title:'Conference Room'},
    {id:4,image:"images/location2.png",title:'Strategic Location'},
]
 
  return (
    <div className='section_padding'>
          <div className='main_container'>
                 <div className='joinus'>
                        <SectionHead headContent={headContent}/>

                        <Iconsrow iconsrow={iconsrow}/>

                        <div className='button_block'>
                            <SectionCta prop="Join Us Now" url="/" />    
                        </div>

                  


                 </div>
          </div>
    </div>
  )
}
