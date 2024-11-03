import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from "react";
// ...

function Footer() {
  return (
    <div className="flex justify-center mt-4"> {/* Center the icons horizontally */}
      <Link href="https://www.facebook.com" className="social-icon mr-4"> {/* Add spacing between icons */}
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Link>
      <Link href="https://www.twitter.com" className="social-icon mr-4">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </Link>
      <Link href="https://www.instagram.com" className="social-icon mr-4">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </Link>
      <Link href="https://www.linkedin.com" className="social-icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
}

export default Footer;