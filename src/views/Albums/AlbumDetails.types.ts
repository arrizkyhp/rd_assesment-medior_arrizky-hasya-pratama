export type AlbumDetailsTypes = {
  albumData?: {
    name?: string;
    images?: Array<{ url: string }>;
    release_date?: string;
    tracks?: TracksType;
    album_type?: string;
    label?: string;
    total_tracks?: string;
  };
  images?: Array<{ url: string }>;
  backgroundImage?: string;
  isLoading?: boolean;
  release_date?: string;
  randomAlbums?: AlbumTypes[];
};

export type AlbumTypes = {
  id: string;
  name: string;
  images: Array<{ url: string }>;
};

export type TracksType = {
  items: Array<{
    name: string;
    duration_ms: string;
    id: string;
  }>;
};
