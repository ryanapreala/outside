import React from 'react';
import Hero from '../components/Hero';
import { ComplexNavbar } from '../components/ComplexNavbar';


const data = [
  {
    category: "Happening This Week",
    listings: [
      {
        title: "Gorilla Trekking in Volcanoes National Park",
        description: "Embark on an unforgettable adventure through the lush rainforests of Volcanoes National Park and encounter the majestic mountain gorillas in their natural habitat.",
        imageUrl: "/image1.jpg",
      },
      {
        title: "Kigali's Vibrant Bar Scene",
        description: "Immerse yourself in Kigali's electrifying nightlife, exploring trendy bars, live music venues, and rooftop lounges that offer stunning city views.",
        imageUrl: "/image2.jpg",
      },
      {
        title: "Culinary Delights Await",
        description: "Savor the flavors of Rwanda's culinary scene, from traditional Rwandan cuisine to international fine dining experiences.",
        imageUrl: "/image3.jpg",
      },
      {
        title: "Experience Rwanda's Artistic Expressions",
        description: "Explore Rwanda's vibrant arts scene, visiting galleries, attending cultural performances, and discovering local artisans' creations.",
        imageUrl: "/image4.jpg",
      },
    ],
  },
  {
    category: "Nightlife",
    listings: [
      {
        title: "Discover Kigali's Vibrant Bar Scene",
        description: "Immerse yourself in Kigali's electrifying nightlife, exploring trendy bars, live music venues, and rooftop lounges that offer stunning city views.",
        imageUrl: "/image2.jpg",
      },
      {
        title: "Live Music Experiences",
        description: "Catch a live performance at one of Kigali's many music venues, showcasing local and international artists.",
        imageUrl: "/image5.jpg",
      },
      {
        title: "Rooftop Bars with City Views",
        description: "Unwind with a drink and enjoy panoramic city views from one of Kigali's rooftop bars.",
        imageUrl: "/image6.jpg",
      },
    ],
  },
];

const ListingBlock = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorized Listings</h2>

      {data.map((category) => {
        return (
          <div key={category.category}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>

            <div className="grid grid-cols-4 gap-4">
              {category.listings.slice(0, 4).map((listing) => (
                <div key={listing.title} className="rounded-lg shadow-md">
                  <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 object-cover rounded-top" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{listing.title}</h4>
                    <p className="text-gray-600 mb-4">{listing.description}</p>
                    <a href="#" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">View More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};



const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <ComplexNavbar />
      </div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 mr-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Outside in Rwanda - Your adventure awaits!</h2>

              <p className="text-gray-600 mb-4">
                We're on a mission to showcase and promote Rwanda's rich art, culture, and design heritage, while also providing tourists with a seamless booking experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For tourists:</h3>

              <p className="text-gray-600 mb-4">
                Discover the land of a thousand hills like never before with Outside In Rwanda. We offer a variety of unique art, culture, and design experiences. Book your next adventure today and create memories that will last a lifetime.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For listing hosts:</h3>

              <p className="text-gray-600 mb-4">
                Get more visibility for your experiences and seamless bookings with a variety of payment options. We're here to help you share Rwanda's beauty with the world. List your experience today!
              </p>

              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">List an Experience</button>
            </div>

            <div className="flex-shrink-0">
              <img src="/image.jpg" alt="Image" className="w-48 h-48 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Content Block End */}

      <ListingBlock />

    
    </div>
  );
  }
  export default HomePage;