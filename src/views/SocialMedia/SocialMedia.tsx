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
      <div className="bg-inRainbows-yellow relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          href="https://www.facebook.com/radiohead/"
        >
          <FaTiktok />
        </Link>
      </div>
      <div className="bg-inRainbows-blue relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          href="https://www.facebook.com/radiohead/"
        >
          <FaFacebook />
        </Link>
      </div>
      <div className="bg-inRainbows-orange relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          href="https://www.facebook.com/radiohead/"
        >
          <FaInstagram />
        </Link>
      </div>
      <div className="bg-inRainbows-green relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          href="https://www.facebook.com/radiohead/"
        >
          <FaSpotify />
        </Link>
      </div>
      <div className="bg-inRainbows-red relative rounded-full px-2 py-2">
        <Link
          className=" z-20 text-4xl"
          href="https://www.facebook.com/radiohead/"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  </section>
);

export default SocialMediaView;
