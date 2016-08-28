var viewModel = ( function () {
	var worldSitesData = model.getLocalData( worldSites );

	worldSitesData.forEach( function ( dataItem ) {
		var wikiProcess = model.getWikiContent( dataItem.id, dataItem.name );
	} );

	//var myAPIData = model.getAPIData( //http://jsonplaceholder.typicode.com/posts/1/comments' );



	var Location = function ( data ) {
		var self = this;

		this.id = ko.observable( data.id );
		this.name = ko.observable( data.name );
		this.latLng = ko.observable( data.latLng );
		this.placeId = ko.observable( data.placeId );
		this.category = ko.observable( data.category );
		this.country = ko.observable( data.states_name_en );
		this.thumbSrc = "";
		this.wikiExtract = '';



		//this.thumbnail = ko.observable( model.getWikiContent( data.name, 'pageimages' ) );
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
