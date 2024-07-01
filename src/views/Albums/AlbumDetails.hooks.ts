import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import useGetData from '@/hooks/useGetData';
import { formatDate } from '@/utils';
import type {
  AlbumDetailsTypes,
  AlbumTypes,
} from '@/views/Albums/AlbumDetails.types';
import getRandomAlbums from '@/views/Albums/AlbumDetails.utils';

const useAlbumDetails = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [randomAlbums, setRandomAlbums] = useState<AlbumTypes[]>([]);

  const { data, isLoading } = useGetData<AlbumDetailsTypes>(
    'albums-detail',
    `albums/${id}`,
  );

  const { data: dataOther, isLoading: isLoadingOtherAlbum } = useGetData<{
    items: Array<{ id: string; name: string; images: Array<{ url: string }> }>;
  }>('other-albums', 'artists/4Z8W4fKeB5YxbusRsdQVPb/albums');

  const backgroundImageUrl = data?.images?.[0]?.url || '';
  const formattedReleaseDate = data?.release_date
    ? formatDate(data.release_date)
    : 'Unknown';

  useEffect(() => {
    if (dataOther?.items) {
      setRandomAlbums(getRandomAlbums(dataOther.items, 4));
    }
  }, [dataOther]);

  return {
    backgroundImageUrl,
    data,
    dataOther,
    formattedReleaseDate,
    isLoading,
    isLoadingOtherAlbum,
    randomAlbums,
  };
};

export default useAlbumDetails;
