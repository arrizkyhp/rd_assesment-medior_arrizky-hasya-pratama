'use client';

import Link from 'next/link';

import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';

const SocialMediaView = () => (
  <section
    className="relative flex flex-col items-center justify-center bg-inRainbows-red py-8"
    id="follow"
  >
    <div className="absolute inset-0 bg-radiohead-2 bg-cover bg-center opacity-50 pointer-events-none" />
    <div className="flex gap-10">
      <div className="bg-inRainbows-yellow hover:bg-yellow-500 relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          target="_blank"
          href="https://www.tiktok.com/@radiohead"
        >
          <FaTiktok />
        </Link>
      </div>
      <div className="bg-inRainbows-blue hover:bg-blue-600 relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          target="_blank"
          href="https://www.facebook.com/radiohead/"
        >
          <FaFacebook />
        </Link>
      </div>
      <div className="bg-inRainbows-orange hover:bg-orange-600 relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          target="_blank"
          href="https://www.instagram.com/radiohead/"
        >
          <FaInstagram />
        </Link>
      </div>
      <div className="bg-inRainbows-green hover:bg-green-600 relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          target="_blank"
          href="https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
        >
          <FaSpotify />
        </Link>
      </div>
      <div className="bg-inRainbows-red hover:bg-red-600 relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          target="_blank"
          href="https://www.youtube.com/radiohead"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  </section>
);

export default SocialMediaView;
