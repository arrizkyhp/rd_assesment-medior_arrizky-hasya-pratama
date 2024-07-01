import type { AlbumTypes } from '@/views/Albums/AlbumDetails.types';

const getRandomAlbums = (albums: AlbumTypes[], count: number): AlbumTypes[] => {
  const shuffled = albums.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default getRandomAlbums;
