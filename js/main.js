// main.js - simple behavior for video modal
$(function(){
  var $videoSrc;
  $('.open-video').on('click', function(){
    $videoSrc = $(this).data('video');
    // set iframe src when modal opens
    $('#videoFrame').attr('src', $videoSrc + '?autoplay=1&rel=0');
  });

  // stop video when modal is closed
  $('#videoModal').on('hidden.bs.modal', function () {
    $('#videoFrame').attr('src', '');
  });
});
