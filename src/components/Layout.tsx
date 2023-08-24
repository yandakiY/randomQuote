import React from 'react'
import Quote from './Quote'

const Layout: React.FC = () => {
  return (
    <div className='p-4 border border-black w-2/4'>
        {/* <h2>Quote :</h2> */}
        <Quote author='John Danaher' quote='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores labore itaque ex aliquam consequatur, ratione omnis tenetur dignissimos!'/>
    </div>
  )
}

export default Layout