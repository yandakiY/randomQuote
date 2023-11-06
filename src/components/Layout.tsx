import React from 'react'
import Quote from './Quote'

interface LayoutProps{
    author:string,
    quote:string
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className='p-4 border border-black w-fit sm:w-2/4'>
        {/* <h2>Quote :</h2> */}
        <Quote author={props.author} quote={props.quote}/>
    </div>
  )
}

export default Layout