import React from 'react'
import "../Blocks/Banner.scss"
import SectionCta from './SectionCta'
const Banner = () => {
  return (

    <div>
    <section id="intro-section" className="home_page_banner Container   text-center">
   
      <div className="row">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <div className='banner_content'>

          
            <p className="mb-4">
              Sustainable, Professional & Strategically Located3
            </p>
            <h2 className="mb-3">CoWorking Space In Islamabad</h2>
            <p className="mb-4">
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
  </div>
  )
}

export default Banner
