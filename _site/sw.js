importScripts( '/cpp-disability-documentation/cache-polyfill.js' );

var filesToCache = [
  // root
  '/cpp-disability-documentation/',
  '/cpp-disability-documentation/index.html',
  // css
  '/cpp-disability-documentation/assets/css/main.css',
  '/cpp-disability-documentation/assets/css/normalize.css',
  '/cpp-disability-documentation/assets/css/syntax.css',
  // images
  '/cpp-disability-documentation/assets/img/octocat.png',
  // pages
  '/cpp-disability-documentation/background/','/cpp-disability-documentation/contact/','/cpp-disability-documentation/discovery-research/','/cpp-disability-documentation/home/','/cpp-disability-documentation/participate/','/cpp-disability-documentation/team-news/','/cpp-disability-documentation/accueil/','/cpp-disability-documentation/coordonnees/','/cpp-disability-documentation/contexte/','/cpp-disability-documentation/nouvelles-dequipe/','/cpp-disability-documentation/participez/','/cpp-disability-documentation/recherche-de-la-phase-decouverte/','/cpp-disability-documentation',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
