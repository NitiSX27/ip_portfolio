import React from 'react'

const Project = () => {
  return (
    <div id='projects'>
      <div className='bg-indigo-800 m-10 lg:m-20 max-w-full'>
        <div className='grid justify-items-center m-5 lg:m-10'>
            <h1 className='text-white mt-10 text-3xl'>Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className='p-5 lg:p-10'>
          {/* Use responsive grid for better layout on smaller devices */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            
            {/* Project Card 1 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className="md:flex">
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Electricity Billing Management System
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">Java Project</a>
                  <p className="mt-2 text-slate-500">
                    Designed and implemented an online billing system for both customers and administrators, streamlining the billing
                    process and enhancing user experience.Utilized skills in Java, Netbeans, Java Swing, MongoDB, and SQL to develop the system, resulting in a 30% increase in
                    billing efficiency and a 20% reduction in manual errors.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src="./img3.jpg" alt="Project1" className='w-32 h-32 object-cover' />
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className="md:flex">
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Diabetic Prediction System
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">Python, Google Colab, PyCharm Project</a>
                  <p className="mt-2 text-slate-500">
                  Developed and deployed a machine learning application to predict diabetes with an accuracy of 85%,utilizing a dataset of
                  2,000+ medical records.Implemented data processing and analysis using Pandas and NumPy, and machine learning models with Scikit-learn;
                  created an interactive user interface with Streamlit for real-time predictions.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src="./img4.png" alt="Project1" className='w-32 h-32 object-cover' />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-300" />

          {/* Another row for more projects */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            
            {/* Project Card 3 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className="md:flex">
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Heart Attack Prediction System
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">Python, google colab Project</a>
                  <p className="mt-2 text-slate-500">
                    Developed and deployed a machine learning application to predict the likelihood of heart attacks, achieving an accuracy
                    rate of 80%.Implemented the RandomForest Regression model, improving prediction accuracy by 20% compared to baseline models.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src="./img6.png" alt="Project1" className='w-32 h-32 object-cover' />
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className="md:flex">
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Movie Search webapp
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">Reactjs,API Project</a>
                  <p className="mt-2 text-slate-500">
                    Created a webapp that provide information about movies using third party API from TMDB.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src="./img5.jpg" alt="Project1" className='w-32 h-32 object-cover' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
