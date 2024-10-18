import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-3xl font-semibold mb-10 text-indigo-800">My Skills</h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skill 1 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/html.svg" alt="HTML" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">HTML</h3>
          </div>
          
          {/* Skill 2 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/css.svg" alt="CSS" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">CSS</h3>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/js.svg" alt="JavaScript" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">JavaScript</h3>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/react.svg" alt="React" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">React</h3>
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/node.svg" alt="Node" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">Node.js</h3>
          </div>

          {/* Skill 6 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/mongodb.svg" alt="MongoDB" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">MongoDB</h3>
          </div>

          {/* Skill 7 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/bi.svg" alt="PowerBi" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">Power BI</h3>
          </div>

          {/* Skill 8 */}
          <div className="flex flex-col items-center p-5 border border-gray-200 bg-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src="/boot.svg" alt="Spring Boot" className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold text-indigo-800">Spring Boot/MVC</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
