var view = ( function () {

	var navOpen = false;

	/* Set the width of the side navigation to 250px */
	var openNav = function () {
		document.getElementById( "sideList" ).style.width = "340px";
		navOpen = true;
	};

	/* Set the width of the side navigation to 0 */
	var closeNav = function () {
		document.getElementById( "sideList" ).style.width = "0";
		navOpen = false;
	};

	var toggleNav = function () {
		if ( navOpen ) {
			closeNav();
		} else {
			openNav();
		}
	};


	return {
		openNav: openNav,
		closeNav: closeNav,
		toggleNav: toggleNav
	};

} )();
