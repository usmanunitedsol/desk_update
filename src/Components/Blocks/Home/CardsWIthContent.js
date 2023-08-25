import React from 'react'
import SectionHead from '../../Global/SectionHead'
import ImageBlock from '../../Global/ImageBlock'

export default function CardsWIthContent({cardsSectionData}) {
  return (
  
    <div className={cardsSectionData.sectionBg===true ? "section_bg section_padding" : "section_padding"}>
        <div className='main_container'>
        <SectionHead headContent={cardsSectionData}/>  
            <div className="cardsSectionData">
           
            {
            cardsSectionData.cardsData.map((items)=>
            
                  <div className="cards" key={items.id}>
                        <ImageBlock image={items.icon}/>
                        <h4 className='secondary_title'>{items.subtitle}</h4>
                        <p className="primary_text">{items.subdesc}</p>

                  </div>
            )
           }
            </div>
        </div>
    </div>
  )
}
