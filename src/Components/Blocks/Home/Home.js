import React from 'react'
import Banner from '../../Global/Banner'
import Joinus from './Joinus'
import  CardsWIthContent from "./CardsWIthContent"
import  CoWorkingSpace from "./CoWorkingSpace"
import Membership from './Membership'

const Home = () => {


  const cardsSectionData={
    sectionBg: true,
    id:1,title:"Shared CoWorking Office",desc:"Our CoWorking Space in Islamabad is equipped with every modern facility for your work needs. Our interiors are custom designed based on the latest ergonomic needs of a modern day office. We understand the importance of a fast and seamless online experience and provide uncompromised internet speeds, with separate Wifi and Ethernet access points. All our rooms air conditioned with back-up generators so you remain focused and sharp in fully maintained comfort zone.",
  
        
       cardsData :[  
                 {id:1, icon:"images/Conference.png",subtitle:"Conference Room",subdesc:"Build new business connections"},
                 {id:2, icon:"images/timing.png",subtitle:"Flexible Timmings",subdesc:"Build new business connections"},
                 {id:3, icon:"images/icon (1).png",subtitle:"Modern Design",subdesc:"Build new business connections"},
                 {id:4, icon:"images/internet.png",subtitle:"Fast Internet",subdesc:"Build new business connections"},
                 {id:5, icon:"images/Conference.png",subtitle:"Parking",subdesc:"Build new business connections"},
                 {id:6, icon:"images/location2.png",subtitle:"Strategic Location",subdesc:"Build new business connections"},
                 {id:7, icon:"images/timing.png",subtitle:"Air Conditioning",subdesc:"Build new business connections"},
                 {id:8, icon:"images/location2.png",subtitle:"Projector",subdesc:"Build new business connections"}


                  ] 
    
                };

                const MembershipContnet={
                  title:"Explore the Desk CoWorking Space",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",


                  cardsMembers:[
                    {id:1,title:"Dedicated Desk",subtitle:"For  Individuals",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000",dicontprice:"15,000",btnTitle:"Book Now",discont:"*Discounts on 6 or 12 months advance payment"},
                    {id:2,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:3,title:"Dedicated Desk",subtitle:"For  Individuals",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:4,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:5,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:6,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:7,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""},
                    {id:8,title:"Private Office",subtitle:"For  09/People",bgimg:"images/Ellipse1.png",img:"images/Features.png",price:"12,000 ",dicontprice:"",btnTitle:"Book Now",discont:""}
                  ]
         }


         




  return (
    <>
       <div className='home_wrapper'>
        <Banner/>
        <Joinus/>
        <CardsWIthContent cardsSectionData={cardsSectionData}/>
        <CoWorkingSpace/>
        <Membership MembershipContnet={MembershipContnet}/>

        </div>
    </>
  )
}

export default Home
