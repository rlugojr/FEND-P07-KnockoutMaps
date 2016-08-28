var model = ( function () {

	var dataModel = {};

	var getLocalData = function ( dataFile ) {
		return dataFile;
	};

	var getAPIData = function ( url ) {
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

	var getWikiContent = function ( itemID, criteria ) {
		//Wikipedia Ajax Request  PropTypes = extracts|pageimages

		var wikiUrl = 'http://en.wikipedia.com/w/api.php?action=query&prop=extracts|pageimages&titles=' + encodeURIComponent( criteria ) + '&piprop=thumbnail&pithumbsize=320&format=json';

		var result = fetchJsonp( wikiUrl, {
				timeout: 3000
			} )
			.then( function ( response ) {
				return response.json();
			} ).then( function ( json ) {
				console.log( 'parsed json', json );
				imgSrc = jsonPath( json, "$..source" ).toString();
				wikiResources.push( {
					itemID,
					imgSrc
				} );
			} ).catch( function ( ex ) {
				console.log( 'parsing failed', ex );
			} );
	};

	return {
		getLocalData: getLocalData,
		getAPIData: getAPIData,
		getWikiContent: getWikiContent
	};

} )();
