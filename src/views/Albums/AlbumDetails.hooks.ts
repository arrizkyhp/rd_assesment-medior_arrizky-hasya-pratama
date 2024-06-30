import { useParams } from 'next/navigation';

import useGetData from '@/hooks/useGetData';
import { formatDate } from '@/utils';
import type { AlbumDetailsTypes } from '@/views/Albums/AlbumDetails.types';

const useAlbumDetails = () => {
  const params = useParams<{ id: string }>();

  const { id } = params;

  const { data, isLoading } = useGetData<AlbumDetailsTypes>(
    'albums-detail',
    `albums/${id}`,
  );

  const backgroundImageUrl = data?.images?.[0]?.url || '';
  const formattedReleaseDate = data?.release_date
    ? formatDate(data.release_date)
    : 'Unknown';

  return {
    backgroundImageUrl,
    data,
    formattedReleaseDate,
    isLoading,
  };
};

export default useAlbumDetails;
