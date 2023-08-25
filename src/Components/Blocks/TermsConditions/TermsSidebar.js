import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function TermsSidebar({TcSidebar}) {
  const [selectedItem, setSelectedItem] = useState(null)

    const handleScroll = (id) => {
        setSelectedItem(id);
    }
  return (
    <div className="tc_Sidebar">
          {
               TcSidebar.map((items)=>


                  <div className='sidebar_inner' key={items.id} onClick={() => handleScroll(items.id)}>
               
                     <p className='primary_text'>  
                       <Link href={'#!'} to={`cms_${items.id}`} smooth={true} offset={-50} activeClass="cms_tab_active" spy={true}> {items.title}
                       
                         </Link></p>

                     <Link/>

                     </div>
               )
          }
    </div>
  )
}
