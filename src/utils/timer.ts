export const formatTime = (seconds?: number) => {
  if (!seconds) {
    return '00:00';
  }
  const mm = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');

  return `${mm}:${ss}`;
};
