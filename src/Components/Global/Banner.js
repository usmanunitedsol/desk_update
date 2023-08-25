import React from 'react'
import "../Global/Banner.scss"

import SectionCta from './SectionCta'
const Banner = () => {
  return (

 
    <section id="intro-section" className="home_page_banner mainContainer text-center">
   
      <div className="row intro_section_row">
        <div className="d-flex text-whit justify-content-center align-items-center h-100">
          <div className="text-white">
            <div className='banner_content text-white'>

          
            <p className="primary_text">
              Sustainable, Professional & Strategically Located3
            </p>
            <h2 className="primary_title">CoWorking Space In Islamabad</h2>
            <p className="primary_text">
              The Soundest Solution to supplement Your Daily Work Hours.{" "}
              <br />
              Join The Desk and Be the Boss of Yourself!
            </p>

            </div>

              
            <div className='button_block'>
                <SectionCta prop="Book A Tour" url="/" ctaClass="btn-secondry" />
                <SectionCta prop="Tech Incubation" url="/" />
            </div>
               
          </div>
        </div>
        </div>
   
    
  </section>


  )
}

export default Banner
