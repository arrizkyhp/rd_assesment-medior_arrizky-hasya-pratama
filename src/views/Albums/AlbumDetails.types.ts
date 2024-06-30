export type AlbumDetailsTypes = {
  albumData?: {
    name?: string;
    images?: Array<{ url: string }>;
    release_date?: string;
    tracks?: {
      items: Array<{
        name: string;
        duration_ms: string;
        id: string;
      }>;
    };
    album_type?: string;
    label?: string;
    total_tracks?: string;
  };
  images?: Array<{ url: string }>;
  backgroundImage: string;
  isLoading: boolean;
  release_date?: string;
};
