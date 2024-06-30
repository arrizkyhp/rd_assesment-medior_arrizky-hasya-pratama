'use client';

import Image from 'next/image';
import Link from 'next/link';

import useGetData from '@/hooks/useGetData';
import DiscographySkeleton from '@/views/Discography/Discography.skeleton';

const DiscographyView = () => {
  const { data, isLoading } = useGetData<{
    items: Array<{ id: string; name: string; images: Array<{ url: string }> }>;
  }>('albums', 'artists/4Z8W4fKeB5YxbusRsdQVPb/albums');

  return (
    <section
      className="another-section flex flex-col items-center justify-center bg-inRainbows-red py-16"
      id="discography"
    >
      <h1 className="text-3xl font-bold mb-8 font-archivo">Discography</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <DiscographySkeleton />
        ) : (
          data?.items.map((album) => (
            <Link
              key={album.id}
              href={`/album/${album.id}`}
              className="flex flex-col items-center relative group"
            >
              {album.images[0]?.url ? (
                <Image
                  className="border-4 border-white border-solid"
                  src={album.images[0].url}
                  alt={`${album.name} album cover`}
                  width={250}
                  height={250}
                />
              ) : (
                <div className="border-4 border-white border-solid w-[400px] h-[400px] bg-gray-200 flex items-center justify-center">
                  No Image Available
                </div>
              )}
              <div className="absolute inset-0 bg-inRainbows-yellow bg-opacity-80 flex flex-col items-start gap-3 justify-end opacity-0 px-3 pb-5 group-hover:opacity-100 transition-opacity">
                <span className="text-black text-xl font-semibold font-archivo-black">
                  {album.name}
                </span>
                <div className="border border-solid border-black px-2 py-1 text-md rounded-full">
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

export default DiscographyView;
