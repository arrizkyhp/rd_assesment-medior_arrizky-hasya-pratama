'use client';

import useAlbumDetails from '@/views/Albums/AlbumDetails.hooks';
import AlbumDetailsIntro from '@/views/Albums/AlbumDetailsIntro';
import AlbumTracks from '@/views/Albums/AlbumTracks';

const AlbumDetailView = () => {
  const { backgroundImageUrl, data, formattedReleaseDate, isLoading } =
    useAlbumDetails();

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
