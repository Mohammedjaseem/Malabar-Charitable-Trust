import React from 'react'
import HeroImg from "../assets/HeroImg.jpeg";

const Home = () => {
  return (
    <section id="home" className="bg-white h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl font-bold text-white">Malabar Academic City</h1>
        </div>
      </div>
    </section>
  )
}

export default Home
