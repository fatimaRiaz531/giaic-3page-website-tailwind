'use client'
// components/layout/Footer.js
// import Link from 'next/link';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  LinkedinShareButton, 
  LinkedinIcon, 
  WhatsappShareButton, 
  WhatsappIcon 
} from 'next-share';
import React from "react";

const HomePage = () => {
  const shareUrl = 'http://localhost:3000'; // URL to share
  const title = 'Check out this amazing content!'; // Title for sharing

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>Share this content on social media!</p>
      
      {/* Facebook Share Button */}
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default HomePage;