import React from 'react'
import hello from '../Image/6b8bd7_3ae46f1eedf34b47a9002f585cd96a31f000 (1).webp'
import ear from '../Image/smallear.webp'
import buld from '../Image/lightbulb.webp'
import smbrain from '../Image/smallbrain.webp'
import speaker from '../Image/megaphone.webp'
import brain from '../Image/brain2.webp'
import clock from '../Image/clock.webp'
import { Link } from 'react-router-dom'
import pencil_hand from '../Image/workpencil.webp' 
import dp from '../Image/5-high-top-fade-with-disconnected-side-part.webp'
import left from '../icon/icons8-arrow-94 (1).png'
import right from '../icon/icons8-arrow-94.png'

const Home = () => {
  return (
    <div>

               <section className='flex items-center justify-center'>
                              <img src={hello} alt=''/>
               </section>

               <section className='p-10 w-full'>
                              <div className=' w-[100%] lg:w-[30%] lg:ml-72'>
                                             <h2 className='text-[30px] lg:text-[60px] about mb-7 font-extrabold font-[Bahnschrift Condensed]'>It's all about the experience</h2>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.</p>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>It’s our approach that’s different. We won’t bring an army to the battle. We bring a lean team of experts with bags of experience to the table, who will quickly get to the heart of what you’re looking to achieve.</p>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment. Whether you’re looking for a full project solution or require specific design skills to complement your in-house team, we deliver solutions that pack a real punch.</p>
                                             <Link to='' className='underline text-2xl lg:text-3xl pt-10'>Lets Talk</Link>
                              </div>

                              <div className='mt-40 lg:mt-72'>
                                             <h1 className='flex items-center justify-center mt-20 text-9xl font-extrabold lg:text-[400px] font-[Bebas Neue]'>What</h1>
                                             <div className='lg:flex lg:items-center lg:justify-center lg:w-[60%] m-auto mt-[-60px] lg:mt-[-110px]'>
                                                            <div className='text-center mb-10'>
                                                                           <img src={speaker} alt=''  className='mx-auto h-44 mb-10'/>
                                                                           <h1 className='text-[24px] mb-5'>Branding & Design</h1>
                                                                           <p className='font-extralight w-[70%] mx-auto text-p-color'>& Design Full strategy design and execution for new and refresh brand projects, including positioning, brand architecture and identity</p>
                                                            </div>
                                                            <div className='text-center mb-10'>
                                                                           <img src={brain} alt='' className='mx-auto h-44 mb-10'/>
                                                                           <h1 className='text-[24px] mb-5'>Product & Service Design</h1>
                                                                           <p className='font-extralight w-[70%] mx-auto text-p-color'>Product and Service design for new and existing solutions, including UX, UI, visual design and marketing support</p>
                                                            </div>
                                                            <div className='text-center mb-10'>
                                                                           <img src={clock} alt='' className='mx-auto h-44 mb-10'/>
                                                                           <h1 className='text-[24px] mb-5'>On-Demand Services</h1>
                                                                           <p className='font-extralight w-[70%] mx-auto text-p-color'>We provide full-stack design and creative skills to complement and support the short and long-term needs of your team.</p>
                                                            </div>
                                             </div>
                              </div>
               </section>

               <section className='flex items-center justify-center lg:my-32 lg:p-10 p-5'>
                              <div className='lg:w-[40%] bg-white text-bg-color p-10 shape'>
                                             <h2 className='lg:text-[40px] text-[20px] font-extrabold mb-5 mywords'> I've worked with many global agencies and I genuinely experienced a level of creativity
                                              and depth of thinking that is second to none. I can’t recommend BYXP highly enough
                                              </h2>
                                                            <span className='text-black font-bold'>Ben Waring</span>
                                                            <p className='text-gray-500'>Managing Director - How High Brands</p>
                              </div>
               </section>

               <section>
                              <div className=' p-5 w-[100%] lg:w-[30%] lg:ml-72'>
                                             <h2 className='text-[30px] lg:text-[60px] about mb-7 font-extrabold font-[Bahnschrift Condensed]'>It's all made by experience</h2>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>With decades of experience, we've collectively worked on both the agency and client-side of the fence, here in the UK and overseas. Earning a reputation for consistently delivering impactful and creative solutions, we've led major digital projects for clients including BBC, Channel 4, Department for Education, BMW, UK Parliament, Oxford University Press, Penguin Books, British Army, Royal Navy, National College for Teaching & Leadership, DSW Consulting, Sparx, How Hight Brands, Black Dot Publishing and RM Plc. </p>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>We formed By Experience in 2018 to continue to aim high and bring creative ideas to life for a broader set of clients via our extended network. We have lots of experience with helping commercial organisations to activate or transform their brand, design new software products and services, and create compelling design communications that stand out from the crowd.</p>
                                             <Link to='' className='underline text-2xl lg:text-3xl pt-10'>Lets Talk</Link>
                              </div>

                              <h1 className='flex items-center justify-center mt-20 text-9xl font-extrabold lg:text-[400px] font-[Bebas Neue]'>Work</h1>
                              <img src={pencil_hand} alt='' className='mx-auto mt-[-45px] lg:mt-[-150px]'/>
               </section>

               <section className='bg-gray-800 py-[4%]'>
                              <h1 className='text-center text-3xl lg:text-6xl py-5 mt-10'>Reviews</h1>
                              <div className='flex items-center justify-around'>
                                             <div>
                                                            <img src={right} alt='' />
                                             </div>
                                             <div className='text-center py-[2%]'>
                                                            <img src={dp} alt='' className='mx-auto w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full'/>
                                                            <h4 className='text-sm lg:text-1xl w-[55%] mx-auto my-10 font-extralight'>We formed By Experience in 2018 to continue to aim high and bring creative ideas to life for a broader set of clients via our</h4>
                                                            <p className=' lg:text-xl mb-10 '>John Doe</p>
                                             </div>
                                             <div>
                                                            <img src={left } alt='' />
                                             </div>
                              </div>
               </section>

               <section className='p-10 my-32 w-full'>
                              <div className=' w-[100%] lg:w-[30%] lg:ml-72'>
                                             <h2 className='text-[30px] lg:text-[60px] about mb-7 font-extrabold font-[Bahnschrift Condensed]'>So what makes us different</h2>
                                             <p className='text-[14px] lg:text-[16px] mb-10 font-extralight text-p-color'>So what makes us different Creativity and Efficiency must co-exist for commercial design to be effective. We don't just believe this - we practise it daily. Whatever your challenge, opportunity or goal, we design and deliver exceptional solutions on time and budget.</p>
                              
                              </div>

                                             <div className='lg:flex lg:justify-between lg:w-[65%] mx-auto mt-36'>
                                                            <div className='lg:w-[25%] '>
                                                                           <img src={ear} alt=''  className='mx-auto h-72'/>
                                                                           <h1 className='text-[24px] mb-5 text-center mt-5'>We listen, learn and establish goals</h1>
                                                            </div>
                                                            <div className='lg:w-[25%] '>
                                                                           <img src={smbrain} alt='' className='m-auto'/>
                                                                           <h1 className='text-[24px]  text-center mt-4'>We solve problems and make the complex simple</h1>
                                                            </div>
                                                            <div className='lg:w-[25%]'>
                                                                           <img src={buld} alt='' className='mx-auto h-72'/>
                                                                           <h1 className='text-[24px] text-center mt-5'>We make things happen</h1>
                                                                          
                                                            </div>
                                             </div>

               </section>
    </div>
  )
}

export default Home