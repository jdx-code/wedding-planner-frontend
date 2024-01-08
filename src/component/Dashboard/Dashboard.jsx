import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Plan Your Dream Wedding with Us</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam non justo dapibus accumsan.</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-md animate-fade-in">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Full Wedding Planning</h2>
            <p className="text-gray-600">Our expert planners will take care of every detail, ensuring your wedding day is perfect from start to finish.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Partial Planning</h2>
            <p className="text-gray-600">If you've already started planning but need assistance with specific aspects, our partial planning service is perfect for you.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Day-of Coordination</h2>
            <p className="text-gray-600">Relax and enjoy your special day while our team takes care of the logistics and ensures everything runs smoothly.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/images/image1.jpg" alt="Wedding 1" className="w-full h-full object-cover rounded-md shadow-md" />
            <img src="/images/image2.jpg" alt="Wedding 2" className="w-full h-full object-cover rounded-md shadow-md" />
            <img src="/images/image3.jpg" alt="Wedding 3" className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Wedding Planner</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
