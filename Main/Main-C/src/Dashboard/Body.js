import React from 'react'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <aside className='ml-60 bg-cyan-500'>
        <Outlet/>
      </aside>
    
    </>
  )
}

export default Body