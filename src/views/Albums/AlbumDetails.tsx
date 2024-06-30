'use client';

import { useParams } from 'next/navigation';

import useGetData from '@/hooks/useGetData';
import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';
import AlbumDetailsIntro from '@/views/Albums/AlbumDetailsIntro';
import AlbumTracks from '@/views/Albums/AlbumTracks';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const AlbumDetailView = () => {
  const params = useParams<{ id: string }>();

  const { id } = params;

  const { data, isLoading } = useGetData<AlbumDetailsTypes>(
    'albums-detail',
    `albums/${id}`,
  );

  const formattedReleaseDate = data?.release_date
    ? formatDate(data.release_date)
    : 'Unknown';
  const backgroundImageUrl = data?.images?.[0]?.url || '';

  return (
    <>
      <AlbumDetailsIntro
        albumData={data}
        backgroundImage={backgroundImageUrl}
        isLoading={isLoading}
        release_date={formattedReleaseDate}
      />
      <AlbumTracks
        albumData={data}
        backgroundImage={backgroundImageUrl}
        isLoading={isLoading}
      />
    </>
  );
};

export default AlbumDetailView;
