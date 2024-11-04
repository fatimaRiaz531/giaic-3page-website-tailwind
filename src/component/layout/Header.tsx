// import { Menu } from "lucide-react";
// import React from 'react';
// import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "../ui/sheet";

// export default function Header() {
//   return (
//     <header className="bg-white text-black py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h4 className="text-2xl italic">gk Developer</h4>

//         {/* Nav buttons */}
//         <nav className="hidden md:flex space-x-4">
//           <Link href="/about">About us</Link>
//           <Link href="/service">Service</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         {/* Hire Me Button */}
//         <Link href="/">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Hire Me
//           </button>
//         </Link>

//         {/* Mobile Menu */}
//         <Sheet>
//           <SheetTrigger className="md:hidden">
//             <Menu />
//           </SheetTrigger>
//           <SheetContent className="flex flex-col items-center">
//             <ul className="space-y-4">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about">About us</Link>
//               </li>
//               <li>
//                 <Link href="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link href="/contact">Services</Link>
//               </li>
//             </ul>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }



"use client"
import { Menu } from "lucide-react";
import React, { useState } from 'react';
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev); // Toggle menu visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <header className="bg-white text-black py-4">
      <div className="text-container mt-0 mx-auto flex justify-between items-center">
    
      {/* <div className="container mx-auto flex justify-between items-center"> */}
        {/* Logo */}
        <h4 className="text-2xl italic">gk Developer</h4>

        {/* Nav buttons for larger screens */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/about">About us</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hire Me Button */}
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hire Me
          </button>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden" onClick={handleMenuToggle}>
            <Menu />
          </SheetTrigger>
          <SheetContent className={`flex flex-col items-center bg-black text-white ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="space-y-4">
              <li>
                <Link href="/" onClick={handleLinkClick}>HireMe</Link>
              </li>
              <li>
                <Link href="/about" onClick={handleLinkClick}>About us</Link>
              </li>
              <li>
                <Link href="/service" onClick={handleLinkClick}>Services</Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}