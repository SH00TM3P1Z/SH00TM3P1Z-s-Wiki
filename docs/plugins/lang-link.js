/**
 * Docsify plugin: Auto-prefix internal links with current language path.
 * Use relative links like [text](DogtagSettings) in MD files.
 * When viewing /kr/Home, links become #/kr/DogtagSettings automatically.
 * Add new languages by only updating alias + lang select in index.html.
 */
(function() {
  function prefixLangLinks() {
    var hash = location.hash.slice(1) || '';
    var match = hash.match(/^\/([a-z]{2,})\//);
    if (!match) return;
    var prefix = '/' + match[1] + '/';
    var main = document.querySelector('.markdown-section');
    if (!main) return;
    var langPrefix = prefix.slice(1);
    main.querySelectorAll('a[href]').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (!href) return;
      var path, anchor = '';
      if (href.indexOf('#/') === 0) {
        var idx = href.indexOf('#', 2);
        path = idx >= 0 ? href.slice(2, idx) : href.slice(2);
        anchor = idx >= 0 ? href.slice(idx) : '';
      } else if (!/^(https?:|mailto:|#)/.test(href) && href.indexOf('/') !== 0) {
        var parts = href.split('#');
        path = parts[0];
        if (!path || path.indexOf('.') >= 0) return;
        anchor = parts[1] ? '#' + parts[1] : '';
      } else return;
      if (/^[a-z]{2,}\//.test(path)) return;
      a.setAttribute('href', '#/' + langPrefix + path + anchor);
    });
  }
  window.$docsify = window.$docsify || {};
  var plugins = window.$docsify.plugins || [];
  plugins.push(function(hook, vm) {
    hook.doneEach(prefixLangLinks);
  });
  window.$docsify.plugins = plugins;
})();
