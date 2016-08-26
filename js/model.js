var model = function () {
	var dataModel = {};

	dataModel.getLocalData = function ( dataFile ) {
		return dataFile;
	};

	dataModel.getAPIData = function ( url ) {
		var fetchOpts = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
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

	return dataModel;

}( Window );
