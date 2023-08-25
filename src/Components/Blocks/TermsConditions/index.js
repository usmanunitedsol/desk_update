import React from 'react'
import TermsContent from './TermsContent'
import TermsSidebar from './TermsSidebar'

export default function TermsConditions() {

    const privacyheadings=[
        
    {
        id:1, title:"1-Legal Statement",

        list:[
            {      
                  id:1,
                listText:"magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }


        ]
    },


    {
        id:2, title:"2-Service Information",

        list:[
            {      
                  id:1,
                  listText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

            
        ]       
    }
      
    ]
  return (
    <div className='section_padding'>
    <div className='main_container'>
                <div className='TermsandCondition'>
                     <div className='side_bar'>
                     <TermsSidebar TcSidebar={privacyheadings}/>
                     </div>

                     <div className='cms_cnt_block'>
                      <TermsContent TcContent={privacyheadings}/>
                      </div>
                </div>
    </div>
    </div>
  )
}
