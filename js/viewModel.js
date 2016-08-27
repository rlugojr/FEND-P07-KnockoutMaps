var viewModel = ( function () {
	var worldSitesData = model.getLocalData( worldSites );

	var myAPIData = model.getAPIData( 'http://jsonplaceholder.typicode.com/posts/1/comments' );


	var Location = function ( data ) {
		var self = this;

		this.id = ko.observable( data.id );
		this.name = ko.observable( data.name );
		this.lat = ko.observable( data.lat );
		this.lng = ko.observable( data.lng );
		this.latLng = ko.computed( function () {
			return ( data.lat + ', ' + data.lng );
		}, this );
		this.category = ko.observable( data.category );
		this.country = ko.observable( data.states_name_en );
	};

	var ListViewModel = function () {
		var self = this;

		this.locationList = ko.observableArray( [] );

		worldSitesData.forEach( function ( worldSiteItem ) {
			self.locationList.push( new Location( worldSiteItem ) );
		} );

		this.currentLocation = ko.observable( this.locationList()[ 0 ] );

		this.selectedLocation = function ( clickedLocation ) {
			console.log( clickedLocation );
			self.currentLocation( clickedLocation );
		};

	};


	var init = function () {

		Location( worldSitesData );
		ListViewModel();

		ko.applyBindings( new ListViewModel() );
	};


	return {
		Location: Location,
		ListViewModel: ListViewModel,
		init: init
	};

} )();
