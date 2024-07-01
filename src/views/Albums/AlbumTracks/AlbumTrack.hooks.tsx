import { useState } from 'react';
import Image from 'next/image';

import toast from 'react-hot-toast';
import { FaPause } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';

const useAlbumTrack = (props: AlbumDetailsTypes) => {
  const { albumData, backgroundImage } = props;

  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [toastId, setToastId] = useState<string | null>(null);

  const formatDuration = (durationMs: string) => {
    const minutes = Math.floor(Number(durationMs) / 60000);
    const seconds = ((Number(durationMs) % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  const handleShare = (trackName: string, trackUrl: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this track: ${trackName}`,
        text: `I'm listening to ${trackName} by Radiohead. Check it out!`,
        url: trackUrl,
      });
    }
  };

  const handlePlayPause = (trackId: string) => {
    if (currentTrackId === trackId) {
      setCurrentTrackId(null);
      if (toastId) {
        toast.dismiss(toastId);
        setToastId(null);
      }
    } else {
      setCurrentTrackId(trackId);
      if (toastId) {
        toast.dismiss(toastId);
      }
      const id = toast.custom(
        (t) => (
          <div
            className={`flex items-center gap-4 p-3 bg-neutral-300 shadow-md rounded ${t.visible ? 'animate-enter' : 'animate-leave'}`}
          >
            <Button
              className="bg-transparent border-2 h-10 w-10 border-solid border-black rounded-full"
              size="sm"
              onClick={() => {
                setCurrentTrackId(null);
                toast.dismiss(t.id);
                setToastId(null);
              }}
            >
              <FaPause className="text-black" />
            </Button>
            <Image
              src={backgroundImage || ''}
              alt="album cover"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-semibold font-archivo">
                {
                  albumData?.tracks?.items.find((track) => track.id === trackId)
                    ?.name
                }
              </span>
              <span className="font-semibold text-sm">Radiohead</span>
            </div>
          </div>
        ),
        {
          id: trackId,
          duration: Infinity,
          position: 'bottom-right',
        },
      );
      setToastId(id);
    }
  };

  return {
    currentTrackId,
    formatDuration,
    handleShare,
    handlePlayPause,
  };
};

export default useAlbumTrack;
