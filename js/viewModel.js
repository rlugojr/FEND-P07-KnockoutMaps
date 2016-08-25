var myLocalData = model.getLocalData();
console.log( myLocalData );

var myAPIData = model.getAPIData( 'http://jsonplaceholder.typicode.com/posts/1/comments' );
