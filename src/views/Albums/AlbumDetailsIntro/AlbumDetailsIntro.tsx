'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FaShare, FaSpotify } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';
import {
  AlbumDetailsIntroCoverSkeleton,
  AlbumDetailsIntroInformationSkeleton,
  AlbumDetailsIntroNameSkeleton,
} from '@/views/Albums/AlbumDetailsIntro/AlbumDetailsIntro.skeleton';

const AlbumDetailsIntro = (props: AlbumDetailsTypes) => {
  const {
    albumData,
    backgroundImage,
    isLoading,
    release_date: releaseDate,
  } = props;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this album: ${albumData?.name}`,
        text: `I'm listening to ${albumData?.name} by Radiohead. Check it out!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="grid grid-cols-2  h-[calc(100vh-96px)]">
      <div className="flex flex-col justify-center gap-4 items-center bg-black py-5">
        {isLoading ? (
          <AlbumDetailsIntroCoverSkeleton />
        ) : (
          albumData?.images?.[0].url && (
            <Image
              className="border-8 border-inRainbows-green border-solid"
              src={albumData.images[0].url}
              alt={`${albumData.name} album cover`}
              width={400}
              height={400}
            />
          )
        )}
        <Button className="text-white text-lg underline" variant="link">
          <Link href="#track-list">Track list</Link>
        </Button>
      </div>
      <div
        className="relative flex flex-col justify-center items-center  bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="flex flex-col items-center gap-2 font-archivo px-10">
          {isLoading ? (
            <AlbumDetailsIntroNameSkeleton />
          ) : (
            <h1 className="text-5xl font-bold bg-inRainbows-yellow z-10 font-archivo-black text-center">
              {albumData?.name}
            </h1>
          )}
          {isLoading ? (
            <AlbumDetailsIntroInformationSkeleton />
          ) : (
            <div className="flex flex-col items-left">
              <p className="bg-inRainbows-yellow z-10 px-1 capitalize">
                <span className="font-bold">Album Type:</span>
                {albumData?.album_type}
              </p>
              <p className="bg-inRainbows-yellow z-10 px-1">
                <span className="font-bold">Release Date:</span>
                {releaseDate}
              </p>
              <p className="bg-inRainbows-yellow z-10 px-1">
                <span className="font-bold">Label:</span>
                {albumData?.label}
              </p>
              <p className="bg-inRainbows-yellow z-10 px-1">
                <span className="font-bold">Total Tracks:</span>
                {albumData?.total_tracks}
              </p>
            </div>
          )}
        </div>
        <div className="flex z-20 font-archivo mt-6 gap-4">
          <Button
            className="bg-inRainbows-blue hover:bg-blue-500 flex gap-1 text-black"
            variant="default"
            onClick={handleShare}
          >
            <FaShare />
            Share
          </Button>
          <Button
            className="bg-inRainbows-green hover:bg-green-600 flex gap-1 text-black"
            variant="default"
          >
            <Link
              className="flex items-center gap-2"
              target="_blank"
              href={albumData?.external_urls?.spotify || ''}
            >
              <FaSpotify />
              Listen
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsIntro;
