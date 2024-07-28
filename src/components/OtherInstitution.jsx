import React from 'react'
import mdcImg from "../assets/mdc.jpg";

const OtherInstitution = () => {
  return (
    <section id="other-institutions" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Institutions</h1>
        
        <div className="mb-8 flex flex-col md:flex-row">

          <div className='mb-8 flex flex-col md:flex-row '>
          <img src={mdcImg} alt="Malabar Dental College" className="w-full md:w-[40%] h-auto object-contain rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
          <div className="md:w-[60%]">
          <h2 className="text-3xl font-semibold text-center mb-4">Malabar Dental College</h2>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Location:</span> Serene location on top of a small hillock, away from the city, but well connected by air, rail, and road, providing the proper calm and quiet atmosphere for the students to do sincere studies.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Academics:</span> Highly trained and qualified faculty members in all the departments to impart proper individual training to make the students become good quality dentists.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">University Results:</span> Pass percentages in recent years were 96-100%. Our student Mrs. Sheenu M.S is the First Rank holder of Calicut University in 2012, and a few students hold the rank in the university every year. From 2010 onwards, the college is approved under Kerala University of Health Sciences.</p>
            <p className="text-gray-7000 mb-4"><span className="text-gray-600 font-semibold">Post Graduation and Research:</span> PG Programmes started in 2016-2017, with 7 branches of MDS Course: 1. Prosthodontics & Crown Bridge 2. Conservative & Endodontic 3. Orthodontics 4. Periodontics 5. Pedodontics 6. Oral Medicine & Radiology 7. Oral & Maxillofacial Pathology.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Support for Students:</span> They are always supported by management and the faculties for overall growth, including discipline, to make them good humans and quality dentists, so that they can become financially independent and take care of their families.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Anti-Ragging Campaign:</span> So far, there has not been a single incident of ragging. A high-powered Anti-Ragging squad and Committee take care to create awareness amongst the students.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Accommodation:</span> There are separate Boys' & Girls' hostels with messing facilities available within the campus with all amenities.</p>
            <p className="text-gray-700 mb-4"><span className="text-gray-600 font-semibold">Extra-Curricular Activities:</span> Management does not believe only in academics but wants the students to grow in all aspects. Sports, outdoor and indoor games, cultural and literary activities take place at regular intervals.</p>
            <a href="https://mdcrc.edu.in/" className="text-rose-400 hover:underline">mdcrc.edu.in</a>
          </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row">
          <div className="md:w-[60%] ">
            <h2 className="text-3xl font-semibold text-center mb-4">Malabar College of Commerce & Sciences</h2>
            <p className="text-gray-700 mb-4">Location: Serene Location on top of small hillock, away from city, but well connected by air, rail and road, provide the proper calm and quite atmosphere for the student to do sincere studies.</p>
            <p className="text-gray-700 mb-4">Academics: Highly trained and qualified faculty members in all the departments to impart proper individual training to make the student to become a good quality dentist.</p>
            <p className="text-gray-700 mb-4">Support for Students: They are always supported by management and the faculties for overall growth including discipline to make them a good human and a quality dentist, so that they can become finically independent and take care of their family.</p>
            <p className="text-gray-700 mb-4">Anti-Ragging Campaign: So far, there was not even a single incident of ragging. A high powered Anti-Ragging squad and Committee take care to create awareness amongst the students.</p>
            <p className="text-gray-700 mb-4">Extra-Curricular Activities: Management does not believe only in academics, but want the students to grow on all aspects. Sports, outdoor and indoor games, cultural and literary activities take place in a regular interval.</p>
            <a href="https://malabarccs.edu.in/" className="text-rose-400 hover:underline">malabarccs.edu.in</a>
          </div>
          <img src="https://malabarccs.edu.in/assets/images/banner/mccs1.png" alt="Malabar College of Commerce & Sciences" className="w-full md:w-[40%] h-auto rounded-lg shadow-md mb-4 md:mb-0 md:ml-4" />
        </div>

        <div className="mb-8 flex flex-col md:flex-row">
          <img src="https://www.malabarcollegeofpharmacy.com/assets/img/about/01.jpg" alt="Malabar Pharmacy College" className="w-full md:w-[40%] h-auto rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
          <div className="md:w-[60%]">
            <h2 className="text-3xl font-semibold text-center mb-4">Malabar Pharmacy College</h2>
            <p className="text-gray-700 mb-4">Malabar Pharmacy College set at stone’s through distance on the bank of river ‘Bharathapuzha’ Near Kuttippuram is a new project of Malabar Educational & Charitable Trust. Located in Chekannur, in the Manoor Chekannur road, Edappal in the district of Malappuram. The college versioned systematic and highly sophisticated learning opportunities to the students who take Pharmaceutical care as their profession. The campus is spread on a landscaped sprawling 25 acres of land, architecture buildings are very attractive and provide a serene atmosphere. It has meticulously planned boarding space with soothing ambience for nurturing and nourishing the elements of value education. It is an intellectually stimulating environment for high quality learning.</p>
            <a href="https://www.malabarcollegeofpharmacy.com/" className="text-rose-400 hover:underline">malabarcollegeofpharmacy.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherInstitution
