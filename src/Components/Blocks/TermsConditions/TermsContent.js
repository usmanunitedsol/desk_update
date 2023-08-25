import React from 'react'

export default function TermsContent({TcContent}) {
  return (
   <div className='TcContent'>
                {
                    TcContent.map((itemContent)=>(
                         <div className='inner_content' key={TcContent.id}>
                            
                             <h2 className='secondary_title'  id={`cms_${itemContent.id}`} >{itemContent.title}</h2>
                             {
                               itemContent.list.map((listitems)=>
                               <div key={listitems.id}>
                               <p className='primary_text'>{listitems.listText}</p>
   
                               </div>
                               )} 
                               
                         </div>
                    ))
                }
   </div>
  )
}
