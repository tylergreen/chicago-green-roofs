        angular.module("roofApp", ["leaflet-directive"]);
        function DemoController($scope, roofCoordinates) {

			var map2 = document.getElementById("#map2");
			var chicago = [41.8819, -87.6278];
			var map = L.map('map2').setView(chicago, 8);

			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
							attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);


          	for(var i = 0; i < roofCoordinates.length; i++){
				roofCoordinates[i].addTo(map);
			}

	        var local_icons = {
                leaf_icon: L.icon({
                    iconUrl: 'img/leaf-green.png',
                    shadowUrl: 'img/leaf-shadow.png',

                    iconSize:     [38, 95], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                }),
                default_icon: L.icon({
                    iconUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png',
                    shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-shadow.png',

                    iconSize: [25, 41],
                    iconAnchor: [12, 40],
                    popupAnchor: [0, -40],

                    shadowSize: [41, 41],
                    shadowAnchor: [12, 40]
                }),
                div_icon: L.divIcon({
                	iconSize: [200, 0],
                	html: 'Using <strong>Bold text as an icon</strong>:',
                	popupAnchor:  [0, 0]
                }),
                object_icon: {
                    iconUrl: 'http://leafletjs.com/docs/images/leaf-orange.png',
                	shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
                	iconSize:     [38, 95],
                    shadowSize:   [50, 64],
                    iconAnchor:   [22, 94],
                    shadowAnchor: [4, 62]
                },
            }

            angular.extend($scope, {
                icons: local_icons
            });

            angular.extend($scope, {
                chicago: {
                    lat: 41.8819, 
                    lng: -87.6278,
                    zoom: 8
                },
                markers: roofCoordinates, 

old_markers: [
                    {
                    lat: 41.8819, 
                    lng: -87.6278,


                        message: "I'm a chicago marker",
                        icon: local_icons.default_icon,
                    },
                ]
            });

        };
