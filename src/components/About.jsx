import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-white min-h-screen py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch">
        <div className="md:w-[40%] p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Chairman and Managing Trustee</h2>
          <img src="https://mdcrc.edu.in/upload/chairman.jpg" alt="Chairman" className="w-full h-auto rounded-lg shadow-md " />
          <p className="text-center mt-2 text-xl font-bold">Dr. C P Ali Bava Haji</p>
        </div>
        <div className="md:w-[60%] p-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            By the great vision of its chairman & trust members, the trust now in the flow of conducting various social welfare and charitable programs which are well appreciated and encouraged by state government machinery as well as other human service organizations.
          </p>
          <p className="text-gray-700 mb-4">
            From the deep realization that the best service to the poorer sections is giving them good education, both in primary and higher educational lintel where there is a real lacking of the public service organizations working in recent times. Keeping this in to the top priority agenda Malabar educational charitable trust started an ambitious project which was initialized by starting Malabar Dental College & Research Centre at Mudur, Chekanoor, Edappal, Malappuram District Kerala. Which is started in 2007 under university of Calicut. A common academic block was constructed in 9.74 acre an initial foot step and stone was laid by the most respected religion and social leader Sree Panakkad Syed Shihab Thangal.
          </p>
          <p className="text-gray-700 mb-4">
            From its humble beginning Malabar dental education now grown to its full potential and became one of the best dental institutions in India.
          </p>
          <p className="text-gray-700 mb-4">
            A grand social marriage function was conducted in Malabar dental college campus in which 10 girls from poor families got married and ornaments worth 10 pavan of gold each was distributed by the chairman Malabar education & charitable trust as a gift.
          </p>
          <p className="text-gray-700 mb-4">
            All the humanitarian and charitable and profitless activities made the trust to grow more and more with the charisma of common people's love and support.
          </p>
          <p className="text-gray-700 mb-4">
            The particular project includes the establishment of Ayurvedic Medical College, Dental college, Nursing college, Pharmacy college and other paramedical courses to impart good quality education to weaker sections of the population.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
