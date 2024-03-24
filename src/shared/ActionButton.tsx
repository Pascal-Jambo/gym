import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './enum'

type Props = {
    children:React.ReactNode
    setSelected:(value:SelectedPage)=>void
}

const ActionButton = ({children,setSelected}: Props) => {
  return (
    <AnchorLink
    className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
   onClick={()=>setSelected(SelectedPage.ContactUs)}
   href={`${SelectedPage.ContactUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButton