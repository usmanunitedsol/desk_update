import React from 'react'
import SectionCta from '../Global/SectionCta'

export default function Headerbuttons() {
  return (
    <div className='header_buttons'>

           <div className='button_block'>
               <SectionCta prop="051 844 2556" url="/" ctaClass="btn-link" />
               <SectionCta prop="Register Startup" url="/" ctaClass="btn-secondry" />
               <SectionCta prop="Book a Seat" url="/" />
            </div>
    </div>
  )
}
