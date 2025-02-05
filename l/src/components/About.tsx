import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded mx-auto w-[450px] h-[350px]"
                            alt="hero"
                            src={require("../../public/2791.jpg")}
                            width={300}
                            height={500}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            About Me

                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Hi,I'm sobia farooq ! Afront-end developer skilled in React,Javascript,andmodern frameworks,
                            with hands-on experience in transforming Figma designs into responsive,high-performance websites.
                            I focus on writting clean maintainable code

                        </p>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default About