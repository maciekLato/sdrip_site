$(document).ready(function () {
  // reload music players
  $('a.reload-music').on('shown.bs.tab', function (e) {
    if ($(this).hasClass('reload-music')) {
      var players = $('#bandcamp_player');
      $.each(players, function (idx) {
        players[idx].src = players[idx].src;
      });
    }
    $(this).removeClass('reload-music');
  })
});
