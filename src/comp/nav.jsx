import React from 'react';

function WhyDoProjects() {
  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Why do projects?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <div className="text-purple-600 mb-4">
              {/* Icon */}
            <img className='w-20' src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=" alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Become job ready</h3>
            <p className="text-center text-gray-600">
              Kickstart your career by building stellar proof of work
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <div className="text-green-600 mb-4">
              {/* Icon */}
              <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/751/751355.png" alt="" />
              
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn by doing</h3>
            <p className="text-center text-gray-600">
              Upskill by building hands-on projects with stepwise guidance
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <div className="text-yellow-600 mb-4">
              {/* Icon */}
              <img className='w-20' src="https://cdn-icons-png.flaticon.com/512/6165/6165577.png" alt="" />
              
            </div>
            <h3 className="text-xl font-semibold mb-2">Get feedback</h3>
            <p className="text-center text-gray-600">
              Grow with the community and get feedback from mentors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDoProjects;
