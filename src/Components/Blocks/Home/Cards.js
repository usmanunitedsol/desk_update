import React from 'react'
import SectionHead from '../../Global/SectionHead'
import ImageBlock from '../../Global/ImageBlock'
import SectionCta from '../../Global/SectionCta'
export default function Cards({MembershipContnet}) {
  return (
    <div className='cardsMembers  grid grid-cols-3 '>
    {
      MembershipContnet.cardsMembers.map((cardsitems)=>      
         <div className="cardsitems   max-w-[450px] min-h-[437px]  shadow  "     key={cardsitems.id}>      

          <div className='cards_top  bg-cover  bg-center  bg-no-repeat sm:py-4 md:py-0 lg:py-0  '  style={{ backgroundImage: `url(${cardsitems.bgimg})` }}>

                 <div className='cards_top_con flex justify-center align-middle flex-col items-center '>
                    <h3 className='secondary_title '>{cardsitems.title}</h3>
                    
                    <p className='primary_text'>{cardsitems.subtitle}</p> 

                    </div>

           </div>

           <div className='second_sec'>

               <div className='second_img p-5' > <ImageBlock image={cardsitems.img}/></div>

            <div className='price flex justify-center'>
              {cardsitems.dicontprice && (<del className='dicontPrice  px-1'>{cardsitems.dicontprice}</del>)}
              <p className='realprice text-[22px] '> <span className='text-[30px] font-bold'> {cardsitems.price}</span> / Month</p>
            </div>
            
            <div className='button_block p-4'>
                  <SectionCta prop="Book Now" url="/" ctaClass="btn-secondry"/>    
              </div>

               { cardsitems.discont && (<p className='text-[15px] p-4'>{cardsitems.discont}</p>)}

           </div>

           </div>           
      )
    }
</div>
  )
}
