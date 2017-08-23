


    /*--------------------------------------------------------------
	Google Map Customization
    ---------------------------------------------------------------- */
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 23.761947,
		lng: 90.435557,
		scrollwheel:false,
		zoom: 14,
		zoomControl : true,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: true,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-marker.png';
	map.addMarker({
		lat: 23.761947,
		lng: 90.435557,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [ 

	{
		"featureType": "road",
		"stylers": [
		{ "color": "#ffffff" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#7dcdce" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "#e9e5dc" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "#000000" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "#d9d9d9" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"  
	});

	map.setStyle("map_style");




}());
// 
