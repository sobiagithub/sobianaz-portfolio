import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import pic from "../../public/2791.jpg"

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/ #)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
        <Navbar />
        <div className='container grid lg:grid-cols-1 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[80px]  leading-tight flex justify-center items center'>
            <div>
              <p>I am</p>
              <p>Sobia a web Developer and a UI/UX Designer</p>
              
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <Image
                                        className="object-cover object-center rounded mx-auto w-[450px] h-[350px]"
                                        alt="hero"
                                        src={require("../../public/2791.jpg")}
                                        width={100}
                                        height={100}
                                    />
                                </div>
            
          </div>
        </div>

    </div>
  )
}

export default Hero