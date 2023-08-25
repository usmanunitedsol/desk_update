import React from 'react'
import SectionHead from '../../Global/SectionHead'
import ImageBlock from '../../Global/ImageBlock'
import SectionCta from '../../Global/SectionCta'
import Cards from './Cards'

export default function Membership({MembershipContnet}) {
  return (
    <div className='section_padding'>
        <div className='main_container'>
               <div className='Membership '>
                 <SectionHead  headContent={MembershipContnet}/>
                 
                    <Cards  MembershipContnet={MembershipContnet}/> 
             </div>
      </div>
         
    </div>  
  )
}
