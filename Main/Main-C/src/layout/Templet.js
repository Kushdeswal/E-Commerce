import React from 'react'
import kush from '../Assists/kush.mp4'
const Templet = () => {
  return (
   <>
   <div className=' sm:mt-14 mt-16 flex justify-center  '>
     <div className='main w-5/6 rounded-md '>
       <video src={kush} autoPlay loop muted className=''> </video>
       <div className='absolute top-0 h-full w-5/6 bg-gray-300 opacity-5 '>
       </div> 
  
        <div className='absolute top-24 sm:top-14 lg:top-64 left-[50px] sm:left-[80px] lg:left-[140px]  text-slate-50' >
           <h1 className='text-xl sm:text-8xl '>skywalkers</h1> 
           <p className='mt-1 text-xs sm:text-sm '>Step into the future with our high- 
           top<br /> sneakers and futuristic footwear,<br />
            merging style and innovation<br /> seamlessly</p>
            <button className=' rounded-xl px-1 hidden sm:block sm:px-3 sm:py-2 border-2  sm:mt-3 hover:text-gray-500 hover:border-gray-500 '>
                SHOP
            </button>
       </div> 
       <button>

       </button>

     </div>
   </div> 
   </>
  )
}

export default Templet


{/* <div className='bg-red-400 sm:mt-16 mt-20 flex justify-center  '>
     <div className='bg-yellow-600 w-5/6 '>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium quos doloremque molestias itaque, voluptatum, mollitia provident, corrupti modi obcaecati aut placeat laborum illo deleniti? Nulla unde inventore sit enim!
     </div>
   </div> */}