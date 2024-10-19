import React from 'react'

const Intro = () => {
  return (
    <section className='flex justify-around items-center space-x-10 p-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-slate-300 text-4xl mb-5'>I'm</p>
            <h1 className='text-6xl'>Nitish Bhosle</h1>
            <hr />
            <p className='mt-10 text-xl font-sans text-slate-300'>
            Hi! I’m a BTech student in Information Technology at VESIT College of Engineering. I have a passion for web development, data science, and machine learning, always eager to solve real-world problems through innovative tech solutions. Let's collaborate and create something impactful!


            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-full  border-8 border-whitel w-1/3 items-center ssm:w-fit">
            <img src="./img2.jpeg" alt="Your image" class="w-full h-full object-cover" />
        </div>
        <div className="w-1/3 sm:w-fit">  
            <p className="text-xl mb-4">About Me</p>  
            <p className="text-slate-300">  
                Let's build quality in programming and design with our services  
            </p>  
            <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">  
                Show More...  
            </button>  
            <div className='flex mt-5 space-x-4 cursor-pointer'> 
                <div className='border-4 border-white hover:border-indigo-800 rounded-full p-2'>
                    <a href="https://www.instagram.com/nitish_27_11/profilecard/?igsh=MXZnbjdibnZ0bTl5dQ=="><img src="./insta.svg" alt="Instagram" className='w-9 h-9 rounded-full'/></a>
                </div>
                <div className='border-4 border-white hover:border-indigo-800 rounded-full p-2'>
                    <a href="https://github.com/NitiSX27"><img src="./git.svg" alt="GitHub" className='w-9 h-9 rounded-full'/></a>
                </div>
                <div className='border-4 border-white hover:border-indigo-800 rounded-full p-2'>
                    <a href="https://www.linkedin.com/in/nitish-bhosle11/"><img src="./link.svg" alt="LinkedIn" className='w-9 h-9 rounded-full'/></a>
                </div>
            </div> 
        </div>  
    </section>
  )
}

export default Intro
