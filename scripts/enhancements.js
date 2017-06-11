shower.modules.require(['shower'], function (Shower) {
  Shower.ready(function (shower) {
    // Avoid full-screen elements (including iframes) stealing focus
    setInterval(function () {
      if (document.activeElement.classList.contains('cover'))
        document.activeElement.blur();
    }, 100);

    // Add handles to advance video slides on mobile
    [].forEach.call(document.getElementsByTagName('iframe'), function (e) {
      if (e.classList.contains('cover'))
        e.parentElement.appendChild(document.createElement('div')).classList.add('handle');
    });

    // Activate evaluation slides
    document.querySelectorAll('.evaluation.slide').forEach(function (slide) {
      var options = slide.querySelectorAll('ol > li'), selected = null;
      options.forEach(function (option) {
        option.addEventListener('click', function () {
          if (selected)
            selected.classList.remove('selected');
          if (selected === option)
            selected = null;
          else
            (selected = option).classList.add('selected');
        });
      });
    });

    // Twitter link
    var twitter = document.getElementById('twitter');
    shower.player.events.group().on('activate', showTwitter);
    shower.container.events.group().on('slidemodeenter', showTwitter);
    function showTwitter() {
      var slide = shower.player.getCurrentSlide();
      slide._content.appendChild(twitter);
      twitter.href = twitter.href.replace(/([?&]url=)[^&]*/,
                     '$1' + encodeURIComponent(document.location.href));
    }
    showTwitter();
  });
});
