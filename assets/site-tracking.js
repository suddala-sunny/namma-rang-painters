// GA4 event forwarding. This file is safe to leave in place before Analytics is configured.
(function () {
  var id = window.NAMMA_GA4_ID;
  if (!id || id === 'GA4_MEASUREMENT_ID') return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){dataLayer.push(arguments);};
  gtag('js', new Date());
  gtag('config', id);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    if (a.href.indexOf('wa.me/') !== -1) gtag('event', 'whatsapp_click', {page_path: location.pathname, link_url: a.href});
    if (a.href.indexOf('tel:') === 0) gtag('event', 'phone_click', {page_path: location.pathname, link_url: a.href});
  });
  var form = document.getElementById('leadForm');
  if (form) form.addEventListener('submit', function(){gtag('event','lead_whatsapp_handoff',{page_path:location.pathname});});
})();
