var worldSites = model.getLocalData( worldSitesData );
console.log( worldSitesData.length );

var myAPIData = model.getAPIData( 'http://jsonplaceholder.typicode.com/posts/1/comments' );
console.log( myAPIData.length );
