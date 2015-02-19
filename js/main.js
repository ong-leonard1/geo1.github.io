
		var map = L.map('map', { zoomControl:true }).fitBounds([[1.26648492638,103.691745641],[1.45224089944,103.960809576]]);
		var hash = new L.Hash(map); //add hashes to html address to easy share locations
		var additional_attrib = 'created w. <a href="https://github.com/geolicious/qgis2leaf" target ="_blank">qgis2leaf</a> by <a href="http://www.geolicious.de" target ="_blank">Geolicious</a> & contributors<br>';
	var feature_group = new L.featureGroup([]);

	var raster_group = new L.LayerGroup([]);
	
		var basemap_0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
			attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});	
		basemap_0.addTo(map);
		var basemap_1 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', { 
			attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});	
	var layerOrder=new Array();
							function pop_clientbysubzone(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">SUBZONE_Name</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr><tr><th scope="row">AREA Name</th><td>' + Autolinker.link(String(feature.properties['PLN_AREA_N'])) + '</td></tr><tr><th scope="row">REGION Name</th><td>' + Autolinker.link(String(feature.properties['REGION_N'])) + '</td></tr><tr><th scope="row">Client Count</th><td>' + Autolinker.link(String(feature.properties['PNTCNT'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_clientbysubzoneJSON = new L.geoJson(exp_clientbysubzone,{
					onEachFeature: pop_clientbysubzone,
					style: function (feature) {
						return {fillColor: feature.properties.color_qgis2leaf,
								color: '#000',
								weight: 1,
								opacity: feature.properties.transp_qgis2leaf,
								fillOpacity: feature.properties.transp_qgis2leaf};
						}
					});
				feature_group.addLayer(exp_clientbysubzoneJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						exp_clientbysubzoneJSON.addTo(map);
						var layerOrder=new Array();
							function pop_msfcategorizedproportionoverall(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Case Start Date</th><td>' + Autolinker.link(String(feature.properties['FirstDate'])) + '</td></tr><tr><th scope="row">Case End Date</th><td>' + Autolinker.link(String(feature.properties['LastDate'])) + '</td></tr><tr><th scope="row">IRNumber</th><td>' + Autolinker.link(String(feature.properties['IRNumber'])) + '</td></tr><tr><th scope="row">CaseType</th><td>' + Autolinker.link(String(feature.properties['CaseType'])) + '</td></tr><tr><th scope="row">Total Days</th><td>' + Autolinker.link(String(feature.properties['days'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_msfcategorizedproportionoverallJSON = new L.geoJson(exp_msfcategorizedproportionoverall,{
					onEachFeature: pop_msfcategorizedproportionoverall,
					pointToLayer: function (feature, latlng) {  
						var value = 0;
							value=feature.properties.days/18;
						return L.circleMarker(latlng, {
							radius: value,
							fillColor: feature.properties.color_qgis2leaf,

							color: feature.properties.borderColor_qgis2leaf,
							weight: 1,
							opacity: feature.properties.transp_qgis2leaf,
							fillOpacity: feature.properties.transp_qgis2leaf
							})
						}
					});
								feature_group.addLayer(exp_msfcategorizedproportionoverallJSON);

				//var cluster_groupmsfcategorizedproportionoverallJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				//cluster_groupmsfcategorizedproportionoverallJSON.addLayer(exp_msfcategorizedproportionoverallJSON);
				
				layerOrder[layerOrder.length] = exp_msfcategorizedproportionoverallJSON;
				for (index = 0; index < layerOrder.length; index++) {
					feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
				}
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupmsfcategorizedproportionoverallJSON.addTo(map);
						//exp_msfcategorizedproportionoverallJSON.addTo(map);

							function pop_msfcategorized(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Case Start Date</th><td>' + Autolinker.link(String(feature.properties['FirstDate'])) + '</td></tr><tr><th scope="row">Case End Date</th><td>' + Autolinker.link(String(feature.properties['LastDate'])) + '</td></tr><tr><th scope="row">IRNumber</th><td>' + Autolinker.link(String(feature.properties['IRNumber'])) + '</td></tr><tr><th scope="row">CaseType</th><td>' + Autolinker.link(String(feature.properties['CaseType'])) + '</td></tr><tr><th scope="row">Total Days</th><td>' + Autolinker.link(String(feature.properties['days'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_msfcategorizedJSON = new L.geoJson(exp_msfcategorized,{
					onEachFeature: pop_msfcategorized,
					pointToLayer: function (feature, latlng) {  
						return L.circleMarker(latlng, {
							radius: feature.properties.radius_qgis2leaf,
							fillColor: feature.properties.color_qgis2leaf,

							color: feature.properties.borderColor_qgis2leaf,
							weight: 1,
							opacity: feature.properties.transp_qgis2leaf,
							fillOpacity: feature.properties.transp_qgis2leaf
							})
						}
					});
				
				var cluster_groupmsfcategorizedJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				cluster_groupmsfcategorizedJSON.addLayer(exp_msfcategorizedJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupmsfcategorizedJSON.addTo(map);
							function pop_railways(feature, layer) {
										
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);


				}
						
					var exp_railwaysJSON = new L.geoJson(exp_railways,{
						onEachFeature: pop_railways,
						style: function (feature) {
							return {weight: feature.properties.radius_qgis2leaf,
									color: feature.properties.color_qgis2leaf,
									opacity: feature.properties.transp_qgis2leaf,
									fillOpacity: feature.properties.transp_qgis2leaf};
							}
						});
					feature_group.addLayer(exp_railwaysJSON);
					
						//add comment sign to hide this layer on the map in the initial view.
						//exp_railwaysJSON.addTo(map);
							function pop_ELDERCARE(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Website Link</th><td>' + Autolinker.link(String(feature.properties['HYPERLINK'])) + '</td></tr><tr><th scope="row">NAME</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_ELDERCAREJSON = new L.geoJson(exp_ELDERCARE,{
					onEachFeature: pop_ELDERCARE,
					pointToLayer: function (feature, latlng) {
						return L.marker(latlng, {icon: L.icon({
							iconUrl: feature.properties.icon_exp,
							iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
							iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
							popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
			 				})
			 			})
					}}
				);
				
				var cluster_groupELDERCAREJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				cluster_groupELDERCAREJSON.addLayer(exp_ELDERCAREJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupELDERCAREJSON.addTo(map);
							function pop_FAMILY(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Website Link</th><td>' + Autolinker.link(String(feature.properties['HYPERLINK'])) + '</td></tr><tr><th scope="row">NAME</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_FAMILYJSON = new L.geoJson(exp_FAMILY,{
					onEachFeature: pop_FAMILY,
					pointToLayer: function (feature, latlng) {
						return L.marker(latlng, {icon: L.icon({
							iconUrl: feature.properties.icon_exp,
							iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
							iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
							popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
			 				})
			 			})
					}}
				);
				
				var cluster_groupFAMILYJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				cluster_groupFAMILYJSON.addLayer(exp_FAMILYJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupFAMILYJSON.addTo(map);
							function pop_DISABILITY(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Website Link</th><td>' + Autolinker.link(String(feature.properties['HYPERLINK'])) + '</td></tr><tr><th scope="row">NAME</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_DISABILITYJSON = new L.geoJson(exp_DISABILITY,{
					onEachFeature: pop_DISABILITY,
					pointToLayer: function (feature, latlng) {
						return L.marker(latlng, {icon: L.icon({
							iconUrl: feature.properties.icon_exp,
							iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
							iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
							popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
			 				})
			 			})
					}}
				);
				
				var cluster_groupDISABILITYJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				cluster_groupDISABILITYJSON.addLayer(exp_DISABILITYJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupDISABILITYJSON.addTo(map);
							function pop_CHILDCARE(feature, layer) {
										
	var popupContent = '<table>' + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Website Link</th><td>' + Autolinker.link(String(feature.properties['HYPERLINK'])) + '</td></tr><tr><th scope="row">NAME</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</table>';
	layer.bindPopup(popupContent);


				}
						
				var exp_CHILDCAREJSON = new L.geoJson(exp_CHILDCARE,{
					onEachFeature: pop_CHILDCARE,
					pointToLayer: function (feature, latlng) {
						return L.marker(latlng, {icon: L.icon({
							iconUrl: feature.properties.icon_exp,
							iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
							iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
							popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
			 				})
			 			})
					}}
				);
				
				var cluster_groupCHILDCAREJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
				cluster_groupCHILDCAREJSON.addLayer(exp_CHILDCAREJSON);
				
						//add comment sign to hide this layer on the map in the initial view.
						//cluster_groupCHILDCAREJSON.addTo(map);
		var title = new L.Control();
		title.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
			this.update();
			return this._div;
	    };
	    title.update = function () {
			this._div.innerHTML = '<h2>MSF</h2>MSF'
		};
		title.addTo(map);
		var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'topright',
            text: 'Search Address!',
			});
		osmGeocoder.addTo(map);
		
		var legend = L.control({position: 'bottomright'});
		
		legend.onAdd = function (map) {
		var div = L.DomUtil.create('div', 'info legend');
		div.innerHTML = "<h3>Legend</h3><table></table>";
    		return div;
		};
		legend.addTo(map);

	var baseMaps = {
		'OSM Standard': basemap_0,
		'OSM Black & White': basemap_1};
	L.control.layers(baseMaps,{"ChildCare Centre": cluster_groupCHILDCAREJSON,"Disability Service": cluster_groupDISABILITYJSON,"Family Service Centre": cluster_groupFAMILYJSON,"Eldercare Centre": cluster_groupELDERCAREJSON,"MRT Line": exp_railwaysJSON,"Choropleth Map of Client by Sub-Region": exp_clientbysubzoneJSON,"Client Category": cluster_groupmsfcategorizedJSON,"Client Case Duration": exp_msfcategorizedproportionoverallJSON},{collapsed:true}).addTo(map);
		function updateOpacity(value) {
	}
	L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);