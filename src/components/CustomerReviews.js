import React from 'react';


const data = [
  {
    reviewerImage: '/reviewer1.jpg',
    name: 'Luladey Tukele',
    title: 'Founder & CEO',
    review: '"The go-to curated art, culture, and design recommendation platform for tourists and event hosts."',
  },
  {
    reviewerImage: '/reviewer2.jpg',
    name: 'Clement Iraguha',
    title: 'Kigali Soul',
    review: '"Showcasing my art, culture, and design space on Outside in Rwanda’s platform was a breeze, and the exposure my venue gained was phenomenal, attracting a diverse range of creative events and people; their commitment to promoting local creativity is commendable."',
  },
  {
    reviewerImage: '/reviewer3.jpg',
    name: 'Brighton Mboya',
    title: 'Domestic Tourist',
    review: '"Outside in Rwanda is my trusted guide for exploring the country’s art, culture, and design scenes, introducing me to hidden gems and authentic experiences that have enriched my appreciation for creativity."',
  },
  {
    reviewerImage: '/reviewer4.jpg',
    name: 'Susan Fine',
    title: 'International Tourist',
    review: '"Outside in Rwanda’s curated recommendations effortlessly guided me to immerse myself in Rwanda’s art, culture, and design scene, making my travel experience seamless and memorable."',
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear from our customers</h2>

        <div className="grid grid-cols-2 gap-4">
          {data.map((reviewer, index) => (
            <div key={index} className="rounded-lg bg-white shadow-md p-4">
              <div className="flex items-center mb-4">
                <Image
                  src={reviewer.reviewerImage}
                  alt={reviewer.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{reviewer.name}</h4>
                  <p className="text-gray-600">{reviewer.title}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{reviewer.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
