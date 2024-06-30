'use client';

import DiscographyView from '@/views/Discography';
import NewAlbumView from '@/views/NewAlbum';
import SocialMediaView from '@/views/SocialMedia';

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <>
      <NewAlbumView />
      <DiscographyView />
      <SocialMediaView />
    </>
  );
}
