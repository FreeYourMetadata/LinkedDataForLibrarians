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
  });
});
