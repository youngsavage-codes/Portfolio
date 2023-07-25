import React from 'react'
import clos from '../icon/icons8-close-94.png'

const Contact = ({setModel}) => {
  return (
    <div className='contact fixed w-full bg-[#0B10D4F2]'>
               <button className='absolute right-10 top-7 lg:right-24 lg:top-12 text-4xl' onClick={() => setModel(false)}><img src={clos} alt='' className='w-[30px] lg:w-[40px]'/></button>
               <div className='px-7 lg:w-[32%] mx-auto flex items-center justify-center h-[100vh]'>
               <div>
                              <div>
                                             <h1 className='text-[30px] lg:text-[80px] font-cold about mb-7 font-extrabold font-[Bahnschrift Condensed]'>Let's talk</h1>
                                             <p className='text-[14px] lg:text-[16px] mb-5 font-extralight text-p-color'>We'd love to hear from you, whether you just want to shoot the breeze or discuss a potential opportunity to achieve great things together.</p>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>if you simply can't wait to start the conversation, then jot down your email address and scribble a few notes and we'll get right back to you. </p>
                              </div>
                             <form>
                                             <div className='flex items-start justify-between mb-7'>
                                                            <input type='text' placeholder='First Name' className='w-[47%] py-3 px-2 outline-none font-extralight text-black'/>
                                                            <input type='email' placeholder='Email' className='w-[47%] py-3 px-2 outline-none font-extralight text-black'/>
                                             </div>
                                             <div>
                                                            <textarea placeholder='Type Your Message Here.....' className='w-full p-5 h-[24vh] outline-none resize-none font-extralight text-black'></textarea>
                                             </div>
                                             <div className='flex items-center justify-center'>
                                                            <button className='bg-white px-16 py-3 text-bg-color mx-auto mt-7'>Send</button>
                                             </div>
                             </form>
               </div>
               </div>
    </div>
  )
}

export default Contact