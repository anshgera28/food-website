import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { dataContext } from '../context/UserContext';


function Nav() {
  let {input, setInput} = useContext(dataContext)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>
      <form className='w-[40%] h-[60px] bg-white flex  items-center rounded-md shadow-xl px-5 gap-5 md:w-[70%]' onSubmit={(e) => e.preventDefault()}> 
      <IoSearch  className= 'text-green-500 w-[20px] h-[20px]'/> 
      <input type="text" placeholder="Search Items...." className=" w-[90%] border-none outline-none" onChange={(e) => setInput(e.target.value)} value={input}/>
      </form>  
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <span className='absolute -top-1 -right-0 text-green-500 font-bold text-[15px]'>0</span>
      <IoBagHandle className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  )
}

export default Nav
