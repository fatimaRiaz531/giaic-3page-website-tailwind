import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto flex items-center">
      <div className="text-center md:text-left md:mr-10">
        <h1 className="text-5xl font-bold mb-4">
          Great <span className="text-purple-500">Product</span> is
        </h1>
        <h2 className="text-3xl font-bold mb-8">
          built by great <span className="text-purple-500">teams</span>
        </h2>
        <p className="text-lg mb-8">
          We help build and manage a team of world-class developers to bring your vision to life.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Lets get started!
        </button>
      </div>
      <div>
        <Image src="/ts.jpg" alt="Image description" width={400} height={300} />
      </div>
    </div>
  );
}