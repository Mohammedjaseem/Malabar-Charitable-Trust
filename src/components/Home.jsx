import React from 'react'

const Home = () => {
  return (
    <section id="home" className="bg-white h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        <img src='https://mdcrc.edu.in/upload/about-title-bg.jpg' alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Malabar Academic City</h1>
          <span className="text-white text-center">Run by <br/> <span className="text-rose-400 font-bold">Malabar Educational Charitable Trust</span></span>
        </div>
      </div>
    </section>
  )
}

export default Home
