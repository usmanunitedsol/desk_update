import React from 'react'
import { Link } from 'react-router-dom';

export default function SectionCta({prop,url,ctaClass}) {
  return (

            <Link className={`btn-primary ${ctaClass}`} href={url} >{prop}</Link>

  )
}
