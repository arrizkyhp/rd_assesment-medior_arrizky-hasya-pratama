'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';
import DiscographySkeleton from '@/views/Discography/Discography.skeleton';

const AlbumOthers = (props: AlbumDetailsTypes) => {
  const { isLoading, randomAlbums } = props;

  return (
    <section
      id="track-list"
      className="flex bg-inRainbows-orange bg-cover bg-center items-center pt-24 pb-32 flex-col min-h-[calc(100vh-96px)] font-archivo px-10"
    >
      <h1 className="text-4xl font-archivo-black text-white mb-10">
        Other Releases
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <DiscographySkeleton />
        ) : (
          randomAlbums?.map((album) => (
            <Link
              key={album.id}
              href={`/album/${album.id}`}
              className="flex flex-col w-[300px] items-center relative group"
            >
              {album.images[0]?.url ? (
                <Image
                  className="border-4 border-white border-solid group-hover:opacity-70 transition duration-500"
                  src={album.images[0].url}
                  alt={`${album.name} album cover`}
                  width={300}
                  height={300}
                />
              ) : (
                <div className="border-4 border-white border-solid w-[400px] h-[400px] bg-gray-200 flex items-center justify-center">
                  No Image Available
                </div>
              )}
              <div className="bg-inRainbows-yellow w-full pt-2 bg-opacity-80 h-[130px] flex flex-col items-start gap-3 justify-end px-3 pb-5 ">
                <span className="text-black text-xl font-semibold font-archivo-black">
                  {album.name}
                </span>
                <div className="border border-solid border-black px-2 py-1 text-md rounded-full group-hover:bg-inRainbows-blue group-hover:text-white transition duration-300">
                  View Album
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default AlbumOthers;
