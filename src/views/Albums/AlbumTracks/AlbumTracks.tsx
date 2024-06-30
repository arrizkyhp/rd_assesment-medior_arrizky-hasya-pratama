'use client';

import { FaPlay } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';
import AlbumTracksSkeleton from '@/views/Albums/AlbumTracks/AlbumTracksSkeleton';

const AlbumTracks = (props: AlbumDetailsTypes) => {
  const { albumData, isLoading } = props;

  const formatDuration = (durationMs: string) => {
    const minutes = Math.floor(Number(durationMs) / 60000);
    const seconds = ((Number(durationMs) % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className="flex bg-radiohead-3 bg-cover bg-center items-center pt-24 pb-32 flex-col min-h-[calc(100vh-96px)] font-archivo px-10">
      <h1 className="text-4xl font-archivo-black text-white mb-10">
        Track List
      </h1>
      <ol className="w-full flex flex-col gap-2 max-w-[600px]">
        {isLoading ? (
          <AlbumTracksSkeleton />
        ) : (
          albumData?.tracks?.items.map((track, index) => (
            <li
              key={track.id}
              className="flex font-archivo-black text-white border-b border-solid border-white  p-2 justify-between"
            >
              <div className="flex gap-2 items-center">
                <Button
                  className="bg-transparent hover:bg-inRainbows-green"
                  size="sm"
                >
                  <FaPlay />
                </Button>
                <span>{index + 1}.</span>
                <span>{track.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatDuration(track.duration_ms)}</span>

                <Button
                  className="bg-transparent hover:bg-inRainbows-blue"
                  size="sm"
                  variant="default"
                >
                  Share
                </Button>
              </div>
            </li>
          ))
        )}
      </ol>
    </section>
  );
};

export default AlbumTracks;
