( function () {
	var worldSitesData = model.getLocalData( worldSites );

	var myAPIData = model.getAPIData( 'http://jsonplaceholder.typicode.com/posts/1/comments' );

	var Location = function ( data ) {
		var self = this;

		this.id = ko.observable( data.id );
		this.name = ko.observable( data.name );
		this.lat = ko.observable( data.lat );
		this.lng = ko.observable( data.lng );
		this.latLng = ko.computed( function () {
			var latLng = ( data.lat + ', ' + data.lng );
		}, this );
		this.category = ko.observable( data.category );
		this.country = ko.observable( data.states_name_en );
	};

	var ViewModel = function () {
		var self = this;

		//Array to hold CoolCat ViewModel objects
		this.locationList = ko.observableArray( [] );
		//Populate the array.
		worldSitesData.forEach( function ( worldSiteItem ) {

			if ( self.locationList.indexOf( worldSiteItem ) == -1 ) {
				self.locationList.push( new Location( worldSiteItem ) );
			}
		} );

		this.currentLocation = ko.observable( this.locationList()[ 0 ] );

	};

	ko.applyBindings( new ViewModel() );

	return {
		Location: Location,
		ViewModel: ViewModel
	};

}() );
