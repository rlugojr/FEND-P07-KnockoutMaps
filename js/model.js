var model = function () {

	var loadData = function ( url ) {
		var fetchOpts = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin'
		};

		fetch( url, fetchOpts )
			.then( function ( response ) {
				if ( response.status >= 200 && response.status < 300 ) {
					console.log( 'Response: ' + response.status + ' - ' + response.statusText );
					return response.json();
				}
			}, function ( error ) {
				console.log( error.message );
			} );

	};

	var myData = loadData( 'http://jsonplaceholder.typicode.com/posts/1/comments' );


	//loadData( 'data/data.json' );

}( this );
