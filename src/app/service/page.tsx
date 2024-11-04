// pages/services.js
import React from 'react';

export default function Services() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Services We Offer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Service Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Web Design & Development</h2>
          <p>A website is an extension of yourself and we can help you to express it properly.</p>
        </div>
  
     {/* Service Card - Mobile App Development */}
     <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Mobile App Development</h2>
          <p>We build stunning and functional mobile apps for iOS and Android.</p>
        </div>
        {/* Service Card - Software Testing */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Software Testing</h2>
          <p>We ensure the quality and reliability of your software with rigorous testing.</p>
        </div>
        {/* Service Card - Software Development */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Software Development</h2>
          <p>We build custom software solutions tailored to your specific needs.</p>
        </div>
          {/* Service Card - Cloud Solutions */}
          <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Cloud Solutions</h2>
          <p>We leverage cloud technology to provide scalable and reliable solutions.</p>
        </div>

        {/* Service Card - Cybersecurity */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Cybersecurity</h2>
          <p>We protect your digital assets with advanced security solutions.</p>
        </div>

        {/* Service Card - Data Science */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Data Science</h2>
          <p>We unlock the power of data to drive business insights and innovation.</p>
        </div>
      </div>
    </div>
  )
}





// // pages/services.js
// import dynamic from 'next/dynamic';
// import React from 'react';

// // Dynamically import Swiper with SSR disabled
// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });
// import { Navigation } from 'swiper'; // Import Navigation module from Swiper
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import 'swiper/css/navigation'; // Import Navigation module styles

// export default function Services() {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Services We Offer</h1>
//       <Swiper
//         modules={[Navigation]} // Add Navigation module
//         spaceBetween={20} // Space between slides
//         slidesPerView={1} // Number of slides to show at once
//         navigation // Enable navigation arrows
//         breakpoints={{
//           640: {
//             slidesPerView: 1, // 1 slide on small screens
//             spaceBetween: 10, // Less space between slides on small screens
//           },
//           768: {
//             slidesPerView: 2, // 2 slides on medium screens
//             spaceBetween: 20, // Space between slides
//           },
//           1024: {
//             slidesPerView: 3, // 3 slides on large screens
//             spaceBetween: 20, // Space between slides
//           },
//           1280: {
//             slidesPerView: 4, // 4 slides on extra-large screens
//             spaceBetween: 20, // Space between slides
//           },
//         }}
//       >
//         {/* Service Card - Web Design & Development */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Web Design & Development</h2>
//             <p>A website is an extension of yourself and we can help you to express it properly.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Mobile App Development */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Mobile App Development</h2>
//             <p>We build stunning and functional mobile apps for iOS and Android.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Software Testing */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Software Testing</h2>
//             <p>We ensure the quality and reliability of your software with rigorous testing.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Software Development */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Software Development</h2>
//             <p>We build custom software solutions tailored to your specific needs.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Cloud Solutions */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Cloud Solutions</h2>
//             <p>We leverage cloud technology to provide scalable and reliable solutions.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Cybersecurity */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Cybersecurity</h2>
//             <p>We protect your digital assets with advanced security solutions.</p>
//           </div>
//         </SwiperSlide>

//         {/* Service Card - Data Science */}
//         <SwiperSlide>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-lg font-bold mb-2">Data Science</h2>
//             <p>We unlock the power of data to drive business insights and innovation.</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }