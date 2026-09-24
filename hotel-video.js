document.addEventListener('DOMContentLoaded', () => {
  const media = document.querySelector('.hotel-feature-media');
  if (!media || media.querySelector('video')) return;

  const video = document.createElement('video');
  video.className = 'hotel-feature-video';
  video.controls = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.poster = 'assets/screenshots/aster-house-dashboard.png';

  const source = document.createElement('source');
  source.src = 'assets/videos/aster-house-dashboard-walkthrough.webm';
  source.type = 'video/webm';
  video.append(source);
  media.prepend(video);
});