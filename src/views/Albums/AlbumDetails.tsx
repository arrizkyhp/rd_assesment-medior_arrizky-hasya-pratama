'use client';

import useAlbumDetails from '@/views/Albums/AlbumDetails.hooks';
import AlbumDetailsIntro from '@/views/Albums/AlbumDetailsIntro';
import AlbumOthers from '@/views/Albums/AlbumOthers';
import AlbumTracks from '@/views/Albums/AlbumTracks';
import NewsletterView from '@/views/Albums/Newsletter';

const AlbumDetailView = () => {
  const {
    backgroundImageUrl,
    data,
    formattedReleaseDate,
    isLoading,
    isLoadingOtherAlbum,
    randomAlbums,
  } = useAlbumDetails();

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
      <AlbumOthers
        randomAlbums={randomAlbums}
        isLoading={isLoadingOtherAlbum}
      />
      <NewsletterView />
    </>
  );
};

export default AlbumDetailView;
