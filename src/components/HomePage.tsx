/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/events');
      const data = await response.json();
      setEvents(data);
    };
  
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Event Management System</h1>
        <ul className="space-y-4">
          {events.map((event) => (
            <li 
              key={event.id} 
              className="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600">📅 {event.date}</p>
              <p className="text-gray-600">📍 {event.location}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
              {/* Example button if you need it later */}
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
