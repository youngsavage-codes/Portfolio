import React from 'react'
import { Link } from 'react-router-dom'
import plus from '../icon/icons8-plus-94.png'
import comp from '../Image/computer.webp'
import insta from '../icon/icons8-instagram-94.png'
import git from '../icon/icons8-github-94.png'

function Nav({setModel}) {
  return (
    <div className='w-full'>
               <nav className=' w-full'>
                    <div className='fixed items-center lg:top-10 lg:left-32 top-7 left-5'><div className='flex items-center'><h1 className='items-center text-2xl capitalize mr-5'>SAVAGE </h1><img src={comp} alt='' className='w-[20%]'/></div></div>

                      <div className='fixed lg:top-10 lg:right-10 top-9 right-[-40px]'>
                          <button className='font-extralight mt-[-2px] mb-16' onClick={() => setModel(true)}><img src={plus} alt='' className='w-[30px] lg:w-[40px]'/></button>
                          <ul>
                            <li className='mb-5'><Link><img src={insta} alt='' className='w-[25%] lg:w-[30%]'/></Link></li>
                            <li><Link to='https://github.com/youngsavage-codes'><img src={git} alt='' className='w-[25%] lg:w-[30%]'/></Link></li>
                          </ul>
                      </div>
               </nav>
    </div>
  )
}

export default Nav