import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 py-32 lg:py-48'>
               <div className='w-[65%] lg:flex lg:items-start lg:justify-between mx-auto'>
                              <ul className='mb-10 '>
                                <h3 className='text-2xl mb-5'>Design by experience</h3>
                                  <li className='font-extralight'>Brand Positioning</li>
                                  <li className='font-extralight'>Brand Guidelines</li>
                                  <li className='font-extralight'>Design Strategy</li>
                                  <li className='font-extralight'>IA, UI & UX</li>
                                  <li className='font-extralight'>Web Design</li>
                                  <li className='font-extralight'>Print & Digital Collateral</li>
                                  <li className='font-extralight'>Book Cover Design</li>
                                  <li className='font-extralight'>Motion Design</li>
                              </ul>

                              <ul className='mb-10 '>
                                <h3 className='text-2xl mb-5'>Learn By Experience</h3>
                                  <li className='font-extralight'>Instructional Design</li>
                                  <li className='font-extralight'>Learning Software Design</li>
                                  <li className='font-extralight'>Education Service Design</li>
                                  <li className='font-extralight'>School Brand Design</li>
                                  <li className='font-extralight'>School Website Design</li>
                                  <li className='font-extralight'>School Marketing Services</li>
                              </ul>

                              <ul className='mb-10 '>
                                <h3 className='text-2xl mb-5'>Strategy By Experience</h3>
                                  <li className='font-extralight'>Business Transformation</li>
                                  <li className='font-extralight'>Digital Transformation</li>
                                  <li className='font-extralight'>Proposition Design</li>
                                  <li className='font-extralight'>New Product Development</li>
                                  <li className='font-extralight'>Service Design</li>
                              </ul>

                              <ul className='mb-10 '>
                                <h3 className='text-2xl mb-5'>On-Demand By Experience</h3>
                                  <li className='font-extralight'>Creative & Art Direction</li>
                                  <li className='font-extralight'>Design Leadership</li>
                                  <li className='font-extralight'>Business Transformation</li>
                                  <li className='font-extralight'>Design Consultancy</li>
                                  <li className='font-extralight'>Strategic Design</li>
                                  <li className='font-extralight'>Design Project Support</li>
                                  <li className='font-extralight'>Production Design</li>
                              </ul>
               </div>

               <div className='w-[65%] lg:flex lg:items-start lg:justify-between mx-auto mt-20'>
                    <div className='w-full lg:w-[25%] my-10'>
                        <h3 className='mb-3'>© By Experience Ltd, 2020. </h3>
                        <p className='font-extralight'>All Rights Reserved | Company registered in England & Wales number: 11469161</p>
                    </div>

                    <div className='lg:text-right w-full lg:w-[25%]'>
                        <h3 className=''>Registered Office:</h3>
                        <address className='font-extralight my-3'>
                              Guardian House, 42 Preston New Road, Blackburn, England, BB2 6AH
                        </address>
                        <p>lan@byxp.co.uk</p>
                    </div>
               </div>
    </div>
  )
}

export default Footer