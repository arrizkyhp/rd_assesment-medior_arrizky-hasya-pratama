const useAlbumTrack = () => {
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

  return {
    formatDuration,
    handleShare,
  };
};

export default useAlbumTrack;
