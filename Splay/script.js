// Get video player element
var videoPlayer = document.getElementById('video-player');

// Add event listener to play/pause the video
videoPlayer.addEventListener('click', function() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});
