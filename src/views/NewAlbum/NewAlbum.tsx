'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FaSpotify } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import useGetData from '@/hooks/useGetData';

const NewAlbumView = () => {
  const { data, isLoading } = useGetData<{
    name: string;
    images: Array<{ url: string }>;
    external_urls: { spotify: string };
  }>('artist', 'albums/5vkqYmiPBYLaalcmjujWxK');

  return (
    <section
      className="relative flex items-center bg-black justify-center gap-20 h-[calc(100vh-96px)] "
      id="newest-album"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover transform -translate-x-1/4"
        src="/vid/bg_vid.mp4?ignore=true"
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black to-transparent" />
      <div className="relative z-10">
        <div className="border-b-2 border-solid border-white mb-3">
          <h1 className="text-white text-4xl uppercase font-archivo-black mb-4">
            {isLoading ? (
              <div className="w-[300px] h-[40px] bg-amber-50" />
            ) : (
              data?.name
            )}
          </h1>
        </div>
        <p className="text-white uppercase font-archivo mb-2">Available now</p>
        {isLoading ? (
          <p>wait</p>
        ) : (
          <Button
            className="bg-inRainbows-green text-black hover:bg-green-700 hover:text-black"
            variant="default"
          >
            <Link
              className="flex items-center gap-2"
              href={data?.external_urls?.spotify || ''}
            >
              <FaSpotify className="text-lg" />
              Stream on Spotify
            </Link>
          </Button>
        )}
      </div>
      {isLoading ? (
        <div className=" w-[400px] h-[400px] bg-amber-50" />
      ) : (
        <Image
          className="border-4 border-white border-solid relative z-10"
          src={data?.images[0].url || ''}
          alt="in rainbows album cover"
          width={400}
          height={400}
        />
      )}
    </section>
  );
};

export default NewAlbumView;
