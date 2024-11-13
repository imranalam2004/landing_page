import React from 'react';

function ProjectPage() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 bg-sky-700">
        <div className="text-4xl font-bold">bluelearn</div>
        <div className="space-x-6">
          <button className="text-white hover:text-blue-900">Hire talent</button>
          <button className="text-white hover:text-blue-900">Find work</button>
          <button className="text-white hover:text-blue-900">Projects</button>
          <button className="text-white hover:text-blue-900">Community</button>
          <button className="text-white hover:text-blue-900">Events</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="items-center my-24 px-10 py-16">
        <div className="flex items-center mx-60 space-x-8">
          {/* Text Content on the Left */}
          <div className="text-left max-w-lg">
            <h1 className="text-5xl font-bold mb-4">Build a work portfolio that gets you hired</h1>
            <p className="text-lg mb-8">
              Gain experience and stand out by upskilling with real-world projects
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Sign up
              </button>
              <button className="text-blue-600 hover:text-blue-700">
                Explore projects
              </button>
            </div>
          </div>

          {/* Image on the Right */}
          <div className="flex-shrink-0">
            <img
              src="https://www.21kschool.com/lk/wp-content/uploads/sites/24/2023/07/Coding.png"
              alt="Project preview"
              className="h-64 rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
