// components/ImageGallery.tsx

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  location: string;
}

const images: GalleryImage[] = [
  {
    src: '/gallery/img2.jpg',
    title: 'Little Guys !',
    description: 'The first couple weeks of our new school in Virginia. Miss you guys!',
    location: 'Monticello, Virginia',
  },
  {
    src: '/gallery/img3.jpg',
    title: 'Black Belt Test',
    description: 'Students testing for blackbelt in our home school.',
    location: 'Vero Beach, Florida',
  },
  {
    src: '/gallery/img4.jpg',
    title: 'Lily V Yellow belt Test',
    description: 'You have been around kid, do not be scared to show your skill',
    location: 'Palmyra, Virginia',
  },
  {
    src: '/gallery/img5.jpg',
    title: 'Random Kids on a Saturday!',
    description: 'School number 3 or 4 in florida, they all blend together',
    location: 'Vero beach, Florida',
  },
  {
    src: '/gallery/img6.jpg',
    title: 'Somewhere in Virginia',
    description: 'Daughter had some good friends in this picture!',
    location: 'Montecello, Virginia',
  },
  {
    src: '/gallery/img7.jpg',
    title: 'Almost our First !',
    description: 'This building was going to be our first Family hud, sadly it was too old!',
    location: 'Vero beach, Florida',
  },
  {
    src: '/gallery/img8.jpg',
    title: 'More Lily Friends',
    description: 'These guys were a pleasure to teach!',
    location: 'Monticello, Virginia',
  },
  {
    src: '/gallery/img9.jpg',
    title: 'My Junior Olympics Sweater!',
    description: 'Yeah, Umm Do not ask, these pictures are placeholders !',
    location: 'Vero beach, Florida',
  },
  {
    src: '/gallery/img11.jpg',
    title: 'Yellow Belt Test',
    description: 'HUmble begining here in storm lake, but Growing GO team!',
    location: 'Storm Lake, Iowa',
  },
  {
    src: '/gallery/img12.jpg',
    title: 'Emma Training?',
    description: 'Yeah, Umm Do not ask, these pictures are placeholders !',
    location: 'Storm Lake, Iowa',
  },
  {
    src: '/gallery/img13.jpg',
    title: 'Emma Yellow Belt',
    description: 'LOve pictures showing respect!',
    location: 'Storm Lake, Iowa',
  },
  {
    src: '/gallery/img14.jpg',
    title: 'Ian Yellow Test?!',
    description: 'Kids training hard, one day man!',
    location: 'Vero beach, Florida',
  },
  {
    src: '/gallery/img15.jpg',
    title: 'Emma Training, Again?',
    description: 'Yeah, Umm Do not ask, these pictures are placeholders !',
    location: 'Storm Lake Iowa',
  },
  {
    src: '/gallery/img16.jpg',
    title: 'Chloe you got This!',
    description: 'Yeah, Umm Do not ask, these pictures are placeholders !',
    location: 'Storm Lake, Iowa',
  },
  {
    src: '/gallery/img17.jpg',
    title: 'Only Aurelia Student, after class !',
    description: 'Yeah, Umm Do not ask, these pictures are placeholders !',
    location: 'Aurelia, Iowa',
  },
  {
    src: '/gallery/img18.jpg',
    title: 'Before Class',
    description: 'Yeah, building in Aurelia Collapsed, sad face.',
    location: 'Aurelia, Iowa',
  },
  // Add more images as needed
];

const ImageGallery: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) =>
        prev.map((index) => (index + 1) % images.length)
      );
    }, 5000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center space-x-4 overflow-hidden py-8">
      {visibleImages.map((index) => (
        <div
          key={index}
          className="w-1/3 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
        >
          <div className="relative w-full h-60">
            <Image
              src={images[index].src}
              alt={images[index].title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{images[index].title}</h2>
            <p className="text-gray-600">{images[index].description}</p>
            <p className="text-gray-500 italic">{images[index].location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
