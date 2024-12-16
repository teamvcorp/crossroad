// components/ImageGallery.tsx

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface GalleryImage {
  src: string;
  title: string;
}

const images: GalleryImage[] = [
  {
    src: '/gallery/img2.jpg',
    title: 'Little Guys !',
  },
  {
    src: '/gallery/img3.jpg',
    title: 'Black Belt Test',
  },
  {
    src: '/gallery/img4.jpg',
    title: 'Lily V Yellow belt Test',
  },
  {
    src: '/gallery/img5.jpg',
    title: 'Random Kids on a Saturday!',
  },
  {
    src: '/gallery/img6.jpg',
    title: 'Somewhere in Virginia',
  },
  {
    src: '/gallery/img7.jpg',
    title: 'Almost our First !',
  },
  {
    src: '/gallery/img8.jpg',
    title: 'More Lily Friends',
  },
  {
    src: '/gallery/img9.jpg',
    title: 'My Junior Olympics Sweater!',
  },
  {
    src: '/gallery/img11.jpg',
    title: 'Yellow Belt Test',
  },
  {
    src: '/gallery/img12.jpg',
    title: 'Emma Training?',
  },
  {
    src: '/gallery/img13.jpg',
    title: 'Emma Yellow Belt',
  },
  {
    src: '/gallery/img14.jpg',
    title: 'Ian Yellow Test?!',
  },
  {
    src: '/gallery/img15.jpg',
    title: 'Emma Training, Again?',
  },
  {
    src: '/gallery/img16.jpg',
    title: 'Chloe you got This!',
  },
  {
    src: '/gallery/img17.jpg',
    title: 'Only Aurelia Student, after class !',
  },
  {
    src: '/gallery/img18.jpg',
    title: 'Before Class',
  },
  // Add more images as needed
];

const ImageGallery: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([0, 1, 2, 3, 4]);

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
      className="p-2 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
    >
      <div className="relative w-[250px] h-[200px]">
        <Image
          src={images[index].src}
          alt={images[index].title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  ))}
</div>

  );
};

export default ImageGallery;
