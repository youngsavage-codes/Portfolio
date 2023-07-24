import React from 'react'
import { Link } from 'react-router-dom'
import plus from '../icon/icons8-plus-94.png'
import comp from '../Image/computer.webp'

function Nav({setModel}) {
  return (
    <div className='w-full'>
               <nav className=' w-full bg-red-600'>
                    <div className='fixed items-center top-10 left-32'><div className='flex items-center'><h1 className='items-center text-2xl capitalize mr-5'>SAVAGE </h1><img src={comp} alt='' className='w-[20%]'/></div></div>

                      <div className='fixed top-10 right-28'>
                          <button className='text-xl font-extralight mt-[-2px] mb-16' onClick={() => setModel(true)}><img src={plus} alt='' className='w-[40px]'/></button>
                          <ul>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Github</Link></li>
                          </ul>
                      </div>
               </nav>
    </div>
  )
}

export default Nav