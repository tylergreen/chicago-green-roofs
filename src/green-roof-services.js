//angular.module('roofApp').factory('gmap', function(google){ return new google.maps });

angular.module('roofApp').constant('number', 10);
angular.module('roofApp').constant('roofdata2', {                    m1: {
                        lat: 51.505,
                        lng: -0.09,
                        message: "I'm a static monkey at your constant service!"

                    }
});


angular.module('roofApp')
	.factory('roofCoordinates', ['rawRoofData', function(rawRoofData){
	console.log('EL:');
	console.log(L);
	function mkIcon(total_sq_ft, vegetated_sq_ft) {
	//	Use L.DivIcon
		var icon = L.divIcon({
//            iconUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png',
//            iconUrl: 'img/marker-icon.png',
								 className: 'myicon',
//								 html: 5,					  
//			  className: 'myicon',
 //           shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-shadow.png',
////           shadowUrl: 'img/leaf-shadow.png',
		   // this needs its own tested fn
//            iconSize: [Math.max(5, 25  * percent_sq_ft), Math.max(5, 25 * percent_sq_ft)],
								 iconSize: [(vegetated_sq_ft * 50) / (839593 - 303), (vegetated_sq_ft * 50) / (839593 - 303) ],
//            iconSize: [25, 41], 
			//this also needs its own tested fn for this data set
//			iconColor: 
//            iconSize: [25, 41],
//            iconAnchor: [12, 40],
//            popupAnchor: [0, -40]
//            shadowSize: [41, 41],
//            shadowAnchor: [12, 40]

	});
	return icon;
	};

	// col 17 is total sq ft
	// col 18 is vegetated sq ft
	var result = rawRoofData.data.map(function(loc) {
										  var lat = loc[20];
										  var lng = loc[21];
										  var total_sqft = loc[17];
										  var veg_sqft = loc[18];
										  var percentage = (veg_sqft / total_sqft)
										  var green = Math.round(16 * percentage) ;
										  var red = 0;
										  var marker_size = total_sqft / 5000;
										  var color = '#' + red.toString(16)  + green.toString(16) + '0';
										  console.log(color);
										  return   L.circle([lat, lng], marker_size, {
															   color: color,
															   message: "Foo"
																} ).bindPopup("address: " + loc[13] + " total sq ft: " + total_sqft + " vegetated sq ft: " + veg_sqft + "percentage utilized: " + percentage); 
										 

									  } );

	console.log('marker:');
	console.log(result);

	  return result;
	  }
]
);


// raw green roof data from Chicago City
angular.module('roofApp').constant('rawRoofData', 
{
  "meta" : {
    "view" : {
      "id" : "u23m-pa73",
      "name" : "Green Roofs - Map",
      "attribution" : "City of Chicago",
      "attributionLink" : "http://www.cityofchicago.org",
      "averageRating" : 0,
      "category" : "Environment & Sustainable Development",
      "createdAt" : 1349288268,
      "description" : "This map and corresponding dataset provide the location, satellite images and square footage of existing green roofs within the City of Chicago. This information is derived from an analysis of high-spatial resolution (50cm), pan-sharpened, ortho-rectified, 8-band multi-spectral satellite images collected by Digital Globe’s Worldview-2 satellite. The City supplied the consultant with a 2009 City boundary shapefile to determine the required extent of the imagery. Acquisition of three different strips of imagery corresponding to the satellite’s paths was required. These strips of imagery spanned three consecutive months and were collected in August 2010 (90% coverage), September 2010 (5% coverage) and October 2010 (5% coverage). The results of the analysis include overall count of vegetated roofs, their total square footage, and the ratio of required to elective vegetated roofs. A total of 359 vegetated roofs were identified within the City of Chicago. The total square footage of these vegetated roofs was calculated to be approximately 5,469,463 square feet. The ratio of required vegetated roofs to elective vegetative roofs was 297:62 (~5:1). The median size of the vegetated roofs was calculated to be 5,234 square feet.",
      "displayType" : "map",
      "downloadCount" : 108,
      "moderationStatus" : true,
      "newBackend" : false,
      "numberOfComments" : 0,
      "oid" : 1312217,
      "publicationAppendEnabled" : false,
      "publicationDate" : 1350410937,
      "publicationGroup" : 442293,
      "publicationStage" : "published",
      "rowClass" : "",
      "rowsUpdatedAt" : 1350410896,
      "rowsUpdatedBy" : "vewm-vupz",
      "signed" : false,
      "tableId" : 453001,
      "totalTimesRated" : 0,
      "viewCount" : 2179,
      "viewLastModified" : 1353947680,
      "viewType" : "tabular",
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : ":sid",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : ":id",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : ":position",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : 22410166,
        "name" : "ID",
        "dataTypeName" : "text",
        "fieldName" : "id",
        "position" : 1,
        "renderTypeName" : "text",
        "tableColumnId" : 4383837,
        "width" : 124,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "000",
          "null" : 0,
          "largest" : "359",
          "top" : [ {
            "count" : 20,
            "item" : "329"
          }, {
            "count" : 19,
            "item" : "330"
          }, {
            "count" : 18,
            "item" : "331"
          }, {
            "count" : 17,
            "item" : "332"
          }, {
            "count" : 16,
            "item" : "333"
          }, {
            "count" : 15,
            "item" : "334"
          }, {
            "count" : 14,
            "item" : "335"
          }, {
            "count" : 13,
            "item" : "336"
          }, {
            "count" : 12,
            "item" : "337"
          }, {
            "count" : 11,
            "item" : "338"
          }, {
            "count" : 10,
            "item" : "339"
          }, {
            "count" : 9,
            "item" : "340"
          }, {
            "count" : 8,
            "item" : "341"
          }, {
            "count" : 7,
            "item" : "342"
          }, {
            "count" : 6,
            "item" : "343"
          }, {
            "count" : 5,
            "item" : "344"
          }, {
            "count" : 4,
            "item" : "345"
          }, {
            "count" : 3,
            "item" : "346"
          }, {
            "count" : 2,
            "item" : "347"
          }, {
            "count" : 1,
            "item" : "348"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410167,
        "name" : "HOUSE_NUMBER",
        "dataTypeName" : "number",
        "fieldName" : "house_number",
        "position" : 2,
        "renderTypeName" : "number",
        "tableColumnId" : 4383840,
        "width" : 244,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "0",
          "sum" : "774774",
          "null" : 0,
          "average" : "2158.144846796657",
          "largest" : "11840",
          "top" : [ {
            "count" : 20,
            "item" : "901"
          }, {
            "count" : 19,
            "item" : "10"
          }, {
            "count" : 18,
            "item" : "900"
          }, {
            "count" : 17,
            "item" : "0"
          }, {
            "count" : 16,
            "item" : "3448"
          }, {
            "count" : 15,
            "item" : "1701"
          }, {
            "count" : 14,
            "item" : "24"
          }, {
            "count" : 13,
            "item" : "55"
          }, {
            "count" : 12,
            "item" : "66"
          }, {
            "count" : 11,
            "item" : "62"
          }, {
            "count" : 10,
            "item" : "110"
          }, {
            "count" : 9,
            "item" : "924"
          }, {
            "count" : 8,
            "item" : "1211"
          }, {
            "count" : 7,
            "item" : "3700"
          }, {
            "count" : 6,
            "item" : "29"
          }, {
            "count" : 5,
            "item" : "505"
          }, {
            "count" : 4,
            "item" : "1502"
          }, {
            "count" : 3,
            "item" : "5641"
          }, {
            "count" : 2,
            "item" : "3231"
          }, {
            "count" : 1,
            "item" : "1410"
          } ]
        },
        "format" : {
          "precisionStyle" : "standard",
          "align" : "right",
          "noCommas" : "true"
        }
      }, {
        "id" : 22410168,
        "name" : "PRE_DIR",
        "dataTypeName" : "text",
        "fieldName" : "pre_dir",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 4383841,
        "width" : 184,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : " ",
          "null" : 0,
          "largest" : "W",
          "top" : [ {
            "count" : 20,
            "item" : "N"
          }, {
            "count" : 19,
            "item" : "W"
          }, {
            "count" : 18,
            "item" : "E"
          }, {
            "count" : 17,
            "item" : " "
          }, {
            "count" : 16,
            "item" : "S"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410169,
        "name" : "STREET_NAME",
        "dataTypeName" : "text",
        "fieldName" : "street_name",
        "position" : 4,
        "renderTypeName" : "text",
        "tableColumnId" : 4383842,
        "width" : 232,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "103RD",
          "null" : 0,
          "largest" : "WRIGHTWOOD",
          "top" : [ {
            "count" : 20,
            "item" : "OHIO"
          }, {
            "count" : 19,
            "item" : "CLARK"
          }, {
            "count" : 18,
            "item" : "VINCENNES"
          }, {
            "count" : 17,
            "item" : "38TH"
          }, {
            "count" : 16,
            "item" : "STATE"
          }, {
            "count" : 15,
            "item" : "PRAIRIE"
          }, {
            "count" : 14,
            "item" : "MICHIGAN"
          }, {
            "count" : 13,
            "item" : "95TH"
          }, {
            "count" : 12,
            "item" : "RANDOLPH"
          }, {
            "count" : 11,
            "item" : "103RD"
          }, {
            "count" : 10,
            "item" : "MONROE"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410170,
        "name" : "STREET_TYPE",
        "dataTypeName" : "text",
        "fieldName" : "street_type",
        "position" : 5,
        "renderTypeName" : "text",
        "tableColumnId" : 4383843,
        "width" : 232,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : " ",
          "null" : 0,
          "largest" : "ST",
          "top" : [ {
            "count" : 20,
            "item" : "ST"
          }, {
            "count" : 19,
            "item" : "AVE"
          }, {
            "count" : 18,
            "item" : "BLVD"
          }, {
            "count" : 17,
            "item" : " "
          }, {
            "count" : 16,
            "item" : "RD"
          }, {
            "count" : 15,
            "item" : "PL"
          }, {
            "count" : 14,
            "item" : "CT"
          }, {
            "count" : 13,
            "item" : "DR"
          }, {
            "count" : 12,
            "item" : "DRIVE"
          }, {
            "count" : 11,
            "item" : "PKWY"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410171,
        "name" : "FULL_ADDRESS_RANGE",
        "dataTypeName" : "text",
        "fieldName" : "full_address",
        "position" : 6,
        "renderTypeName" : "text",
        "tableColumnId" : 4383844,
        "width" : 244,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "0-0   A.R.F.F. #3",
          "null" : 0,
          "largest" : "947-951 N STATE ST",
          "top" : [ {
            "count" : 20,
            "item" : "5414-5420 S CORNELL AVE"
          }, {
            "count" : 19,
            "item" : "1620-1620 E 75TH ST"
          }, {
            "count" : 18,
            "item" : "5220-0 S HYDE PARK BLVD"
          }, {
            "count" : 17,
            "item" : "2320-2342 E 93RD ST"
          }, {
            "count" : 16,
            "item" : "1700-1700 E 95TH ST"
          }, {
            "count" : 15,
            "item" : "3448-3448 E CHELTENHAM PL"
          }, {
            "count" : 14,
            "item" : "0-0   O'HARE BLDG 7"
          }, {
            "count" : 13,
            "item" : "0-0   O'HARE BLDG 8"
          }, {
            "count" : 12,
            "item" : "0-0   OHARE BLDG 1"
          }, {
            "count" : 11,
            "item" : "0-0   OHARE BLDG 2"
          }, {
            "count" : 10,
            "item" : "0-0   OHARE BLDG 3"
          }, {
            "count" : 9,
            "item" : "0-0   OHARE BLDG 4"
          }, {
            "count" : 8,
            "item" : "0-0   A.R.F.F. #3"
          }, {
            "count" : 7,
            "item" : "1701-1701 E 95TH ST"
          }, {
            "count" : 6,
            "item" : "24-24 S MORGAN ST"
          }, {
            "count" : 5,
            "item" : "55-55 E MONROE ST"
          }, {
            "count" : 4,
            "item" : "66-66 E RANDOLPH ST"
          }, {
            "count" : 3,
            "item" : "62-62 E RANDOLPH ST"
          }, {
            "count" : 2,
            "item" : "110-116 W SUPERIOR ST"
          }, {
            "count" : 1,
            "item" : "924-924 N CLARK ST"
          } ]
        },
        "format" : {
          "align" : "left"
        }
      }, {
        "id" : 22410172,
        "name" : "BUILDING_NAME1",
        "dataTypeName" : "text",
        "fieldName" : "building_name1",
        "position" : 7,
        "renderTypeName" : "text",
        "tableColumnId" : 4383845,
        "width" : 268,
        "cachedContents" : {
          "non_null" : 357,
          "smallest" : " ",
          "null" : 2,
          "largest" : "WINDSOR AT ONTARIO PLACE",
          "top" : [ {
            "count" : 20,
            "item" : " "
          }, {
            "count" : 19,
            "item" : "CITYVIEW"
          }, {
            "count" : 18,
            "item" : "THE GRAND OHIO CONDOMINIUMS"
          }, {
            "count" : 17,
            "item" : "JAY PRITZKER PAVILLION"
          }, {
            "count" : 16,
            "item" : "SKINNER SCHOOL"
          }, {
            "count" : 15,
            "item" : "STREETER PLACE"
          }, {
            "count" : 14,
            "item" : "THE CLARE AT WATERTOWER"
          }, {
            "count" : 13,
            "item" : "OLSON PAVILION/MCGAW PAVILION/HEALTH SC"
          }, {
            "count" : 12,
            "item" : " ONTERIE CENTER"
          }, {
            "count" : 11,
            "item" : "TRUMP TOWER"
          }, {
            "count" : 10,
            "item" : "AMLI 900"
          }, {
            "count" : 9,
            "item" : "111 SOUTH WACKER"
          }, {
            "count" : 8,
            "item" : "CITY HALL & COUNTY BUILDING"
          }, {
            "count" : 7,
            "item" : "ACCESS LIVING"
          }, {
            "count" : 6,
            "item" : "PEGGY NOTEBART NATURE MUSEUM"
          }, {
            "count" : 5,
            "item" : "E46"
          }, {
            "count" : 4,
            "item" : "Park Alexandria"
          }, {
            "count" : 3,
            "item" : "ADVOCATE TRINITY HOSPITAL"
          }, {
            "count" : 2,
            "item" : "A.R.F.F. #3"
          }, {
            "count" : 1,
            "item" : "PURE"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410173,
        "name" : "BUILDING_NAME2",
        "dataTypeName" : "text",
        "fieldName" : "building_name2",
        "position" : 8,
        "renderTypeName" : "text",
        "tableColumnId" : 4383846,
        "width" : 268,
        "cachedContents" : {
          "non_null" : 357,
          "smallest" : " ",
          "null" : 2,
          "largest" : "WEST SIDE MEDICAL CENTER",
          "top" : [ {
            "count" : 20,
            "item" : " "
          }, {
            "count" : 19,
            "item" : "CITY COLLEGES OF CHICAGO"
          }, {
            "count" : 18,
            "item" : "LOYOLA UNIV. LAKESHORE CAMPUS"
          }, {
            "count" : 17,
            "item" : "LOGAN SQUARE BRANCH"
          }, {
            "count" : 16,
            "item" : "WEST SIDE MEDICAL CENTER"
          }, {
            "count" : 15,
            "item" : "CHICAGO PUBLIC SCHOOLS"
          }, {
            "count" : 14,
            "item" : "LOYOLA UNIVERSITY CHICAGO"
          }, {
            "count" : 13,
            "item" : "BUKARA RESTAURANT AND WHITE HEN PA"
          }, {
            "count" : 12,
            "item" : "UNIVERSITY OF CHICAGO"
          }, {
            "count" : 11,
            "item" : "U OF CHICAGO"
          }, {
            "count" : 10,
            "item" : "BANK ONE CORPORATE CENTER"
          }, {
            "count" : 9,
            "item" : "SENIOR RETIREMENT RESIDENCE"
          }, {
            "count" : 8,
            "item" : "NORTHWESTERN UNIVERSITY"
          }, {
            "count" : 7,
            "item" : "CHICAGO FIRE HOUSE"
          }, {
            "count" : 6,
            "item" : "OHARE AIRPORT STRUCTURE"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410174,
        "name" : "MONTH_VIEW",
        "dataTypeName" : "text",
        "fieldName" : "month_view",
        "position" : 9,
        "renderTypeName" : "text",
        "tableColumnId" : 4383847,
        "width" : 220,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "August 2010",
          "null" : 0,
          "largest" : "September 2010",
          "top" : [ {
            "count" : 20,
            "item" : "August 2010"
          }, {
            "count" : 19,
            "item" : "October 2010"
          }, {
            "count" : 18,
            "item" : "September 2010"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410175,
        "name" : "TOTAL_ROOF_SQFT",
        "dataTypeName" : "number",
        "fieldName" : "total_roof_sqft",
        "position" : 10,
        "renderTypeName" : "number",
        "tableColumnId" : 4383848,
        "width" : 280,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "897",
          "sum" : "17645367",
          "null" : 0,
          "average" : "49151.44011142061",
          "largest" : "2223396",
          "top" : [ {
            "count" : 20,
            "item" : "34338"
          }, {
            "count" : 19,
            "item" : "13026"
          }, {
            "count" : 18,
            "item" : "9182"
          }, {
            "count" : 17,
            "item" : "106836"
          }, {
            "count" : 16,
            "item" : "3440"
          }, {
            "count" : 15,
            "item" : "1788"
          }, {
            "count" : 14,
            "item" : "897"
          }, {
            "count" : 13,
            "item" : "8912"
          }, {
            "count" : 12,
            "item" : "184193"
          }, {
            "count" : 11,
            "item" : "12315"
          }, {
            "count" : 10,
            "item" : "39934"
          }, {
            "count" : 9,
            "item" : "19114"
          }, {
            "count" : 8,
            "item" : "13754"
          }, {
            "count" : 7,
            "item" : "7888"
          }, {
            "count" : 6,
            "item" : "18707"
          }, {
            "count" : 5,
            "item" : "45321"
          }, {
            "count" : 4,
            "item" : "6290"
          }, {
            "count" : 3,
            "item" : "6647"
          }, {
            "count" : 2,
            "item" : "6196"
          }, {
            "count" : 1,
            "item" : "4261"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410176,
        "name" : "VEGETATED_SQFT",
        "dataTypeName" : "number",
        "fieldName" : "vegetated_sqft",
        "position" : 11,
        "renderTypeName" : "number",
        "tableColumnId" : 4383849,
        "width" : 268,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "330",
          "sum" : "5469466",
          "null" : 0,
          "average" : "15235.28133704735",
          "largest" : "839593",
          "top" : [ {
            "count" : 20,
            "item" : "4958"
          }, {
            "count" : 19,
            "item" : "12059"
          }, {
            "count" : 18,
            "item" : "2878"
          }, {
            "count" : 17,
            "item" : "3873"
          }, {
            "count" : 16,
            "item" : "745"
          }, {
            "count" : 15,
            "item" : "1478"
          }, {
            "count" : 14,
            "item" : "768"
          }, {
            "count" : 13,
            "item" : "8912"
          }, {
            "count" : 12,
            "item" : "176272"
          }, {
            "count" : 11,
            "item" : "11608"
          }, {
            "count" : 10,
            "item" : "4107"
          }, {
            "count" : 9,
            "item" : "19114"
          }, {
            "count" : 8,
            "item" : "4784"
          }, {
            "count" : 7,
            "item" : "2606"
          }, {
            "count" : 6,
            "item" : "2610"
          }, {
            "count" : 5,
            "item" : "1733"
          }, {
            "count" : 4,
            "item" : "4599"
          }, {
            "count" : 3,
            "item" : "1968"
          }, {
            "count" : 2,
            "item" : "899"
          }, {
            "count" : 1,
            "item" : "957"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410177,
        "name" : "FACT_SHEET",
        "dataTypeName" : "url",
        "fieldName" : "fact_sheet",
        "position" : 12,
        "renderTypeName" : "url",
        "tableColumnId" : 4383850,
        "width" : 220,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : {
            "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_000.pdf"
          },
          "null" : 0,
          "largest" : {
            "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_359.pdf"
          },
          "top" : [ {
            "count" : 20,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_329.pdf"
            }
          }, {
            "count" : 19,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_330.pdf"
            }
          }, {
            "count" : 18,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_331.pdf"
            }
          }, {
            "count" : 17,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_332.pdf"
            }
          }, {
            "count" : 16,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_333.pdf"
            }
          }, {
            "count" : 15,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_334.pdf"
            }
          }, {
            "count" : 14,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_335.pdf"
            }
          }, {
            "count" : 13,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_336.pdf"
            }
          }, {
            "count" : 12,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_337.pdf"
            }
          }, {
            "count" : 11,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_338.pdf"
            }
          }, {
            "count" : 10,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_339.pdf"
            }
          }, {
            "count" : 9,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_340.pdf"
            }
          }, {
            "count" : 8,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_341.pdf"
            }
          }, {
            "count" : 7,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_342.pdf"
            }
          }, {
            "count" : 6,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_343.pdf"
            }
          }, {
            "count" : 5,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_344.pdf"
            }
          }, {
            "count" : 4,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_345.pdf"
            }
          }, {
            "count" : 3,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_346.pdf"
            }
          }, {
            "count" : 2,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_347.pdf"
            }
          }, {
            "count" : 1,
            "item" : {
              "url" : "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_348.pdf"
            }
          } ]
        },
        "format" : {
        },
        "subColumnTypes" : [ "url", "description" ]
      }, {
        "id" : 22410178,
        "name" : "LATITUDE",
        "dataTypeName" : "number",
        "fieldName" : "latitude",
        "position" : 13,
        "renderTypeName" : "number",
        "tableColumnId" : 4383838,
        "width" : 196,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "41.67738323",
          "sum" : "15033.30371383",
          "null" : 0,
          "average" : "41.87549781011142",
          "largest" : "42.01955209",
          "top" : [ {
            "count" : 20,
            "item" : "41.79775568"
          }, {
            "count" : 19,
            "item" : "41.75852287"
          }, {
            "count" : 18,
            "item" : "41.80029304"
          }, {
            "count" : 17,
            "item" : "41.72677484"
          }, {
            "count" : 16,
            "item" : "41.72194529"
          }, {
            "count" : 15,
            "item" : "41.75442313"
          }, {
            "count" : 14,
            "item" : "41.99628442"
          }, {
            "count" : 13,
            "item" : "41.99641165"
          }, {
            "count" : 12,
            "item" : "41.96246622"
          }, {
            "count" : 11,
            "item" : "41.96190697"
          }, {
            "count" : 10,
            "item" : "41.96033246"
          }, {
            "count" : 9,
            "item" : "41.95970277"
          }, {
            "count" : 8,
            "item" : "41.98081256"
          }, {
            "count" : 7,
            "item" : "41.72186408"
          }, {
            "count" : 6,
            "item" : "41.88113741"
          }, {
            "count" : 5,
            "item" : "41.88008845"
          }, {
            "count" : 4,
            "item" : "41.88491504"
          }, {
            "count" : 3,
            "item" : "41.88479550"
          }, {
            "count" : 2,
            "item" : "41.89592113"
          }, {
            "count" : 1,
            "item" : "41.89955299"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410179,
        "name" : "LONGITUDE",
        "dataTypeName" : "number",
        "fieldName" : "longitude",
        "position" : 14,
        "renderTypeName" : "number",
        "tableColumnId" : 4383839,
        "width" : 208,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : "-87.92436577",
          "sum" : "-31470.16699051",
          "null" : 0,
          "average" : "-87.66063228554318",
          "largest" : "-87.54549379",
          "top" : [ {
            "count" : 20,
            "item" : "-87.58577750"
          }, {
            "count" : 19,
            "item" : "-87.58486224"
          }, {
            "count" : 18,
            "item" : "-87.58476512"
          }, {
            "count" : 17,
            "item" : "-87.56667240"
          }, {
            "count" : 16,
            "item" : "-87.58253226"
          }, {
            "count" : 15,
            "item" : "-87.54549379"
          }, {
            "count" : 14,
            "item" : "-87.91633192"
          }, {
            "count" : 13,
            "item" : "-87.91585284"
          }, {
            "count" : 12,
            "item" : "-87.92436577"
          }, {
            "count" : 11,
            "item" : "-87.92298687"
          }, {
            "count" : 10,
            "item" : "-87.92317345"
          }, {
            "count" : 9,
            "item" : "-87.90259547"
          }, {
            "count" : 8,
            "item" : "-87.89784851"
          }, {
            "count" : 7,
            "item" : "-87.58144528"
          }, {
            "count" : 6,
            "item" : "-87.65242896"
          }, {
            "count" : 5,
            "item" : "-87.62573950"
          }, {
            "count" : 4,
            "item" : "-87.62545574"
          }, {
            "count" : 3,
            "item" : "-87.62565169"
          }, {
            "count" : 2,
            "item" : "-87.63199711"
          }, {
            "count" : 1,
            "item" : "-87.63189495"
          } ]
        },
        "format" : {
        }
      }, {
        "id" : 22410180,
        "name" : "LOCATION",
        "dataTypeName" : "location",
        "fieldName" : "location",
        "position" : 15,
        "renderTypeName" : "location",
        "tableColumnId" : 4383851,
        "width" : 196,
        "cachedContents" : {
          "non_null" : 359,
          "smallest" : {
            "longitude" : "-87.64912988",
            "latitude" : "41.88781649"
          },
          "null" : 0,
          "largest" : {
            "longitude" : "-87.61354305",
            "latitude" : "41.82594931"
          },
          "top" : [ {
            "count" : 20,
            "item" : {
              "longitude" : "-87.5857775",
              "latitude" : "41.79775568"
            }
          }, {
            "count" : 19,
            "item" : {
              "longitude" : "-87.58486224",
              "latitude" : "41.75852287"
            }
          }, {
            "count" : 18,
            "item" : {
              "longitude" : "-87.58476512",
              "latitude" : "41.80029304"
            }
          }, {
            "count" : 17,
            "item" : {
              "longitude" : "-87.5666724",
              "latitude" : "41.72677484"
            }
          }, {
            "count" : 16,
            "item" : {
              "longitude" : "-87.58253226",
              "latitude" : "41.72194529"
            }
          }, {
            "count" : 15,
            "item" : {
              "longitude" : "-87.54549379",
              "latitude" : "41.75442313"
            }
          }, {
            "count" : 14,
            "item" : {
              "longitude" : "-87.91633192",
              "latitude" : "41.99628442"
            }
          }, {
            "count" : 13,
            "item" : {
              "longitude" : "-87.91585284",
              "latitude" : "41.99641165"
            }
          }, {
            "count" : 12,
            "item" : {
              "longitude" : "-87.92436577",
              "latitude" : "41.96246622"
            }
          }, {
            "count" : 11,
            "item" : {
              "longitude" : "-87.92298687",
              "latitude" : "41.96190697"
            }
          }, {
            "count" : 10,
            "item" : {
              "longitude" : "-87.92317345",
              "latitude" : "41.96033246"
            }
          }, {
            "count" : 9,
            "item" : {
              "longitude" : "-87.90259547",
              "latitude" : "41.95970277"
            }
          }, {
            "count" : 8,
            "item" : {
              "longitude" : "-87.89784851",
              "latitude" : "41.98081256"
            }
          }, {
            "count" : 7,
            "item" : {
              "longitude" : "-87.58144528",
              "latitude" : "41.72186408"
            }
          }, {
            "count" : 6,
            "item" : {
              "longitude" : "-87.65242896",
              "latitude" : "41.88113741"
            }
          }, {
            "count" : 5,
            "item" : {
              "longitude" : "-87.6257395",
              "latitude" : "41.88008845"
            }
          }, {
            "count" : 4,
            "item" : {
              "longitude" : "-87.62545574",
              "latitude" : "41.88491504"
            }
          }, {
            "count" : 3,
            "item" : {
              "longitude" : "-87.62565169",
              "latitude" : "41.8847955"
            }
          }, {
            "count" : 2,
            "item" : {
              "longitude" : "-87.63199711",
              "latitude" : "41.89592113"
            }
          }, {
            "count" : 1,
            "item" : {
              "longitude" : "-87.63189495",
              "latitude" : "41.89955299"
            }
          } ]
        },
        "format" : {
        },
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      } ],
      "displayFormat" : {
        "viewport" : {
          "ymin" : 41.828148,
          "ymax" : 41.928864,
          "xmin" : -87.899805,
          "xmax" : -87.350488
        },
        "plotStyle" : "point",
        "color" : "#6aa84f",
        "flyoutsNoLabel" : false,
        "type" : "google",
        "plot" : {
          "locationId" : 4383851,
          "descriptionColumns" : [ {
            "tableColumnId" : 4383840
          }, {
            "tableColumnId" : 4383841
          }, {
            "tableColumnId" : 4383842
          }, {
            "tableColumnId" : 4383843
          }, {
            "tableColumnId" : 4383850
          } ]
        }
      },
      "grants" : [ {
        "inherited" : true,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "metadata" : {
        "custom_fields" : {
          "Metadata" : {
            "Last Updated Date via Automated Load" : "",
            "Time Period" : "Fall 2010",
            "Data Owner" : "Housing and Economic Development",
            "Frequency" : "To be determined."
          }
        },
        "renderTypeConfig" : {
          "visible" : {
            "map" : true
          }
        },
        "availableDisplayTypes" : [ "map", "table", "fatrow", "page" ],
        "rdfSubject" : "0",
        "rowIdentifier" : "0",
        "rdfClass" : ""
      },
      "owner" : {
        "id" : "scy9-9wg4",
        "displayName" : "cocadmin",
        "emailUnsubscribed" : false,
        "privacyControl" : "login",
        "privilegesDisabled" : false,
        "profileImageUrlLarge" : "/images/profile/4783/7574/CitySeal_Small_large.jpg",
        "profileImageUrlMedium" : "/images/profile/4783/7574/CitySeal_Small_thumb.jpg",
        "profileImageUrlSmall" : "/images/profile/4783/7574/CitySeal_Small_tiny.jpg",
        "profileLastModified" : 1374762619,
        "roleName" : "administrator",
        "screenName" : "cocadmin",
        "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages", "view_goals", "view_dashboards", "edit_goals", "edit_dashboards", "create_dashboards" ]
      },
      "query" : {
      },
      "rights" : [ "read" ],
      "tableAuthor" : {
        "id" : "vewm-vupz",
        "displayName" : "Jonathan Levy",
        "emailUnsubscribed" : false,
        "privacyControl" : "login",
        "profileLastModified" : 1374762619,
        "roleName" : "administrator",
        "screenName" : "Jonathan Levy",
        "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages", "view_goals", "view_dashboards", "edit_goals", "edit_dashboards", "create_dashboards" ]
      },
      "tags" : [ "sustainability" ]
    }
  },
  "data" : [ [ 1, "BBE8D2A8-1488-4B42-B217-B73E34B78C58", 1, 1350410891, "390945", 1350410891, "390945", "{\n}", "000", "330", "N", "GREEN", "ST", "330-330 N GREEN ST", " ", " ", "August 2010", "48806", "13582", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_000.pdf", null ], "41.88781649", "-87.64912988", [ null, "41.88781649", "-87.64912988", null, false ] ]
, [ 2, "3C646846-327C-4FE3-9031-9EC26712787B", 2, 1350410891, "390945", 1350410891, "390945", "{\n}", "001", "217", "W", "VAN BUREN", "ST", "217-241 W VAN BUREN ST", " ", " ", "August 2010", "23946", "7055", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_001.pdf", null ], "41.87661344", "-87.63462733", [ null, "41.87661344", "-87.63462733", null, false ] ]
, [ 3, "AF72C142-F5B5-464C-8985-D024A9775070", 3, 1350410891, "390945", 1350410891, "390945", "{\n}", "002", "1746", "N", "SPAULDING", "AVE", "1746-1752 N SPAULDING AVE", " ", " ", "August 2010", "11696", "3139", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_002.pdf", null ], "41.91343961", "-87.71039583", [ null, "41.91343961", "-87.71039583", null, false ] ]
, [ 4, "5CC836B5-A420-46E3-BAAE-1CFA2E8C058B", 4, 1350410891, "390945", 1350410891, "390945", "{\n}", "003", "2000", "N", "CALIFORNIA", "AVE", "2000-2000 N CALIFORNIA AVE", " ", " ", "August 2010", "5393", "3910", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_003.pdf", null ], "41.91773177", "-87.69741338", [ null, "41.91773177", "-87.69741338", null, false ] ]
, [ 5, "21A935BF-0767-41F5-B0C8-B1BD77B3AB7D", 5, 1350410891, "390945", 1350410891, "390945", "{\n}", "004", "445", "N", "SACRAMENTO", "BLVD", "445-445 N SACRAMENTO BLVD", " ", " ", "August 2010", "14733", "2962", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_004.pdf", null ], "41.88949181", "-87.70106869", [ null, "41.88949181", "-87.70106869", null, false ] ]
, [ 6, "59D937EC-5D10-4EEF-9270-AFA80385392B", 6, 1350410891, "390945", 1350410891, "390945", "{\n}", "005", "232", "E", "SUPERIOR", "ST", "232-254 E SUPERIOR ST", " ", " ", "August 2010", "58431", "11235", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_005.pdf", null ], "41.89641295", "-87.62094686", [ null, "41.89641295", "-87.62094686", null, false ] ]
, [ 7, "34F0A239-064D-4F3E-8B0D-482A970A7CDB", 7, 1350410891, "390945", 1350410891, "390945", "{\n}", "006", "677", "N", "MICHIGAN", "AVE", "677-679 N MICHIGAN AVE", " ", " ", "August 2010", "7733", "2684", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_006.pdf", null ], "41.89481420", "-87.62378911", [ null, "41.89481420", "-87.62378911", null, false ] ]
, [ 8, "0CEB8D48-D4CD-4AAD-A770-4FDA65223AB5", 8, 1350410891, "390945", 1350410891, "390945", "{\n}", "007", "0", " ", "LINCOLN PARK ZOO #2", " ", "0-0   LINCOLN PARK ZOO #2", " ", " ", "August 2010", "1693", "1453", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_007.pdf", null ], "41.92098553", "-87.63536765", [ null, "41.92098553", "-87.63536765", null, false ] ]
, [ 9, "22144779-618A-435B-A4A9-F87EF0317336", 9, 1350410891, "390945", 1350410891, "390945", "{\n}", "008", "1466", "N", "HALSTED", "ST", "1466-1466 N HALSTED ST", "R.E.I. Store", " ", "August 2010", "64084", "13647", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_008.pdf", null ], "41.90808464", "-87.64853878", [ null, "41.90808464", "-87.64853878", null, false ] ]
, [ 10, "6416C20E-EB66-4EF2-927A-2E6AB5B96E1A", 10, 1350410891, "390945", 1350410891, "390945", "{\n}", "009", "6000", "N", "CICERO", "AVE", "6000-6020 N CICERO AVE", " ", " ", "August 2010", "48931", "20924", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_009.pdf", null ], "41.99048371", "-87.74907432", [ null, "41.99048371", "-87.74907432", null, false ] ]
, [ 11, "BA108790-2439-437A-9FE0-A74985CB8B79", 11, 1350410891, "390945", 1350410891, "390945", "{\n}", "010", "6355", "W", "BELMONT", "AVE", "6355-6355 W BELMONT AVE", " ", " ", "August 2010", "10784", "3578", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_010.pdf", null ], "41.93792840", "-87.78562480", [ null, "41.93792840", "-87.78562480", null, false ] ]
, [ 12, "FA812D4F-CF90-4CD2-837F-75846900FC0B", 12, 1350410891, "390945", 1350410891, "390945", "{\n}", "011", "3615", "N", "CENTRAL", "AVE", "3615-3615 N CENTRAL AVE", " ", " ", "August 2010", "11335", "7698", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_011.pdf", null ], "41.94652376", "-87.76649533", [ null, "41.94652376", "-87.76649533", null, false ] ]
, [ 13, "48143DD0-0BE7-40FA-B35E-77FF42D56E98", 13, 1350410891, "390945", 1350410891, "390945", "{\n}", "012", "4003", "N", "MILWAUKEE", "AVE", "4003-4003 N MILWAUKEE AVE", " ", " ", "August 2010", "17845", "4809", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_012.pdf", null ], "41.95410357", "-87.74795822", [ null, "41.95410357", "-87.74795822", null, false ] ]
, [ 14, "C33C226F-ED7E-4CDC-B966-A2B8FD6DD694", 14, 1350410891, "390945", 1350410891, "390945", "{\n}", "013", "4049", "N", "CICERO", "AVE", "4049-4049 N CICERO AVE", " ", " ", "August 2010", "9867", "5680", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_013.pdf", null ], "41.95433248", "-87.74764364", [ null, "41.95433248", "-87.74764364", null, false ] ]
, [ 15, "05D56F65-0EEF-46D4-8072-A32C46882B57", 15, 1350410891, "390945", 1350410891, "390945", "{\n}", "014", "4300", "N", "NARRAGANSETT", "AVE", "4300-4300 N NARRAGANSETT AVE", "WILBUR WRIGHT COLLEGE", "CITY COLLEGES OF CHICAGO", "August 2010", "159901", "479", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_014.pdf", null ], "41.95867634", "-87.78885539", [ null, "41.95867634", "-87.78885539", null, false ] ]
, [ 16, "C5C7EBBF-F9D8-4852-A3CC-58898B54E623", 16, 1350410891, "390945", 1350410891, "390945", "{\n}", "015", "3127", "N", "PULASKI", "RD", "3127-3127 N PULASKI RD", " ", " ", "August 2010", "25502", "20947", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_015.pdf", null ], "41.93842846", "-87.72678405", [ null, "41.93842846", "-87.72678405", null, false ] ]
, [ 17, "5CD642AA-FAEA-4682-BB88-755DEFA96F20", 17, 1350410891, "390945", 1350410891, "390945", "{\n}", "016", "3927", "W", "BELMONT", "AVE", "3927-3927 W BELMONT AVE", " ", " ", "August 2010", "3386", "1396", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_016.pdf", null ], "41.93897974", "-87.72568721", [ null, "41.93897974", "-87.72568721", null, false ] ]
, [ 18, "B9F7225B-2795-4745-90C2-9892E830A491", 18, 1350410891, "390945", 1350410891, "390945", "{\n}", "017", "2700", "N", "NARRAGANSETT", "AVE", "2700-2700 N NARRAGANSETT AVE", " ", " ", "August 2010", "6695", "3954", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_017.pdf", null ], "41.92944458", "-87.78590318", [ null, "41.92944458", "-87.78590318", null, false ] ]
, [ 19, "E715B3F9-31E5-4A77-8CF6-30CCAC35B066", 19, 1350410891, "390945", 1350410891, "390945", "{\n}", "018", "2707", "N", "CICERO", "AVE", "2707-2707 N CICERO AVE", " ", " ", "August 2010", "11621", "5858", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_018.pdf", null ], "41.93013473", "-87.74618559", [ null, "41.93013473", "-87.74618559", null, false ] ]
, [ 20, "6851219E-BAB5-430B-BED3-726FDFBDD1DF", 20, 1350410891, "390945", 1350410891, "390945", "{\n}", "019", "6460", "W", "FULLERTON", "AVE", "6460-6460 W FULLERTON AVE", " ", " ", "August 2010", "14874", "3471", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_019.pdf", null ], "41.92401285", "-87.78802210", [ null, "41.92401285", "-87.78802210", null, false ] ]
, [ 21, "1D11C857-5539-4F24-ADCE-9AD7E1B80229", 21, 1350410891, "390945", 1350410891, "390945", "{\n}", "020", "1920", "N", "CENTRAL", "AVE", "1920-1920 N CENTRAL AVE", " ", " ", "August 2010", "82366", "16123", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_020.pdf", null ], "41.91592101", "-87.76834242", [ null, "41.91592101", "-87.76834242", null, false ] ]
, [ 22, "A8683539-1082-4EFA-811C-75ED1C4CECB8", 22, 1350410891, "390945", 1350410891, "390945", "{\n}", "021", "5530", "W", "HOMER", "ST", "5530-5530 W HOMER ST", "MULTIPLEX MOVIE THEATER", " ", "August 2010", "60390", "22288", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_021.pdf", null ], "41.91604532", "-87.76461573", [ null, "41.91604532", "-87.76461573", null, false ] ]
, [ 23, "5462C75F-6F2B-4866-B3D7-AD52B34E936B", 23, 1350410891, "390945", 1350410891, "390945", "{\n}", "022", "2231", "N", "CENTRAL", "AVE", "2231-2231 N CENTRAL AVE", "PRIETO SCHOOL", " ", "August 2010", "43509", "16930", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_022.pdf", null ], "41.92100169", "-87.76522944", [ null, "41.92100169", "-87.76522944", null, false ] ]
, [ 24, "F78EB6FF-8FA5-4C2F-9731-8610474220A7", 24, 1350410891, "390945", 1350410891, "390945", "{\n}", "023", "5429", "W", "LAKE", "ST", "5429-5429 W LAKE ST", " ", " ", "August 2010", "10468", "7017", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_023.pdf", null ], "41.88698766", "-87.76152420", [ null, "41.88698766", "-87.76152420", null, false ] ]
, [ 25, "B4EC9B1C-D276-444D-9C4F-6EC047EF9F38", 25, 1350410891, "390945", 1350410891, "390945", "{\n}", "024", "4633", "W", "GRAND", "AVE", "4633-4661 W GRAND AVE", " ", " ", "August 2010", "139299", "75130", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_024.pdf", null ], "41.91191788", "-87.74284765", [ null, "41.91191788", "-87.74284765", null, false ] ]
, [ 26, "DE6B1BC7-1FA6-41A3-B38E-B81B9FC6C3F9", 26, 1350410891, "390945", 1350410891, "390945", "{\n}", "025", "1448", "N", "KOSTNER", "AVE", "1448-1448 N KOSTNER AVE", " ", " ", "August 2010", "217971", "108674", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_025.pdf", null ], "41.90731707", "-87.73830900", [ null, "41.90731707", "-87.73830900", null, false ] ]
, [ 27, "A80DC012-4706-4877-94A7-8283449E0B74", 27, 1350410891, "390945", 1350410891, "390945", "{\n}", "026", "224", "N", "CENTRAL", "AVE", "224-224 N CENTRAL AVE", " ", " ", "August 2010", "48577", "2924", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_026.pdf", null ], "41.88511265", "-87.76636644", [ null, "41.88511265", "-87.76636644", null, false ] ]
, [ 28, "8DB835E2-D992-45BB-AABF-D5156000D87D", 28, 1350410891, "390945", 1350410891, "390945", "{\n}", "027", "300", "N", "PULASKI", "RD", "300-316 N PULASKI RD", " ", " ", "August 2010", "14264", "5062", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_027.pdf", null ], "41.88580911", "-87.72599667", [ null, "41.88580911", "-87.72599667", null, false ] ]
, [ 29, "6A38990E-968A-4661-B8CD-6AD647AC68E9", 29, 1350410891, "390945", 1350410891, "390945", "{\n}", "028", "5237", "W", "MADISON", "ST", "5237-5253 W MADISON ST", " ", " ", "August 2010", "10826", "5897", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_028.pdf", null ], "41.88009210", "-87.75673117", [ null, "41.88009210", "-87.75673117", null, false ] ]
, [ 30, "F11D1CFF-0908-48F9-AA41-BC578A94D4D5", 30, 1350410891, "390945", 1350410891, "390945", "{\n}", "029", "5088", "W", "JACKSON", "BLVD", "5088-5088 W JACKSON BLVD", " ", " ", "August 2010", "42879", "16758", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_029.pdf", null ], "41.87725772", "-87.75300393", [ null, "41.87725772", "-87.75300393", null, false ] ]
, [ 31, "D38D19EB-1971-41AC-B056-56EBF1FBEC59", 31, 1350410891, "390945", 1350410891, "390945", "{\n}", "030", "645", "S", "CENTRAL", "AVE", "645-645 S CENTRAL AVE", "LORETTO HOSPITAL", " ", "August 2010", "39720", "1065", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_030.pdf", null ], "41.87217559", "-87.76290827", [ null, "41.87217559", "-87.76290827", null, false ] ]
, [ 32, "20F2BC57-9717-46D0-BA70-A9302275247C", 32, 1350410891, "390945", 1350410891, "390945", "{\n}", "031", "4041", "W", "ROOSEVELT", "RD", "4041-4041 W ROOSEVELT RD", " ", " ", "August 2010", "13912", "558", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_031.pdf", null ], "41.86591166", "-87.72724603", [ null, "41.86591166", "-87.72724603", null, false ] ]
, [ 33, "33543D05-F6FB-4290-8A03-B949A4F51CF1", 33, 1350410891, "390945", 1350410891, "390945", "{\n}", "032", "5739", "W", "ROOSEVELT", "RD", "5739-5739 W ROOSEVELT RD", " ", " ", "August 2010", "42627", "7588", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_032.pdf", null ], "41.86641947", "-87.76761467", [ null, "41.86641947", "-87.76761467", null, false ] ]
, [ 34, "718CCA86-3AE3-48D1-973D-39EB24312B70", 34, 1350410891, "390945", 1350410891, "390945", "{\n}", "033", "4248", "W", "47TH", "ST", "4248-4248 W 47TH ST", " ", " ", "August 2010", "61152", "15033", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_033.pdf", null ], "41.80917870", "-87.73076689", [ null, "41.80917870", "-87.73076689", null, false ] ]
, [ 35, "BAFEBC0F-8A81-462B-BB8D-42C9E99AA8CA", 35, 1350410891, "390945", 1350410891, "390945", "{\n}", "034", "4707", "W", "MARQUETTE", "RD", "4707-4707 W MARQUETTE RD", "AZUELA SCHOOL", " ", "August 2010", "43854", "12063", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_034.pdf", null ], "41.77076203", "-87.73985861", [ null, "41.77076203", "-87.73985861", null, false ] ]
, [ 36, "14D65D94-4078-4E2C-B0A5-BB7EA228F576", 36, 1350410891, "390945", 1350410891, "390945", "{\n}", "035", "7903", "S", "CICERO", "AVE", "7903-8071 S CICERO AVE", " SCOTTSDALE SHOPPING CENTER", " ", "August 2010", "291085", "138706", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_035.pdf", null ], "41.74808551", "-87.73873728", [ null, "41.74808551", "-87.73873728", null, false ] ]
, [ 37, "4B028647-5021-411E-8A5B-3634667C74F6", 37, 1350410891, "390945", 1350410891, "390945", "{\n}", "036", "6700", "N", "WHIPPLE", "ST", "6700-6700 N WHIPPLE ST", "WEST RIDGE SCHOOL", " ", "August 2010", "40040", "19231", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_036.pdf", null ], "42.00267713", "-87.70609349", [ null, "42.00267713", "-87.70609349", null, false ] ]
, [ 38, "3B3EC247-0269-48D8-8E6E-17D93EC9EFF2", 38, 1350410891, "390945", 1350410891, "390945", "{\n}", "037", "5983", "N", "LINCOLN", "AVE", "5983-5983 N LINCOLN AVE", " ", " ", "August 2010", "6181", "2254", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_037.pdf", null ], "41.99019345", "-87.70653241", [ null, "41.99019345", "-87.70653241", null, false ] ]
, [ 39, "9FCB1E80-8B95-4234-8F4E-BE0054E86C33", 39, 1350410891, "390945", 1350410891, "390945", "{\n}", "038", "5976", "N", "LINCOLN", "AVE", "5976-5980 N LINCOLN AVE", " ", " ", "August 2010", "5354", "2230", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_038.pdf", null ], "41.98965297", "-87.70655610", [ null, "41.98965297", "-87.70655610", null, false ] ]
, [ 40, "8596FB63-7E52-44DC-8D4B-DDDA4FAFB977", 40, 1350410891, "390945", 1350410891, "390945", "{\n}", "039", "5501", "N", "KIMBALL", "AVE", "5501-5501 N KIMBALL AVE", " ", " ", "August 2010", "49472", "3482", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_039.pdf", null ], "41.98237567", "-87.71318161", [ null, "41.98237567", "-87.71318161", null, false ] ]
, [ 41, "C6388A8B-C115-4453-924B-B644BEB6C2E3", 41, 1350410891, "390945", 1350410891, "390945", "{\n}", "040", "2050", "W", "PETERSON", "AVE", "2050-2126 W PETERSON AVE", " ", " ", "August 2010", "156788", "62797", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_040.pdf", null ], "41.99129486", "-87.68254528", [ null, "41.99129486", "-87.68254528", null, false ] ]
, [ 42, "130E8DB0-4DE9-4D95-9A70-29964CC44FBE", 42, 1350410891, "390945", 1350410891, "390945", "{\n}", "041", "1607", "W", "HOWARD", "ST", "1607-1607 W HOWARD ST", " ", " ", "August 2010", "19086", "4350", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_041.pdf", null ], "42.01955209", "-87.67156653", [ null, "42.01955209", "-87.67156653", null, false ] ]
, [ 43, "BA15FA91-F300-484D-9171-6245B3985607", 43, 1350410891, "390945", 1350410891, "390945", "{\n}", "042", "7330", "N", "CLARK", "ST", "7330-7352 N CLARK ST", "FIREHOUSE E102", " ", "August 2010", "14698", "5490", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_042.pdf", null ], "42.01495901", "-87.67550374", [ null, "42.01495901", "-87.67550374", null, false ] ]
, [ 44, "63CC5292-3EDE-4AF8-88FA-B518CD279465", 44, 1350410891, "390945", 1350410891, "390945", "{\n}", "043", "6738", "N", "RAVENSWOOD", "AVE", "6738-6738 N RAVENSWOOD AVE", " ", " ", "August 2010", "29054", "8677", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_043.pdf", null ], "42.00000435", "-87.67618389", [ null, "42.00000435", "-87.67618389", null, false ] ]
, [ 45, "CD9E4104-0242-46FA-8655-40CFF159B660", 45, 1350410891, "390945", 1350410891, "390945", "{\n}", "044", "5645", "N", "RAVENSWOOD", "AVE", "5645-5657 N RAVENSWOOD AVE", " ", " ", "August 2010", "22639", "2557", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_044.pdf", null ], "41.98474800", "-87.67402728", [ null, "41.98474800", "-87.67402728", null, false ] ]
, [ 46, "C2194368-9EB7-496E-9550-D3AB66A6ACC8", 46, 1350410891, "390945", 1350410891, "390945", "{\n}", "045", "6014", "N", "CLARK", "ST", "6014-6030 N CLARK ST", "FIREHOUSE E70", " ", "August 2010", "17370", "3585", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_045.pdf", null ], "41.99160278", "-87.67065325", [ null, "41.99160278", "-87.67065325", null, false ] ]
, [ 47, "09ECD380-D36A-4650-8F48-DBCF07AF68F9", 47, 1350410891, "390945", 1350410891, "390945", "{\n}", "046", "1401", "W", "DEVON", "AVE", "1401-1401 W DEVON AVE", " ", " ", "August 2010", "4015", "904", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_046.pdf", null ], "41.99797881", "-87.66566479", [ null, "41.99797881", "-87.66566479", null, false ] ]
, [ 48, "71919840-8294-4323-A323-2E647F9EDBE9", 48, 1350410891, "390945", 1350410891, "390945", "{\n}", "047", "6034", "N", "BROADWAY", " ", "6034-6034 N BROADWAY", " ", " ", "August 2010", "3857", "1078", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_047.pdf", null ], "41.99195424", "-87.66078016", [ null, "41.99195424", "-87.66078016", null, false ] ]
, [ 49, "C5342150-1AE1-45C8-8398-E12184B1229A", 49, 1350410891, "390945", 1350410891, "390945", "{\n}", "048", "1209", "W", "ARTHUR", "AVE", "1209-1209 W ARTHUR AVE", " ", " ", "August 2010", "23077", "2013", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_048.pdf", null ], "42.00002559", "-87.66089751", [ null, "42.00002559", "-87.66089751", null, false ] ]
, [ 50, "360D8188-859A-42B1-8E27-EE55CB29FA53", 50, 1350410891, "390945", 1350410891, "390945", "{\n}", "049", "1068", "W", "SHERIDAN", "RD", "1068-1068 W SHERIDAN RD", "FLANNER HALL", "LOYOLA UNIV. LAKESHORE CAMPUS", "August 2010", "40046", "5854", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_049.pdf", null ], "41.99871601", "-87.65752303", [ null, "41.99871601", "-87.65752303", null, false ] ]
, [ 51, "B79BEF37-631C-4842-BB73-5581B5294088", 51, 1350410891, "390945", 1350410891, "390945", "{\n}", "050", "1027", "W", "LOYOLA", "AVE", "1027-1027 W LOYOLA AVE", " ", " ", "August 2010", "20399", "3439", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_050.pdf", null ], "42.00019898", "-87.65631535", [ null, "42.00019898", "-87.65631535", null, false ] ]
, [ 52, "6D245CDA-3376-4C7E-A3BB-48C2F7E24726", 52, 1350410891, "390945", 1350410891, "390945", "{\n}", "051", "1122", "W", "CATALPA", "AVE", "1122-1124 W CATALPA AVE", " ", " ", "August 2010", "25447", "6236", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_051.pdf", null ], "41.98240533", "-87.65906007", [ null, "41.98240533", "-87.65906007", null, false ] ]
, [ 53, "BCE12160-6B54-4119-9B3C-61431B07CB03", 53, 1350410891, "390945", 1350410891, "390945", "{\n}", "052", "4929", "N", "SAWYER", "AVE", "4929-4929 N SAWYER AVE", " ", " ", "August 2010", "43678", "3887", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_052.pdf", null ], "41.97159023", "-87.70950226", [ null, "41.97159023", "-87.70950226", null, false ] ]
, [ 54, "2B419FAF-DF7F-4D3D-B223-D0FBC56728C4", 54, 1350410891, "390945", 1350410891, "390945", "{\n}", "053", "5022", "N", "KEDZIE", "AVE", "5022-5040 N KEDZIE AVE", " ", " ", "August 2010", "46124", "8559", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_053.pdf", null ], "41.97329686", "-87.70894870", [ null, "41.97329686", "-87.70894870", null, false ] ]
, [ 55, "19D49CEA-7BB5-4E2B-ACD7-6A69F70F3F46", 55, 1350410891, "390945", 1350410891, "390945", "{\n}", "054", "3729", "W", "LELAND", "AVE", "3729-3729 W LELAND AVE", "ASPIRA-HAUGAN SCHOOL", " ", "August 2010", "52829", "3841", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_054.pdf", null ], "41.96632651", "-87.72116571", [ null, "41.96632651", "-87.72116571", null, false ] ]
, [ 56, "67E9CFBE-91CF-426E-A44D-80FE9CFBFC15", 56, 1350410891, "390945", 1350410891, "390945", "{\n}", "055", "2727", "W", "WINONA", "ST", "2727-2727 W WINONA ST", " ", " ", "August 2010", "36725", "6381", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_055.pdf", null ], "41.97443051", "-87.69700779", [ null, "41.97443051", "-87.69700779", null, false ] ]
, [ 57, "371E912E-7B55-422D-B83C-8B3BAEBE3058", 57, 1350410891, "390945", 1350410891, "390945", "{\n}", "056", "4509", "N", "MAPLEWOOD", "AVE", "4509-4509 N MAPLEWOOD AVE", " ", " ", "August 2010", "4147", "1950", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_056.pdf", null ], "41.96382616", "-87.69194360", [ null, "41.96382616", "-87.69194360", null, false ] ]
, [ 58, "96EA4917-5178-4E3D-864B-6EE8FEBC9358", 58, 1350410891, "390945", 1350410891, "390945", "{\n}", "057", "3354", "W", "BELMONT", "AVE", "3354-3354 W BELMONT AVE", " ", " ", "August 2010", "5709", "1794", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_057.pdf", null ], "41.93963006", "-87.70981019", [ null, "41.93963006", "-87.70981019", null, false ] ]
, [ 59, "2DFA730E-B7F5-4CC3-9419-6A6F28B6CCB2", 59, 1350410891, "390945", 1350410891, "390945", "{\n}", "058", "2822", "N", "KEDZIE", "AVE", "2822-2822 N KEDZIE AVE", " ", " ", "August 2010", "1528", "687", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_058.pdf", null ], "41.93276094", "-87.70773083", [ null, "41.93276094", "-87.70773083", null, false ] ]
, [ 60, "F1E82613-FDE3-41B7-8A45-9C872E6B0628", 60, 1350410891, "390945", 1350410891, "390945", "{\n}", "059", "2744", "N", "CALIFORNIA", "AVE", "2744-1744 N CALIFORNIA AVE", null, null, "August 2010", "12211", "6098", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_059.pdf", null ], "41.93149132", "-87.69790883", [ null, "41.93149132", "-87.69790883", null, false ] ]
, [ 61, "185D5C7D-AB59-418A-95D2-B05E80E9EDDD", 61, 1350410891, "390945", 1350410891, "390945", "{\n}", "060", "2959", "W", "ADDISON", "ST", "2959-2959 W ADDISON ST", " ", " ", "August 2010", "157806", "14734", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_060.pdf", null ], "41.94570166", "-87.70202806", [ null, "41.94570166", "-87.70202806", null, false ] ]
, [ 62, "79252FFA-8A7A-4A0A-BB0B-BF24B2937248", 62, 1350410891, "390945", 1350410891, "390945", "{\n}", "061", "2221", "W", "BELMONT", "AVE", "2221-2221 W BELMONT AVE", " ", " ", "August 2010", "6542", "971", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_061.pdf", null ], "41.93926239", "-87.68407435", [ null, "41.93926239", "-87.68407435", null, false ] ]
, [ 63, "4DE8A318-2365-4724-805B-C84F8A8B6EB8", 63, 1350410891, "390945", 1350410891, "390945", "{\n}", "062", "2310", "W", "LOGAN", "BLVD", "2310-2310 W LOGAN BLVD", " ", " ", "August 2010", "41026", "7256", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_062.pdf", null ], "41.93047443", "-87.68584661", [ null, "41.93047443", "-87.68584661", null, false ] ]
, [ 64, "5CBA458E-03E5-44C2-BDF9-7C35A4106BBF", 64, 1350410891, "390945", 1350410891, "390945", "{\n}", "063", "2039", "W", "ROSCOE", "ST", "2039-2041 W ROSCOE ST", " ", " ", "August 2010", "6428", "1149", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_063.pdf", null ], "41.94297946", "-87.67996764", [ null, "41.94297946", "-87.67996764", null, false ] ]
, [ 65, "3ABD4958-0287-427F-92F8-B6BF4A875D38", 65, 1350410891, "390945", 1350410891, "390945", "{\n}", "064", "2004", "W", "LAWRENCE", "AVE", "2004-2004 W LAWRENCE AVE", " ", " ", "August 2010", "19375", "8436", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_064.pdf", null ], "41.96931858", "-87.67951837", [ null, "41.96931858", "-87.67951837", null, false ] ]
, [ 66, "DB12F44B-CDD9-48EB-8438-C872AD3C595E", 66, 1350410891, "390945", 1350410891, "390945", "{\n}", "065", "1810", "W", "GRACE", "ST", "1810-1822 W GRACE ST", " ", " ", "August 2010", "38703", "12886", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_065.pdf", null ], "41.95095540", "-87.67442342", [ null, "41.95095540", "-87.67442342", null, false ] ]
, [ 67, "0CD7A147-FEA3-4849-A4DC-421A7564BC03", 67, 1350410891, "390945", 1350410891, "390945", "{\n}", "066", "1505", "W", "MELROSE", "ST", "1505-1505 W MELROSE ST", " ", " ", "August 2010", "26980", "11983", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_066.pdf", null ], "41.94048115", "-87.66688979", [ null, "41.94048115", "-87.66688979", null, false ] ]
, [ 68, "A1959B9D-3C44-4F9C-B895-CDB5CA9B6C5C", 68, 1350410891, "390945", 1350410891, "390945", "{\n}", "067", "3614", "N", "SOUTHPORT", "AVE", "3614-3636 N SOUTHPORT AVE", " ", " ", "August 2010", "46445", "38045", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_067.pdf", null ], "41.94816680", "-87.66437624", [ null, "41.94816680", "-87.66437624", null, false ] ]
, [ 69, "764DFEFC-DC28-498C-A1E9-CF87631500E1", 69, 1350410891, "390945", 1350410891, "390945", "{\n}", "068", "4449", "N", "BROADWAY", "ST", "4449-4449 N BROADWAY ST", " ", " ", "August 2010", "94241", "58788", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_068.pdf", null ], "41.96292343", "-87.65658878", [ null, "41.96292343", "-87.65658878", null, false ] ]
, [ 70, "93ABEFC2-1A0A-4473-BA58-BE45C1F432F1", 70, 1350410891, "390945", 1350410891, "390945", "{\n}", "069", "4500", "N", "BROADWAY", " ", "4500-4500 N BROADWAY", " ", " ", "August 2010", "16712", "14352", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_069.pdf", null ], "41.96382810", "-87.65689909", [ null, "41.96382810", "-87.65689909", null, false ] ]
, [ 71, "DB05E66E-C070-437B-9AEC-D51BC77896CA", 71, 1350410891, "390945", 1350410891, "390945", "{\n}", "070", "3255", "W", "ALTGELD", "ST", "3255-3255 W ALTGELD ST", "OLD CHICAGO LIBRARY MOVED TO FULLERTON", "LOGAN SQUARE BRANCH", "August 2010", "7756", "5005", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_070.pdf", null ], "41.92634813", "-87.70982930", [ null, "41.92634813", "-87.70982930", null, false ] ]
, [ 72, "C8B51830-57C2-4869-89EC-F6A3F51C454A", 72, 1350410891, "390945", 1350410891, "390945", "{\n}", "071", "2531", "N", "WASHTENAW", "AVE", "2531-2531 N WASHTENAW AVE", " ", " ", "August 2010", "1539", "947", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_071.pdf", null ], "41.92761842", "-87.69479795", [ null, "41.92761842", "-87.69479795", null, false ] ]
, [ 73, "7633DE94-6CE5-4C4F-8B11-BA9A55E30876", 73, 1350410891, "390945", 1350410891, "390945", "{\n}", "072", "1821", "N", "FAIRFIELD", "AVE", "1821-1821 N FAIRFIELD AVE", " ", " ", "August 2010", "1286", "724", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_072.pdf", null ], "41.91456315", "-87.69560780", [ null, "41.91456315", "-87.69560780", null, false ] ]
, [ 74, "D85696BF-974C-4E18-B313-D1E5A5F9A083", 74, 1350410891, "390945", 1350410891, "390945", "{\n}", "073", "2319", "N", "LEAVITT", "ST", "2319-2319 N LEAVITT ST", " ", " ", "August 2010", "1665", "716", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_073.pdf", null ], "41.92330910", "-87.68242087", [ null, "41.92330910", "-87.68242087", null, false ] ]
, [ 75, "85835ED0-626A-4923-9F24-46FEF6519A25", 75, 1350410891, "390945", 1350410891, "390945", "{\n}", "074", "536", "N", "HOMAN", "AVE", "536-536 N HOMAN AVE", " ", " ", "August 2010", "7723", "3394", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_074.pdf", null ], "41.89139049", "-87.71105451", [ null, "41.89139049", "-87.71105451", null, false ] ]
, [ 76, "003A8396-F771-4C0A-927D-83C67948679F", 76, 1350410891, "390945", 1350410891, "390945", "{\n}", "075", "2620", "W", "WASHINGTON", "BLVD", "2620-2620 W WASHINGTON BLVD", " ", " ", "August 2010", "19687", "7693", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_075.pdf", null ], "41.88336577", "-87.69199980", [ null, "41.88336577", "-87.69199980", null, false ] ]
, [ 77, "E8E3D3A3-4A45-4750-8916-9CD060A5EAC3", 77, 1350410891, "390945", 1350410891, "390945", "{\n}", "076", "2511", "W", "MAYPOLE", "AVE", "2511-2511 W MAYPOLE AVE", " ", " ", "August 2010", "9235", "1166", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_076.pdf", null ], "41.88347076", "-87.68918578", [ null, "41.88347076", "-87.68918578", null, false ] ]
, [ 78, "6058204E-7CF7-48A0-BF49-5BA9819B4196", 78, 1350410891, "390945", 1350410891, "390945", "{\n}", "077", "1989", "W", "LAKE", "ST", "1989-1989 W LAKE ST", " ", " ", "August 2010", "8259", "3831", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_077.pdf", null ], "41.88485068", "-87.67603220", [ null, "41.88485068", "-87.67603220", null, false ] ]
, [ 79, "949EA83E-4668-40D1-96C6-66A52BAF9FBD", 79, 1350410891, "390945", 1350410891, "390945", "{\n}", "078", "104", "N", "DAMEN", "AVE", "104-104 N DAMEN AVE", " ", " ", "August 2010", "10355", "4689", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_078.pdf", null ], "41.88390341", "-87.67642383", [ null, "41.88390341", "-87.67642383", null, false ] ]
, [ 80, "BCABB0A8-E5FE-46ED-B711-9A14FB18F6AA", 80, 1350410891, "390945", 1350410891, "390945", "{\n}", "079", "1959", "W", "MAYPOLE", "AVE", "1959-1959 W MAYPOLE AVE", " ", " ", "August 2010", "10968", "3706", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_079.pdf", null ], "41.88429984", "-87.67568531", [ null, "41.88429984", "-87.67568531", null, false ] ]
, [ 81, "F58670E8-46AB-4982-B9C6-6225EA72FE8D", 81, 1350410891, "390945", 1350410891, "390945", "{\n}", "080", "1901", "W", "MAYPOLE", "AVE", "1901-1901 W MAYPOLE AVE", " ", " ", "August 2010", "10345", "1938", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_080.pdf", null ], "41.88431628", "-87.67472299", [ null, "41.88431628", "-87.67472299", null, false ] ]
, [ 82, "EA9E55DE-38AD-4F3E-9578-70E0873428D9", 82, 1350410891, "390945", 1350410891, "390945", "{\n}", "081", "2112", "W", "CHARLESTON", "ST", "2112-2112 W CHARLESTON ST", " ", " ", "August 2010", "1049", "416", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_081.pdf", null ], "41.92015480", "-87.68076271", [ null, "41.92015480", "-87.68076271", null, false ] ]
, [ 83, "7F1CD6E4-ABDA-4DD5-A3F0-E3E23A23A288", 83, 1350410891, "390945", 1350410891, "390945", "{\n}", "082", "1646", "N", "LEAVITT", "ST", "1646-1646 N LEAVITT ST", " ", " ", "August 2010", "2062", "1541", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_082.pdf", null ], "41.91180390", "-87.68265902", [ null, "41.91180390", "-87.68265902", null, false ] ]
, [ 84, "9AD62155-C175-436E-BBAB-FEDED7FD0AE6", 84, 1350410891, "390945", 1350410891, "390945", "{\n}", "083", "1307", "W", "WRIGHTWOOD", "AVE", "1307-1311 W WRIGHTWOOD AVE", " ", " ", "August 2010", "13457", "978", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_083.pdf", null ], "41.92832501", "-87.66136808", [ null, "41.92832501", "-87.66136808", null, false ] ]
, [ 85, "DEE7A15F-E6F7-4ACD-9897-A814F7CF0513", 85, 1350410891, "390945", 1350410891, "390945", "{\n}", "084", "1445", "W", "LILL", "AVE", "1445-1445 W LILL AVE", " ", " ", "August 2010", "1588", "717", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_084.pdf", null ], "41.92766640", "-87.66513066", [ null, "41.92766640", "-87.66513066", null, false ] ]
, [ 86, "6C0D2C61-6BB2-43BB-9CC7-E6AE3C6D66F0", 86, 1350410891, "390945", 1350410891, "390945", "{\n}", "085", "1842", "N", "KINGSBURY", "ST", "1842-1842 N KINGSBURY ST", " ", " ", "August 2010", "22533", "8234", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_085.pdf", null ], "41.91548279", "-87.65822183", [ null, "41.91548279", "-87.65822183", null, false ] ]
, [ 87, "EF357472-2CFF-4F5D-AD12-360C22C18374", 87, 1350410891, "390945", 1350410891, "390945", "{\n}", "086", "1110", "W", "BELDEN", "AVE", "1110-1110 W BELDEN AVE", "DE PAUL UNIVERSITY", " ", "August 2010", "30445", "1186", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_086.pdf", null ], "41.92374513", "-87.65673471", [ null, "41.92374513", "-87.65673471", null, false ] ]
, [ 88, "F9F75D14-C7A0-467C-A7F7-DB746FFC2A80", 88, 1350410891, "390945", 1350410891, "390945", "{\n}", "087", "1152", "W", "BLACKHAWK", "ST", "1152-1152 W BLACKHAWK ST", " ", " ", "August 2010", "91544", "22069", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_087.pdf", null ], "41.90859462", "-87.65586608", [ null, "41.90859462", "-87.65586608", null, false ] ]
, [ 89, "2D553253-9C82-44BE-A1CF-5170B16A100F", 89, 1350410891, "390945", 1350410891, "390945", "{\n}", "088", "1140", "N", "NORTH BRANCH", "ST", "1140-1140 N NORTH BRANCH ST", " ", " ", "August 2010", "7944", "7897", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_088.pdf", null ], "41.90236548", "-87.65544705", [ null, "41.90236548", "-87.65544705", null, false ] ]
, [ 90, "DCD3474F-0B5F-4EAB-9192-D95CEFCC5386", 90, 1350410891, "390945", 1350410891, "390945", "{\n}", "089", "1313", "W", "OHIO", "ST", "1313-1313 W OHIO ST", " ", " ", "August 2010", "2900", "1943", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_089.pdf", null ], "41.89226118", "-87.66010816", [ null, "41.89226118", "-87.66010816", null, false ] ]
, [ 91, "AB592C10-F7D3-42B4-9ADD-D9DF15BD9B07", 91, 1350410891, "390945", 1350410891, "390945", "{\n}", "091", "1237", "W", "FULLERTON", "AVE", "1237-1237 W FULLERTON AVE", " ", " ", "August 2010", "44190", "13140", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_091.pdf", null ], "41.92494696", "-87.65997776", [ null, "41.92494696", "-87.65997776", null, false ] ]
, [ 92, "C62BC9D1-3559-4C34-9F23-A8C8CA59F514", 92, 1350410891, "390945", 1350410891, "390945", "{\n}", "092", "2230", "N", "DOMINICK", "ST", "2230-2230 N DOMINICK ST", " ", " ", "August 2010", "22053", "6153", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_092.pdf", null ], "41.92216303", "-87.66728622", [ null, "41.92216303", "-87.66728622", null, false ] ]
, [ 93, "027705CA-D2C1-463A-8BAA-05687B4E0D5B", 93, 1350410891, "390945", 1350410891, "390945", "{\n}", "093", "2100", "N", "ELSTON", "AVE", "2100-2100 N ELSTON AVE", " ", " ", "August 2010", "46396", "26569", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_093.pdf", null ], "41.91909131", "-87.66949337", [ null, "41.91909131", "-87.66949337", null, false ] ]
, [ 94, "E23E6258-D2BF-435F-A45C-CD7F7CB463A9", 94, 1350410891, "390945", 1350410891, "390945", "{\n}", "094", "2140", "N", "ELSTON", "AVE", "2140-2140 N ELSTON AVE", " ", " ", "August 2010", "140234", "40632", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_094.pdf", null ], "41.92044940", "-87.67181989", [ null, "41.92044940", "-87.67181989", null, false ] ]
, [ 95, "DD87BF56-E87E-43FA-8CCA-12EFC5882C90", 95, 1350410891, "390945", 1350410891, "390945", "{\n}", "095", "3948", "W", "24TH", "ST", "3948-3958 W 24TH ST", " ", " ", "August 2010", "15981", "14249", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_095.pdf", null ], "41.84834867", "-87.72366815", [ null, "41.84834867", "-87.72366815", null, false ] ]
, [ 96, "2241879C-EA07-4CB7-8A2C-BC18B4FDD8ED", 96, 1350410891, "390945", 1350410891, "390945", "{\n}", "096", "2606", "W", "MADISON", "ST", "2606-2606 W MADISON ST", " ", " ", "August 2010", "29692", "11285", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_096.pdf", null ], "41.88145416", "-87.69072999", [ null, "41.88145416", "-87.69072999", null, false ] ]
, [ 97, "624857F4-FBDA-4DD4-803F-D5DA085656C3", 97, 1350410891, "390945", 1350410891, "390945", "{\n}", "097", "1360", "S", "BLUE ISLAND", "AVE", "1360-1360 S BLUE ISLAND AVE", "ENGINE COMPANY E18", " ", "August 2010", "16554", "4877", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_097.pdf", null ], "41.86462166", "-87.65599642", [ null, "41.86462166", "-87.65599642", null, false ] ]
, [ 98, "70388714-7674-498F-BBFE-00CF2FB3BCE8", 98, 1350410891, "390945", 1350410891, "390945", "{\n}", "098", "3210", "S", "WOLCOTT", "AVE", "3210-3210 S WOLCOTT AVE", " ", " ", "August 2010", "138394", "62625", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_098.pdf", null ], "41.83616862", "-87.67429580", [ null, "41.83616862", "-87.67429580", null, false ] ]
, [ 99, "AFFEB144-2112-4BB7-AFFA-2629FBE9BDEC", 99, 1350410891, "390945", 1350410891, "390945", "{\n}", "099", "3415", "W", "ARTHINGTON", "ST", "3415-3415 W ARTHINGTON ST", " ", " ", "August 2010", "19369", "5306", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_099.pdf", null ], "41.86968614", "-87.71205076", [ null, "41.86968614", "-87.71205076", null, false ] ]
, [ 100, "AE822EDC-5F1E-49A9-B236-2E4EA259768E", 100, 1350410891, "390945", 1350410891, "390945", "{\n}", "100", "2750", "W", "ROOSEVELT", "RD", "2750-2750 W ROOSEVELT RD", "CHICAGO CHRISTIAN INDUSTRIAL LEAGUE", " ", "August 2010", "35240", "3260", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_100.pdf", null ], "41.86680004", "-87.69519057", [ null, "41.86680004", "-87.69519057", null, false ] ]
, [ 101, "8E087DEE-7DD8-42EA-B208-6DF7C2B5ED25", 101, 1350410891, "390945", 1350410891, "390945", "{\n}", "101", "1211", "W", "ROOSEVELT", "RD", "1211-1211 W ROOSEVELT RD", " ", " ", "August 2010", "14773", "7179", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_101.pdf", null ], "41.86665020", "-87.65701767", [ null, "41.86665020", "-87.65701767", null, false ] ]
, [ 102, "4D5E3D74-98F0-4880-A93A-65BFFE9FEC71", 102, 1350410891, "390945", 1350410891, "390945", "{\n}", "102", "1402", "W", "19TH", "ST", "1402-1402 W 19TH ST", " ", " ", "August 2010", "1593", "1151", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_102.pdf", null ], "41.85594698", "-87.66158668", [ null, "41.85594698", "-87.66158668", null, false ] ]
, [ 103, "393AD263-D6C8-4984-AEBE-120B3AF4EAC1", 103, 1350410891, "390945", 1350410891, "390945", "{\n}", "103", "506", "N", "LEAVITT", "ST", "506-526 N LEAVITT ST", " ", " ", "August 2010", "20813", "3583", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_103.pdf", null ], "41.87432228", "-87.68155227", [ null, "41.87432228", "-87.68155227", null, false ] ]
, [ 104, "813CFC07-0916-4CBE-87C8-F9DF611C1EDB", 104, 1350410891, "390945", 1350410891, "390945", "{\n}", "104", "820", "S", "DAMEN", "AVE", "820-936 S DAMEN AVE", "VETERANS WEST SIDE HOSPITAL", "WEST SIDE MEDICAL CENTER", "August 2010", "180670", "19327", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_104.pdf", null ], "41.87058415", "-87.67809493", [ null, "41.87058415", "-87.67809493", null, false ] ]
, [ 105, "B2FE66AD-ABB9-4CD4-9D0B-A6F214CDC15C", 105, 1350410891, "390945", 1350410891, "390945", "{\n}", "105", "1445", "W", "21ST", "PL", "1445-1445 W 21ST PL", " ", " ", "August 2010", "33583", "15561", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_105.pdf", null ], "41.85276860", "-87.66290463", [ null, "41.85276860", "-87.66290463", null, false ] ]
, [ 106, "2936FB3B-8230-4E87-BA19-5B87522F812C", 106, 1350410891, "390945", 1350410891, "390945", "{\n}", "106", "2916", "W", "47TH", "ST", "2916-2916 W 47TH ST", " ", " ", "August 2010", "16145", "4833", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_106.pdf", null ], "41.80867494", "-87.69689385", [ null, "41.80867494", "-87.69689385", null, false ] ]
, [ 107, "BC28CC11-244E-4B1B-B856-C6CCC88B7F88", 107, 1350410891, "390945", 1350410891, "390945", "{\n}", "107", "3510", "W", "55TH", "ST", "3510-3510 W 55TH ST", "HERNANDEZ SCHOOL", " ", "August 2010", "52818", "15075", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_107.pdf", null ], "41.79378609", "-87.71172815", [ null, "41.79378609", "-87.71172815", null, false ] ]
, [ 108, "9132F607-0750-4EB1-A879-CA0E9840890E", 108, 1350410891, "390945", 1350410891, "390945", "{\n}", "108", "5400", "S", "ST LOUIS", "AVE", "5400-5400 S ST LOUIS AVE", "SOLORIO HIGH SCHOOL", " ", "August 2010", "96358", "41935", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_108.pdf", null ], "41.79498520", "-87.71170189", [ null, "41.79498520", "-87.71170189", null, false ] ]
, [ 109, "B86391C4-6EEB-4787-B601-3DAFB432C573", 109, 1350410891, "390945", 1350410891, "390945", "{\n}", "109", "3456", "W", "38TH", "ST", "3456-3456 W 38TH ST", "CALMECA SCHOOL", " ", "August 2010", "42970", "26652", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_109.pdf", null ], "41.82495608", "-87.71130199", [ null, "41.82495608", "-87.71130199", null, false ] ]
, [ 110, "BE5A0F45-E0D6-4AF0-8257-E9ABA924B347", 110, 1350410891, "390945", 1350410891, "390945", "{\n}", "110", "4551", "S", "WHIPPLE", "ST", "4551-4551 S WHIPPLE ST", " ", " ", "August 2010", "124014", "49847", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_110.pdf", null ], "41.81096093", "-87.68317438", [ null, "41.81096093", "-87.68317438", null, false ] ]
, [ 111, "14B388E1-68D0-4FE1-9D1C-3D17955BAB0F", 111, 1350410891, "390945", 1350410891, "390945", "{\n}", "111", "2323", "W", "PERSHING", "RD", "2323-2323 W PERSHING RD", " ", " ", "August 2010", "46581", "18041", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_111.pdf", null ], "41.82263225", "-87.68315905", [ null, "41.82263225", "-87.68315905", null, false ] ]
, [ 112, "997EF65E-21E5-4F34-B051-02706D0FF2F3", 112, 1350410891, "390945", 1350410891, "390945", "{\n}", "112", "4158", "S", "ASHLAND", "AVE", "4158-4158 S ASHLAND AVE", "MC'DONALDS", " ", "August 2010", "4914", "3840", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_112.pdf", null ], "41.81793308", "-87.66576636", [ null, "41.81793308", "-87.66576636", null, false ] ]
, [ 113, "C95D8DD1-E9DB-449E-8445-125E4256C3E1", 113, 1350410891, "390945", 1350410891, "390945", "{\n}", "113", "3300", "W", "71ST", "ST", "3300-3300 W 71ST ST", "TARKINGTON SCHOLASTIC ACADEMY", "CHICAGO PUBLIC SCHOOLS", "August 2010", "63731", "13453", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_113.pdf", null ], "41.76477919", "-87.70723572", [ null, "41.76477919", "-87.70723572", null, false ] ]
, [ 114, "DEE02BB1-3A3D-4783-963B-445AD6AFD78F", 114, 1350410891, "390945", 1350410891, "390945", "{\n}", "114", "2754", "W", "LITHUANIAN PLAZA", "CT", "2754-2754 W LITHUANIAN PLAZA CT", " ", " ", "August 2010", "7463", "1899", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_114.pdf", null ], "41.76841928", "-87.69251180", [ null, "41.76841928", "-87.69251180", null, false ] ]
, [ 115, "A4ADCE4A-DE87-4B60-B2D4-7F519F9DACAD", 115, 1350410891, "390945", 1350410891, "390945", "{\n}", "115", "7486", "S", "ROCKWELL", "ST", "7486-7486 S ROCKWELL ST", " ", " ", "August 2010", "15036", "5978", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_115.pdf", null ], "41.75815521", "-87.68851997", [ null, "41.75815521", "-87.68851997", null, false ] ]
, [ 116, "E3EDE23C-9D1B-40A0-855D-1C4686101C0D", 116, 1350410891, "390945", 1350410891, "390945", "{\n}", "116", "2839", "W", "79TH", "ST", "2839-2839 W 79TH ST", " ", " ", "August 2010", "12600", "8950", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_116.pdf", null ], "41.74967420", "-87.69322964", [ null, "41.74967420", "-87.69322964", null, false ] ]
, [ 117, "D1B83112-0178-4047-9AB5-A2203907CA6E", 117, 1350410891, "390945", 1350410891, "390945", "{\n}", "117", "1834", "W", "80TH", "ST", "1834-1834 W 80TH ST", " ", " ", "August 2010", "11436", "3518", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_117.pdf", null ], "41.74860818", "-87.66979420", [ null, "41.74860818", "-87.66979420", null, false ] ]
, [ 118, "33999F65-626A-48DD-9670-8C438D970CE9", 118, 1350410891, "390945", 1350410891, "390945", "{\n}", "118", "6720", "S", "PAULINA", "ST", "6720-6740 S PAULINA ST", "DAVIS MAGNET SCHOOL", " ", "August 2010", "43743", "2513", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_118.pdf", null ], "41.77062957", "-87.66666762", [ null, "41.77062957", "-87.66666762", null, false ] ]
, [ 119, "C6F26B60-84D5-44AE-B9EB-82DDEA902AB2", 119, 1350410891, "390945", 1350410891, "390945", "{\n}", "119", "2300", "W", "64TH", "ST", "2300-2300 W 64TH ST", " ", " ", "August 2010", "45822", "3686", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_119.pdf", null ], "41.77766510", "-87.68182799", [ null, "41.77766510", "-87.68182799", null, false ] ]
, [ 120, "5D5EEF18-83F5-452B-9752-99C8D78F15E6", 120, 1350410891, "390945", 1350410891, "390945", "{\n}", "120", "1400", "W", "63RD", "ST", "1400-1400 W 63RD ST", " ", " ", "August 2010", "24946", "18713", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_120.pdf", null ], "41.77979591", "-87.66014556", [ null, "41.77979591", "-87.66014556", null, false ] ]
, [ 121, "27A02987-09CA-4A3E-9E46-60524BA6D712", 121, 1350410891, "390945", 1350410891, "390945", "{\n}", "121", "1724", "W", "95TH", "ST", "1724-1724 W 95TH ST", "FIRE HOUSE E121", " ", "August 2010", "14648", "4718", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_121.pdf", null ], "41.72158913", "-87.66578281", [ null, "41.72158913", "-87.66578281", null, false ] ]
, [ 122, "0088161D-7ED4-401C-A589-C6560AA1D251", 122, 1350410891, "390945", 1350410891, "390945", "{\n}", "122", "11840", "S", "MARSHFIELD", "AVE", "11840-11840 S MARSHFIELD AVE", "TARGET", " ", "August 2010", "129665", "65741", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_122.pdf", null ], "41.67897469", "-87.66522770", [ null, "41.67897469", "-87.66522770", null, false ] ]
, [ 123, "B9CCB08B-AD05-4409-85D0-0AEDD4496C51", 123, 1350410891, "390945", 1350410891, "390945", "{\n}", "123", "11600", "S", "MARSHFIELD", "AVE", "11600-11750 S MARSHFIELD AVE", " ", " ", "August 2010", "251665", "41916", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_123.pdf", null ], "41.68024732", "-87.66462883", [ null, "41.68024732", "-87.66462883", null, false ] ]
, [ 124, "D08B75F1-659A-4A4A-8765-657F15D67F8B", 124, 1350410891, "390945", 1350410891, "390945", "{\n}", "124", "2320", "W", "113TH", "PL", "2320-2320 W 113TH PL", "WASHINGTON & JANE SMITH HOME", " ", "August 2010", "104006", "15468", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_124.pdf", null ], "41.68781485", "-87.67965631", [ null, "41.68781485", "-87.67965631", null, false ] ]
, [ 125, "EC059D56-0E15-44B0-8024-AF853E3E3839", 125, 1350410891, "390945", 1350410891, "390945", "{\n}", "125", "831", "W", "AINSLIE", "ST", "831-831 W AINSLIE ST", " ", " ", "August 2010", "2586", "1106", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_125.pdf", null ], "41.97136767", "-87.65154236", [ null, "41.97136767", "-87.65154236", null, false ] ]
, [ 126, "7FADF9E4-9DFB-43D7-B5C7-1BD52FD3554F", 126, 1350410891, "390945", 1350410891, "390945", "{\n}", "126", "4700", "N", "MARINE", "DR", "4700-4700 N MARINE DR", " ", " ", "August 2010", "28249", "19414", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_126.pdf", null ], "41.96770400", "-87.64966933", [ null, "41.96770400", "-87.64966933", null, false ] ]
, [ 127, "D3C29638-BDBE-4F9E-B8CF-1C2A8CCC3609", 127, 1350410891, "390945", 1350410891, "390945", "{\n}", "127", "3630", "N", "HALSTED", "ST", "3630-3656 N HALSTED ST", " ", " ", "August 2010", "44423", "4682", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_127.pdf", null ], "41.94831394", "-87.64975524", [ null, "41.94831394", "-87.64975524", null, false ] ]
, [ 128, "60FF56CA-142D-422D-88F8-948B63FD9837", 128, 1350410891, "390945", 1350410891, "390945", "{\n}", "128", "812", "W", "ADDISON", "ST", "812-830 W ADDISON ST", " ", " ", "August 2010", "35728", "33675", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_128.pdf", null ], "41.94782883", "-87.65031917", [ null, "41.94782883", "-87.65031917", null, false ] ]
, [ 129, "DD49A1E4-2BBD-4885-B36B-C0CD91DA39AC", 129, 1350410891, "390945", 1350410891, "390945", "{\n}", "129", "856", "W", "ADDISON", "ST", "856-856 W ADDISON ST", " ", " ", "August 2010", "27867", "20481", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_129.pdf", null ], "41.94755684", "-87.65118960", [ null, "41.94755684", "-87.65118960", null, false ] ]
, [ 130, "429E18D9-C170-4E72-9563-27D801B40FEC", 130, 1350410891, "390945", 1350410891, "390945", "{\n}", "130", "3511", "N", "FREMONT", "ST", "3511-3511 N FREMONT ST", " ", " ", "August 2010", "1542", "1112", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_130.pdf", null ], "41.94587146", "-87.65157883", [ null, "41.94587146", "-87.65157883", null, false ] ]
, [ 131, "DB568BE5-8E3F-4AFB-943B-7DF1D45B763E", 131, 1350410891, "390945", 1350410891, "390945", "{\n}", "131", "1000", "E", "OHIO", "ST", "1000-1000 E OHIO ST", "Jardine Water Filtration Plant Complex", " ", "August 2010", "996436", "75259", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_131.pdf", null ], "41.89481635", "-87.60614801", [ null, "41.89481635", "-87.60614801", null, false ] ]
, [ 132, "F3ED273B-3C8A-4578-BE8C-DF00166F8493", 132, 1350410891, "390945", 1350410891, "390945", "{\n}", "132", "505", "N", "LAKE SHORE", "DRIVE", "505-505 N LAKE SHORE DRIVE", "LAKE POINT TOWER", " ", "August 2010", "125502", "89772", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_132.pdf", null ], "41.89158210", "-87.61286909", [ null, "41.89158210", "-87.61286909", null, false ] ]
, [ 133, "4DCB08BF-0F22-4113-A06B-A61E055887BD", 133, 1350410891, "390945", 1350410891, "390945", "{\n}", "133", "2101", "N", "LINCOLN PARK", " ", "2101-2101 N LINCOLN PARK", " ", " ", "August 2010", "23185", "11893", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_133.pdf", null ], "41.92017766", "-87.63204011", [ null, "41.92017766", "-87.63204011", null, false ] ]
, [ 134, "A802902F-6C92-4CC8-B8F9-EF3EE6BA0693", 134, 1350410891, "390945", 1350410891, "390945", "{\n}", "134", "2344", "N", "LINCOLN PARK", " ", "2344-2344 N LINCOLN PARK", " ", " ", "August 2010", "5865", "2814", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_134.pdf", null ], "41.92517996", "-87.63693144", [ null, "41.92517996", "-87.63693144", null, false ] ]
, [ 135, "3BC6EBEB-42B7-47C4-8980-B1A547C383A3", 135, 1350410891, "390945", 1350410891, "390945", "{\n}", "135", "845", "N", "KINGSBURY", "ST", "845-845 N KINGSBURY ST", " ", " ", "August 2010", "30100", "15431", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_135.pdf", null ], "41.89852807", "-87.64330381", [ null, "41.89852807", "-87.64330381", null, false ] ]
, [ 136, "1D268CF6-4853-4FAB-AF3C-5FA3FEB478BE", 136, 1350410891, "390945", 1350410891, "390945", "{\n}", "136", "325", "W", "OHIO", "ST", "325-325 W OHIO ST", "SILVER TOWER", " ", "August 2010", "17451", "1540", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_136.pdf", null ], "41.89212380", "-87.63616309", [ null, "41.89212380", "-87.63616309", null, false ] ]
, [ 137, "8A217394-3061-41A6-AFA3-BD581E0013FD", 137, 1350410891, "390945", 1350410891, "390945", "{\n}", "137", "520", "N", "KINGSBURY", "ST", "520-520 N KINGSBURY ST", "KINGSBURY PLAZA", " ", "August 2010", "33840", "16324", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_137.pdf", null ], "41.89103766", "-87.63988434", [ null, "41.89103766", "-87.63988434", null, false ] ]
, [ 138, "4D946DA5-B705-4B13-969A-DA1C1EA7EA2F", 138, 1350410891, "390945", 1350410891, "390945", "{\n}", "138", "370", "N", "DESPLAINES", "ST", "370-370 N DESPLAINES ST", "JEWEL OSCO", " ", "August 2010", "49427", "35839", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_138.pdf", null ], "41.88873897", "-87.64506551", [ null, "41.88873897", "-87.64506551", null, false ] ]
, [ 139, "485463CE-AB80-4576-A904-6A0AA057214B", 139, 1350410891, "390945", 1350410891, "390945", "{\n}", "139", "365", "N", "JEFFERSON", "ST", "365-365 N JEFFERSON ST", " ", " ", "August 2010", "37927", "12286", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_139.pdf", null ], "41.88865292", "-87.64216142", [ null, "41.88865292", "-87.64216142", null, false ] ]
, [ 140, "58D59E5D-B9B8-457E-B03F-B70EA5F59E46", 140, 1350410891, "390945", 1350410891, "390945", "{\n}", "140", "567", "W", "LAKE", "ST", "567-567 W LAKE ST", " ", " ", "August 2010", "32097", "30121", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_140.pdf", null ], "41.88539594", "-87.64223325", [ null, "41.88539594", "-87.64223325", null, false ] ]
, [ 141, "E0194EA7-AC29-444A-9961-E577C55B4B32", 141, 1350410891, "390945", 1350410891, "390945", "{\n}", "141", "300", "E", "RANDOLPH", "ST", "300-300 E RANDOLPH ST", "BLUE CROSS-BLUE SHIELD", " ", "August 2010", "40906", "6835", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_141.pdf", null ], "41.88548483", "-87.61952954", [ null, "41.88548483", "-87.61952954", null, false ] ]
, [ 142, "F2F15106-4784-432B-B731-77C70D2E2C08", 142, 1350410891, "390945", 1350410891, "390945", "{\n}", "142", "220", "E", "CHICAGO", "AVE", "220-220 E CHICAGO AVE", "MUSEUM OF CONTEMPORARY ART", " ", "August 2010", "56320", "9966", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_142.pdf", null ], "41.89724420", "-87.62046380", [ null, "41.89724420", "-87.62046380", null, false ] ]
, [ 143, "838E320A-D903-4315-BEBC-F8F688C8B7CF", 143, 1350410891, "390945", 1350410891, "390945", "{\n}", "143", "353", "N", "CLARK", "ST", "353-353 N CLARK ST", "353 NORTH CLARK", " ", "August 2010", "46512", "7991", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_143.pdf", null ], "41.88896500", "-87.63015472", [ null, "41.88896500", "-87.63015472", null, false ] ]
, [ 144, "79E3350C-96E7-4A0E-9731-044AFBD63C7A", 144, 1350410891, "390945", 1350410891, "390945", "{\n}", "144", "300", "N", "LA SALLE", "ST", "300-300 N LA SALLE ST", "300 NORTH LASALLE", " ", "August 2010", "38910", "11898", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_144.pdf", null ], "41.88823601", "-87.63295606", [ null, "41.88823601", "-87.63295606", null, false ] ]
, [ 145, "C35DBA42-08D5-42FA-A378-628DE14BEE73", 145, 1350410891, "390945", 1350410891, "390945", "{\n}", "145", "160", "E", "ILLINOIS", "ST", "160-160 E ILLINOIS ST", "KIEFFER BUILDING", " ", "August 2010", "11737", "6783", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_145.pdf", null ], "41.89118225", "-87.62293959", [ null, "41.89118225", "-87.62293959", null, false ] ]
, [ 146, "03645833-C98A-4044-9B91-3B9A27F1DC6C", 146, 1350410891, "390945", 1350410891, "390945", "{\n}", "146", "600", "N", "FAIRBANKS", "CT", "600-600 N FAIRBANKS CT", "600 NORTH FAIRBANKS", " ", "August 2010", "31860", "4479", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_146.pdf", null ], "41.89309882", "-87.62064955", [ null, "41.89309882", "-87.62064955", null, false ] ]
, [ 147, "8751766C-B002-43D3-8364-D7171F360624", 147, 1350410891, "390945", 1350410891, "390945", "{\n}", "147", "300", "E", "ONTARIO", "ST", "300-330 E ONTARIO ST", " ", " ", "August 2010", "32581", "3133", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_147.pdf", null ], "41.89384615", "-87.61982136", [ null, "41.89384615", "-87.61982136", null, false ] ]
, [ 148, "35921865-D9BD-4B02-A689-E6ACEF891E29", 148, 1350410891, "390945", 1350410891, "390945", "{\n}", "148", "321", "E", "ERIE", "ST", "321-321 E ERIE ST", "NORTHWESTERN UNIVERSITY PARKING", " ", "August 2010", "89584", "416", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_148.pdf", null ], "41.89386987", "-87.61924223", [ null, "41.89386987", "-87.61924223", null, false ] ]
, [ 149, "68510871-5438-4110-A82C-3CECA7C9B091", 149, 1350410891, "390945", 1350410891, "390945", "{\n}", "149", "505", "N", "STATE", "ST", "505-505 N STATE ST", " ", " ", "August 2010", "20016", "8566", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_149.pdf", null ], "41.89137296", "-87.62738582", [ null, "41.89137296", "-87.62738582", null, false ] ]
, [ 150, "690A7151-CBC5-4098-BA08-BCD2E9C31873", 150, 1350410891, "390945", 1350410891, "390945", "{\n}", "150", "167", "E", "OHIO", "ST", "167-167 E OHIO ST", " ", " ", "August 2010", "8481", "8053", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_150.pdf", null ], "41.89231085", "-87.62298468", [ null, "41.89231085", "-87.62298468", null, false ] ]
, [ 151, "9568C827-782D-42AC-B3EB-20AB25384273", 151, 1350410891, "390945", 1350410891, "390945", "{\n}", "151", "240", "E", "ILLINOIS", "ST", "240-240 E ILLINOIS ST", "THE FAIRBANKS AT CITYFRONT PLAZA", " ", "August 2010", "42920", "10731", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_151.pdf", null ], "41.89129598", "-87.62066950", [ null, "41.89129598", "-87.62066950", null, false ] ]
, [ 152, "E13DF643-C9F8-46CC-B08B-436F5820632E", 152, 1350410891, "390945", 1350410891, "390945", "{\n}", "152", "5", "E", "GOETHE", "ST", "5-5 E GOETHE ST", " ", " ", "August 2010", "19017", "4498", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_152.pdf", null ], "41.90555922", "-87.62622706", [ null, "41.90555922", "-87.62622706", null, false ] ]
, [ 153, "8BDBCFED-FDD9-4FBF-BDCF-2E75C6772775", 153, 1350410891, "390945", 1350410891, "390945", "{\n}", "153", "1301", "N", "ASTOR", "ST", "1301-1301 N ASTOR ST", " ", " ", "August 2010", "3803", "504", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_153.pdf", null ], "41.90601346", "-87.62712487", [ null, "41.90601346", "-87.62712487", null, false ] ]
, [ 154, "F9DB901F-9344-4FF5-ADFF-292A0E15F469", 154, 1350410891, "390945", 1350410891, "390945", "{\n}", "154", "1555", "N", "ASTOR", "ST", "1555-1555 N ASTOR ST", "POOL AND TENNIS COURTS AT 1555", " ", "August 2010", "19046", "8137", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_154.pdf", null ], "41.91072765", "-87.62729409", [ null, "41.91072765", "-87.62729409", null, false ] ]
, [ 155, "7473D5A9-0C4E-48A8-966C-A46C33C6AA80", 155, 1350410891, "390945", 1350410891, "390945", "{\n}", "155", "1639", "N", "LASALLE", "ST", "1639-1639 N LASALLE ST", " ", " ", "August 2010", "13991", "8162", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_155.pdf", null ], "41.91231433", "-87.63275444", [ null, "41.91231433", "-87.63275444", null, false ] ]
, [ 156, "0BC10F23-BA37-4329-80B4-3A009E831933", 156, 1350410891, "390945", 1350410891, "390945", "{\n}", "156", "1544", "N", "DEARBORN", "PKWY", "1544-1558 N DEARBORN PKWY", " ", " ", "August 2010", "14959", "5170", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_156.pdf", null ], "41.91096131", "-87.63049144", [ null, "41.91096131", "-87.63049144", null, false ] ]
, [ 157, "EBC459D5-3E12-4243-AF44-E85F78555310", 157, 1350410891, "390945", 1350410891, "390945", "{\n}", "157", "59", "W", "NORTH", "BLVD", "59-59 W NORTH BLVD", " ", " ", "August 2010", "28809", "979", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_157.pdf", null ], "41.91059815", "-87.63123754", [ null, "41.91059815", "-87.63123754", null, false ] ]
, [ 158, "B0C934D0-1636-45F2-954C-0D77C7925EC2", 158, 1350410891, "390945", 1350410891, "390945", "{\n}", "158", "1322", "N", "CLYBOURN", "AVE", "1322-1322 N CLYBOURN AVE", " ", " ", "August 2010", "4314", "2213", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_158.pdf", null ], "41.90608115", "-87.64300574", [ null, "41.90608115", "-87.64300574", null, false ] ]
, [ 159, "F9AA9F3F-831D-4C79-BAD9-69D5233C2D81", 159, 1350410891, "390945", 1350410891, "390945", "{\n}", "159", "801", "W", "NORTH", "BLVD", "801-801 W NORTH BLVD", " ", " ", "August 2010", "8278", "6227", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_159.pdf", null ], "41.91062274", "-87.64848594", [ null, "41.91062274", "-87.64848594", null, false ] ]
, [ 160, "2F52BAAF-AA17-4C93-BBA2-0C778889989F", 160, 1350410891, "390945", 1350410891, "390945", "{\n}", "160", "1561", "N", "FREMONT", "ST", "1561-1561 N FREMONT ST", " ", " ", "August 2010", "108653", "9645", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_160.pdf", null ], "41.90990012", "-87.65017993", [ null, "41.90990012", "-87.65017993", null, false ] ]
, [ 161, "58C99999-779B-499F-8BBA-6C3A26DC03E5", 161, 1350410891, "390945", 1350410891, "390945", "{\n}", "161", "1875", "N", "ORCHARD", "ST", "1875-1875 N ORCHARD ST", " ", " ", "August 2010", "5851", "4046", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_161.pdf", null ], "41.91594047", "-87.64563306", [ null, "41.91594047", "-87.64563306", null, false ] ]
, [ 162, "CD9FB5B4-D00E-4665-8B87-E02223822C2C", 162, 1350410891, "390945", 1350410891, "390945", "{\n}", "162", "659", "W", "OHIO", "ST", "659-667 W OHIO ST", " ", " ", "August 2010", "5957", "1184", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_162.pdf", null ], "41.89206372", "-87.64531262", [ null, "41.89206372", "-87.64531262", null, false ] ]
, [ 163, "F4E97DFB-C159-401A-9E5C-7E23D8EFA504", 163, 1350410891, "390945", 1350410891, "390945", "{\n}", "163", "460", "W", "HURON", "ST", "460-460 W HURON ST", " ", " ", "August 2010", "2430", "478", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_163.pdf", null ], "41.89491588", "-87.64089652", [ null, "41.89491588", "-87.64089652", null, false ] ]
, [ 164, "63AA09CA-C166-4FEE-998C-72133C3F7512", 164, 1350410891, "390945", 1350410891, "390945", "{\n}", "164", "679", "N", "KINGSBURY", "ST", "679-679 N KINGSBURY ST", " ", " ", "August 2010", "21486", "4571", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_164.pdf", null ], "41.89435605", "-87.64089522", [ null, "41.89435605", "-87.64089522", null, false ] ]
, [ 165, "0EDF986E-CFC7-403E-BC38-86ABC5FB7EA2", 165, 1350410891, "390945", 1350410891, "390945", "{\n}", "165", "659", "W", "RANDOLPH", "ST", "659-659 W RANDOLPH ST", "R+D659", " ", "August 2010", "28885", "6955", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_165.pdf", null ], "41.88408406", "-87.64449485", [ null, "41.88408406", "-87.64449485", null, false ] ]
, [ 166, "6B2890AD-7DEB-483A-B30C-D80CD3B251E2", 166, 1350410891, "390945", 1350410891, "390945", "{\n}", "166", "117", "N", "JEFFERSON", "ST", "117-119 N JEFFERSON ST", " ", " ", "August 2010", "17862", "7500", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_166.pdf", null ], "41.88382948", "-87.64231624", [ null, "41.88382948", "-87.64231624", null, false ] ]
, [ 167, "E23BD953-490F-4AF3-B6CE-BDBD9248C999", 167, 1350410891, "390945", 1350410891, "390945", "{\n}", "167", "350", "N", "ORLEANS", "ST", "350-350 N ORLEANS ST", " ", " ", "August 2010", "145640", "5077", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_167.pdf", null ], "41.88839207", "-87.63714017", [ null, "41.88839207", "-87.63714017", null, false ] ]
, [ 168, "A898FB5E-2836-4CB8-97A2-9743172FD050", 168, 1350410891, "390945", 1350410891, "390945", "{\n}", "168", "211", "W", "WACKER", "DR", "211-221 W WACKER DR", "211 W WACKER DR", " ", "August 2010", "9823", "1391", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_168.pdf", null ], "41.88658149", "-87.63453035", [ null, "41.88658149", "-87.63453035", null, false ] ]
, [ 169, "58A3EE5A-4BE0-408E-8564-061681770428", 169, 1350410891, "390945", 1350410891, "390945", "{\n}", "169", "78", "E", "WASHINGTON", "ST", "78-78 E WASHINGTON ST", "CHICAGO CULTURAL CENTER", " ", "August 2010", "56605", "25348", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_169.pdf", null ], "41.88399508", "-87.62490770", [ null, "41.88399508", "-87.62490770", null, false ] ]
, [ 170, "E09C44C8-E9BB-4809-8032-F498B9721A75", 170, 1350410891, "390945", 1350410891, "390945", "{\n}", "170", "190", "N", "GARLAND", "CT", "190-190 N GARLAND CT", "THE HERITAGE AT MILLENIUM PARK", " ", "August 2010", "42181", "10844", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_170.pdf", null ], "41.88410164", "-87.62572178", [ null, "41.88410164", "-87.62572178", null, false ] ]
, [ 171, "ABE6430D-12CA-4378-8307-A5F5CB100CAE", 171, 1350410891, "390945", 1350410891, "390945", "{\n}", "171", "181", "N", "CLARK", "ST", "181-191 N CLARK ST", "181 NORTH CLARK", " ", "August 2010", "30809", "12028", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_171.pdf", null ], "41.88560670", "-87.63038748", [ null, "41.88560670", "-87.63038748", null, false ] ]
, [ 172, "2BD197F1-AD4F-42C0-BD45-AD6A1DAB4016", 172, 1350410891, "390945", 1350410891, "390945", "{\n}", "172", "171", "N", "WABASH", "AVE", "171-185 N WABASH AVE", " ", " ", "August 2010", "11904", "2191", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_172.pdf", null ], "41.88577563", "-87.62572167", [ null, "41.88577563", "-87.62572167", null, false ] ]
, [ 173, "A3FEC94E-E92C-457A-B928-071C8C9F1E97", 173, 1350410891, "390945", 1350410891, "390945", "{\n}", "173", "201", "N", "CLARK", "ST", "201-201 N CLARK ST", "GARLAND COURT", " ", "August 2010", "35157", "7003", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_173.pdf", null ], "41.88610807", "-87.63025345", [ null, "41.88610807", "-87.63025345", null, false ] ]
, [ 174, "370F46EF-038E-4E7F-88F6-149CB3401D6F", 174, 1350410891, "390945", 1350410891, "390945", "{\n}", "174", "516", "N", "WELLS", "ST", "516-516 N WELLS ST", "CONTEMPORAINE", " ", "August 2010", "25362", "1757", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_174.pdf", null ], "41.89143753", "-87.63432316", [ null, "41.89143753", "-87.63432316", null, false ] ]
, [ 175, "0CB4D033-DA6E-4DE4-8690-206B1A038BAA", 175, 1350410891, "390945", 1350410891, "390945", "{\n}", "175", "26", "E", "PEARSON", "ST", "26-26 E PEARSON ST", "BAUMHART HALL & TERRY STUDENT CENTER", "LOYOLA UNIVERSITY CHICAGO", "August 2010", "10256", "6398", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_175.pdf", null ], "41.89780562", "-87.62719297", [ null, "41.89780562", "-87.62719297", null, false ] ]
, [ 176, "276F0DA5-0400-4F83-B436-6CEF162FDCED", 176, 1350410891, "390945", 1350410891, "390945", "{\n}", "176", "20", "E", "CHICAGO", "AVE", "20-24 E CHICAGO AVE", " ", " ", "August 2010", "7174", "1494", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_176.pdf", null ], "41.89694905", "-87.62732467", [ null, "41.89694905", "-87.62732467", null, false ] ]
, [ 177, "6E543DD6-18D4-48F0-9D41-8ADCDFE953BA", 177, 1350410891, "390945", 1350410891, "390945", "{\n}", "177", "745", "N", "WABASH", "AVE", "745-747 N WABASH AVE", " ", " ", "August 2010", "17925", "4069", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_177.pdf", null ], "41.89630118", "-87.62639518", [ null, "41.89630118", "-87.62639518", null, false ] ]
, [ 178, "7559F723-0061-4F5A-9BA8-A24180C30BC1", 178, 1350410891, "390945", 1350410891, "390945", "{\n}", "178", "1", "W", "SUPERIOR", "ST", "1-33 W SUPERIOR ST", "ONE SUPERIOR PLACE", " ", "August 2010", "73130", "7172", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_178.pdf", null ], "41.89532593", "-87.62890355", [ null, "41.89532593", "-87.62890355", null, false ] ]
, [ 179, "442699B1-6B41-473D-BFA6-EDCF1E0C6F23", 179, 1350410891, "390945", 1350410891, "390945", "{\n}", "179", "600", "N", "CLARK", "ST", "600-620 N CLARK ST", " ", " ", "August 2010", "16539", "3761", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_179.pdf", null ], "41.89276255", "-87.63155043", [ null, "41.89276255", "-87.63155043", null, false ] ]
, [ 180, "F437C539-D29F-4AEC-BFE1-2B3610CC8FF3", 180, 1350410891, "390945", 1350410891, "390945", "{\n}", "180", "2", "W", "GRAND", "AVE", "2-6 W GRAND AVE", "GRAND PLAZA", " ", "August 2010", "76556", "9004", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_180.pdf", null ], "41.89192427", "-87.62909886", [ null, "41.89192427", "-87.62909886", null, false ] ]
, [ 181, "E6DBCF98-C37E-4CCE-BB75-A74BD17BBC0F", 181, 1350410891, "390945", 1350410891, "390945", "{\n}", "181", "123", "W", "KINZIE", "ST", "123-123 W KINZIE ST", "THE STERLING", " ", "August 2010", "39815", "1209", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_181.pdf", null ], "41.88889522", "-87.63180521", [ null, "41.88889522", "-87.63180521", null, false ] ]
, [ 182, "5F60CEAA-9A71-493B-882E-9A0EC602F1E7", 182, 1350410891, "390945", 1350410891, "390945", "{\n}", "182", "400", "N", "LA SALLE", "DR", "400-400 N LA SALLE DR", " ", " ", "August 2010", "45819", "5649", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_182.pdf", null ], "41.88957496", "-87.63347845", [ null, "41.88957496", "-87.63347845", null, false ] ]
, [ 183, "7BE94AAE-B250-4929-B9F9-5627195F37D9", 183, 1350410891, "390945", 1350410891, "390945", "{\n}", "183", "1004", "N", "CLARK", "ST", "1004-1030 N CLARK ST", "GOLD COAST GALLERIA", " ", "August 2010", "50066", "6193", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_183.pdf", null ], "41.90110896", "-87.63174557", [ null, "41.90110896", "-87.63174557", null, false ] ]
, [ 184, "7B806E74-06C2-4FBE-A5C7-F9246C4A7A1B", 184, 1350410891, "390945", 1350410891, "390945", "{\n}", "184", "190", "E", "WALTON", "PL", "190-190 E WALTON PL", "THE REGENT", " ", "August 2010", "9509", "3568", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_184.pdf", null ], "41.90029014", "-87.62220777", [ null, "41.90029014", "-87.62220777", null, false ] ]
, [ 185, "833295D3-A049-4AE9-9963-88EEDCF1AA0F", 185, 1350410891, "390945", 1350410891, "390945", "{\n}", "185", "1", "E", "ERIE", "ST", "1-1 E ERIE ST", "WINDSOR AT ONTARIO PLACE", "BUKARA RESTAURANT AND WHITE HEN PA", "August 2010", "43714", "14433", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_185.pdf", null ], "41.89361710", "-87.62725118", [ null, "41.89361710", "-87.62725118", null, false ] ]
, [ 186, "7CF5BE13-A6C8-426E-92C4-8D1518740F9C", 186, 1350410891, "390945", 1350410891, "390945", "{\n}", "186", "33", "W", "ONTARIO", "ST", "33-33 W ONTARIO ST", "MILLENIUM CENTRE", " ", "August 2010", "36792", "5436", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_186.pdf", null ], "41.89292365", "-87.62917603", [ null, "41.89292365", "-87.62917603", null, false ] ]
, [ 187, "F0482F4E-624D-4F9B-9569-CC1C177778A6", 187, 1350410891, "390945", 1350410891, "390945", "{\n}", "187", "850", "W", "116TH", "ST", "850-850 W 116TH ST", " ", " ", "August 2010", "48521", "36004", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_187.pdf", null ], "41.68378500", "-87.64376897", [ null, "41.68378500", "-87.64376897", null, false ] ]
, [ 188, "9F82B436-816E-4D17-8F65-760F1A75C126", 188, 1350410891, "390945", 1350410891, "390945", "{\n}", "188", "1215", "W", "119TH", "ST", "1215-1215 W 119TH ST", " ", " ", "August 2010", "62573", "6823", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_188.pdf", null ], "41.67738323", "-87.65403558", [ null, "41.67738323", "-87.65403558", null, false ] ]
, [ 189, "1FB1EC46-A887-4D1E-B68D-B2F7396074B1", 189, 1350410891, "390945", 1350410891, "390945", "{\n}", "189", "100", "W", "111TH", "ST", "100-130 W 111TH ST", " ", " ", "August 2010", "22651", "13718", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_189.pdf", null ], "41.69290960", "-87.62655073", [ null, "41.69290960", "-87.62655073", null, false ] ]
, [ 190, "354F528F-3ED6-4B16-97B3-B1122A8DB72A", 190, 1350410891, "390945", 1350410891, "390945", "{\n}", "190", "240", "W", "104TH", "ST", "240-240 W 104TH ST", "LANGSTON HUGHS SCHOOL", " ", "August 2010", "110690", "11728", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_190.pdf", null ], "41.70596969", "-87.62920560", [ null, "41.70596969", "-87.62920560", null, false ] ]
, [ 191, "421611C9-AC2E-40AF-896E-9E7360A95C7A", 191, 1350410891, "390945", 1350410891, "390945", "{\n}", "191", "1000", "E", "87TH", "ST", "1000-1000 E 87TH ST", "SOFT SHEEN PRODUCTS", " ", "August 2010", "46977", "2068", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_191.pdf", null ], "41.73698258", "-87.59928444", [ null, "41.73698258", "-87.59928444", null, false ] ]
, [ 192, "86CBCB90-2AE0-412F-832C-C4C32BB13810", 192, 1350410891, "390945", 1350410891, "390945", "{\n}", "192", "8300", "S", "COTTAGE GROVE", "AVE", "8300-8300 S COTTAGE GROVE AVE", " ", " ", "August 2010", "18266", "13007", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_192.pdf", null ], "41.74369864", "-87.60544093", [ null, "41.74369864", "-87.60544093", null, false ] ]
, [ 193, "EB7857A6-BD7A-44ED-ADBA-CEDE96B734E7", 193, 1350410891, "390945", 1350410891, "390945", "{\n}", "193", "911", "W", "63RD", "ST", "911-0 W 63RD ST", " ", " ", "August 2010", "11020", "6624", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_193.pdf", null ], "41.77955559", "-87.64781448", [ null, "41.77955559", "-87.64781448", null, false ] ]
, [ 194, "3767556A-47D9-49AE-BD26-24678B0F82D5", 194, 1350410891, "390945", 1350410891, "390945", "{\n}", "194", "6311", "S", "HALSTED", "ST", "6311-6311 S HALSTED ST", " ", " ", "August 2010", "58710", "22337", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_194.pdf", null ], "41.77950059", "-87.64412672", [ null, "41.77950059", "-87.64412672", null, false ] ]
, [ 195, "342EA978-F5C7-4885-934E-8001030D32FE", 195, 1350410891, "390945", 1350410891, "390945", "{\n}", "195", "724", "W", "64TH", "ST", "724-724 W 64TH ST", " ", " ", "August 2010", "75446", "26821", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_195.pdf", null ], "41.77836142", "-87.64362197", [ null, "41.77836142", "-87.64362197", null, false ] ]
, [ 196, "1B90198A-FAD5-49CC-8FB1-322DF276956B", 196, 1350410891, "390945", 1350410891, "390945", "{\n}", "196", "725", "W", "64TH", "ST", "725-725 W 64TH ST", " ", " ", "August 2010", "52590", "39943", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_196.pdf", null ], "41.77751856", "-87.64356135", [ null, "41.77751856", "-87.64356135", null, false ] ]
, [ 197, "879B4B4A-5BE5-49FC-B444-343C97D9D6DC", 197, 1350410891, "390945", 1350410891, "390945", "{\n}", "197", "6054", "S", "DREXEL", "AVE", "6054-6054 S DREXEL AVE", " ", " ", "August 2010", "46373", "8160", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_197.pdf", null ], "41.78447654", "-87.60463889", [ null, "41.78447654", "-87.60463889", null, false ] ]
, [ 198, "66522DAE-3599-45C0-8E71-3BC971EBA002", 198, 1350410891, "390945", 1350410891, "390945", "{\n}", "198", "1011", "E", "61ST", "ST", "1011-1011 E 61ST ST", " ", " ", "August 2010", "93589", "14633", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_198.pdf", null ], "41.78452290", "-87.60027874", [ null, "41.78452290", "-87.60027874", null, false ] ]
, [ 199, "4AED95FA-9CEE-48A3-B2C4-AD88C22B0BF7", 199, 1350410891, "390945", 1350410891, "390945", "{\n}", "199", "6100", "S", "BLACKSTONE", "AVE", "6100-6100 S BLACKSTONE AVE", "EXPERIMENTAL STATION", " ", "August 2010", "10126", "330", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_199.pdf", null ], "41.78420193", "-87.59047056", [ null, "41.78420193", "-87.59047056", null, false ] ]
, [ 200, "9CF5E55D-98B9-455B-8BF4-97C940F6E94C", 200, 1350410891, "390945", 1350410891, "390945", "{\n}", "200", "6400", "S", "DANTE", "AVE", "6400-6434 S DANTE AVE", " ", " ", "August 2010", "55861", "5324", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_200.pdf", null ], "41.77781145", "-87.58977074", [ null, "41.77781145", "-87.58977074", null, false ] ]
, [ 201, "B42EB16C-1552-4790-9691-51CA235742F1", 201, 1350410891, "390945", 1350410891, "390945", "{\n}", "201", "7131", "S", "CHICAGO", "AVE", "7131-7131 S CHICAGO AVE", " ", " ", "August 2010", "23444", "14162", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_201.pdf", null ], "41.76522958", "-87.60400998", [ null, "41.76522958", "-87.60400998", null, false ] ]
, [ 202, "DD511D93-47D6-4393-AD92-4E96CA5DA72B", 202, 1350410891, "390945", 1350410891, "390945", "{\n}", "202", "7200", "S", "INGLESIDE", "AVE", "7200-7200 S INGLESIDE AVE", "NOBLE - COMER SCHOOL", " ", "August 2010", "28998", "6592", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_202.pdf", null ], "41.76406133", "-87.60241041", [ null, "41.76406133", "-87.60241041", null, false ] ]
, [ 203, "C80E14BA-0FE3-46D2-9DBA-A12E62A20A12", 203, 1350410891, "390945", 1350410891, "390945", "{\n}", "203", "7756", "S", "WOODLAWN", "AVE", "7756-7756 S WOODLAWN AVE", " ", " ", "August 2010", "14675", "8070", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_203.pdf", null ], "41.75369037", "-87.59507374", [ null, "41.75369037", "-87.59507374", null, false ] ]
, [ 204, "8C274503-7F48-4EFC-B03B-E2EC7B4FF02A", 204, 1350410891, "390945", 1350410891, "390945", "{\n}", "204", "6739", "S", "CHAMPLAIN", "AVE", "6739-6739 S CHAMPLAIN AVE", " ", " ", "August 2010", "1349", "905", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_204.pdf", null ], "41.77191658", "-87.60908117", [ null, "41.77191658", "-87.60908117", null, false ] ]
, [ 205, "6E820CD4-C4EF-4580-8B25-5705044CD8BA", 205, 1350410891, "390945", 1350410891, "390945", "{\n}", "205", "640", "E", "79TH", "ST", "640-642 E 79TH ST", " ", " ", "August 2010", "10628", "5944", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_205.pdf", null ], "41.75142709", "-87.60855661", [ null, "41.75142709", "-87.60855661", null, false ] ]
, [ 206, "B256DCE8-4894-4797-95B7-ABFBBBA04C9E", 206, 1350410891, "390945", 1350410891, "390945", "{\n}", "206", "6558", "S", "STONY ISLAND", "AVE", "6558-6558 S STONY ISLAND AVE", " ", " ", "August 2010", "5280", "1592", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_206.pdf", null ], "41.77539654", "-87.58681809", [ null, "41.77539654", "-87.58681809", null, false ] ]
, [ 207, "6579E37D-0F90-47EB-9512-6BB383155EDD", 207, 1350410891, "390945", 1350410891, "390945", "{\n}", "207", "8401", "S", "HOLLAND", "AVE", "8401-8401 S HOLLAND AVE", " ", " ", "August 2010", "19173", "10090", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_207.pdf", null ], "41.74249521", "-87.63167945", [ null, "41.74249521", "-87.63167945", null, false ] ]
, [ 208, "CF7043A8-D0DF-4387-80F6-645D4BF5A52D", 208, 1350410891, "390945", 1350410891, "390945", "{\n}", "208", "8411", "S", "HOLLAND", "RD", "8411-8411 S HOLLAND RD", " ", " ", "August 2010", "153105", "129816", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_208.pdf", null ], "41.74080794", "-87.63041170", [ null, "41.74080794", "-87.63041170", null, false ] ]
, [ 209, "8A7B66A1-3832-43D4-BC26-476C9C173C3B", 209, 1350410891, "390945", 1350410891, "390945", "{\n}", "209", "1048", "W", "37TH", "ST", "1048-1048 W 37TH ST", " ", " ", "August 2010", "9031", "4503", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_209.pdf", null ], "41.82728902", "-87.65279440", [ null, "41.82728902", "-87.65279440", null, false ] ]
, [ 210, "4DD207CF-4977-4A7E-8F63-6D903249D8C7", 210, 1350410891, "390945", 1350410891, "390945", "{\n}", "210", "811", "W", "PERSHING", "RD", "811-815 W PERSHING RD", " ", " ", "August 2010", "107059", "11451", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_210.pdf", null ], "41.82299835", "-87.64748703", [ null, "41.82299835", "-87.64748703", null, false ] ]
, [ 211, "7830A7F4-C599-484A-849A-0490C3193095", 211, 1350410891, "390945", 1350410891, "390945", "{\n}", "211", "651", "E", "37TH", "ST", "651-651 E 37TH ST", " ", " ", "August 2010", "6451", "2169", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_211.pdf", null ], "41.82728512", "-87.60951046", [ null, "41.82728512", "-87.60951046", null, false ] ]
, [ 212, "EE1847F0-0780-427C-ABBC-02BDC28E4A07", 212, 1350410891, "390945", 1350410891, "390945", "{\n}", "212", "675", "E", "37TH", "PL", "675-675 E 37TH PL", " ", " ", "August 2010", "3391", "980", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_212.pdf", null ], "41.82647280", "-87.60907199", [ null, "41.82647280", "-87.60907199", null, false ] ]
, [ 213, "0F80FE02-8EC5-4C3F-9622-278F694EBB86", 213, 1350410891, "390945", 1350410891, "390945", "{\n}", "213", "3751", "S", "LANGLEY", "AVE", "3751-3751 S LANGLEY AVE", " ", " ", "August 2010", "5935", "1811", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_213.pdf", null ], "41.82605864", "-87.60954262", [ null, "41.82605864", "-87.60954262", null, false ] ]
, [ 214, "CFDC6D13-B4A1-48DC-9D01-70201BBE595E", 214, 1350410891, "390945", 1350410891, "390945", "{\n}", "214", "600", "E", "PERSHING", "RD", "600-600 E PERSHING RD", " ", " ", "August 2010", "5827", "2225", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_214.pdf", null ], "41.82417004", "-87.61207341", [ null, "41.82417004", "-87.61207341", null, false ] ]
, [ 215, "2E4423B1-4A5B-4637-95A6-E98C8BF1645F", 215, 1350410891, "390945", 1350410891, "390945", "{\n}", "215", "3859", "S", "VINCENNES", "AVE", "3859-3859 S VINCENNES AVE", " ", " ", "August 2010", "5093", "1793", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_215.pdf", null ], "41.82455483", "-87.61216815", [ null, "41.82455483", "-87.61216815", null, false ] ]
, [ 216, "F0EF356E-57D2-45D1-893B-EDEFC8922D36", 216, 1350410891, "390945", 1350410891, "390945", "{\n}", "216", "651", "E", "38TH", "ST", "651-651 E 38TH ST", " ", " ", "August 2010", "7223", "2481", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_216.pdf", null ], "41.82557198", "-87.61114043", [ null, "41.82557198", "-87.61114043", null, false ] ]
, [ 217, "C6961FD0-7167-46D9-AE4E-40C068FC9E9D", 217, 1350410891, "390945", 1350410891, "390945", "{\n}", "217", "3820", "S", "VINCENNES", "AVE", "3820-3820 S VINCENNES AVE", " ", " ", "August 2010", "3523", "1021", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_217.pdf", null ], "41.82552190", "-87.61190414", [ null, "41.82552190", "-87.61190414", null, false ] ]
, [ 218, "36140D13-6021-4821-9290-BEE74A818690", 218, 1350410891, "390945", 1350410891, "390945", "{\n}", "218", "3750", "S", "LANGLEY", "AVE", "3750-3750 S LANGLEY AVE", " ", " ", "August 2010", "5834", "1719", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_218.pdf", null ], "41.82637523", "-87.61057372", [ null, "41.82637523", "-87.61057372", null, false ] ]
, [ 219, "2EA6A16A-7FD5-4DAF-99EF-732475D9AD54", 219, 1350410891, "390945", 1350410891, "390945", "{\n}", "219", "659", "E", "38TH", "PL", "659-659 E 38TH PL", " ", " ", "August 2010", "5068", "1310", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_219.pdf", null ], "41.82506890", "-87.61099933", [ null, "41.82506890", "-87.61099933", null, false ] ]
, [ 220, "8464EB37-2E7E-4D48-9F63-60A3EC7C9AB1", 220, 1350410891, "390945", 1350410891, "390945", "{\n}", "220", "639", "E", "38TH", "PL", "639-639 E 38TH PL", " ", " ", "August 2010", "4984", "1300", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_220.pdf", null ], "41.82509631", "-87.61143196", [ null, "41.82509631", "-87.61143196", null, false ] ]
, [ 221, "772BF662-450C-4263-AD23-F67B479F3D1F", 221, 1350410891, "390945", 1350410891, "390945", "{\n}", "221", "3841", "S", "VINCENNES", "AVE", "3841-3841 S VINCENNES AVE", " ", " ", "August 2010", "5075", "1658", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_221.pdf", null ], "41.82456645", "-87.61270735", [ null, "41.82456645", "-87.61270735", null, false ] ]
, [ 222, "D665DFAB-B952-4957-B7FE-5895F819B8CD", 222, 1350410891, "390945", 1350410891, "390945", "{\n}", "222", "523", "E", "38TH", "PL", "523-523 E 38TH PL", " ", " ", "August 2010", "6709", "2122", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_222.pdf", null ], "41.82503687", "-87.61332946", [ null, "41.82503687", "-87.61332946", null, false ] ]
, [ 223, "6CDD7032-F2AD-4171-AE45-349C5E339A19", 223, 1350410891, "390945", 1350410891, "390945", "{\n}", "223", "3809", "S", "VINCENNES", "AVE", "3809-3809 S VINCENNES AVE", " ", " ", "August 2010", "3516", "978", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_223.pdf", null ], "41.82510339", "-87.61255824", [ null, "41.82510339", "-87.61255824", null, false ] ]
, [ 224, "4782FDAC-A689-470B-AFE3-4DF12021CB47", 224, 1350410891, "390945", 1350410891, "390945", "{\n}", "224", "524", "E", "38TH", "ST", "524-524 E 38TH ST", " ", " ", "August 2010", "6053", "1578", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_224.pdf", null ], "41.82549877", "-87.61346738", [ null, "41.82549877", "-87.61346738", null, false ] ]
, [ 225, "EFDA9706-3336-4F7A-B87D-1880CC1B0F53", 225, 1350410891, "390945", 1350410891, "390945", "{\n}", "225", "537", "E", "38TH", "ST", "537-537 E 38TH ST", " ", " ", "August 2010", "5088", "1532", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_225.pdf", null ], "41.82551266", "-87.61305630", [ null, "41.82551266", "-87.61305630", null, false ] ]
, [ 226, "9371AF8B-B3F0-4B79-8766-3073DEA7450C", 226, 1350410891, "390945", 1350410891, "390945", "{\n}", "226", "3741", "S", "VINCENNES", "AVE", "3741-3741 S VINCENNES AVE", " ", " ", "August 2010", "3626", "1051", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_226.pdf", null ], "41.82638757", "-87.61166327", [ null, "41.82638757", "-87.61166327", null, false ] ]
, [ 227, "8EA284AB-BC20-405B-8D6D-327AD8054DCD", 227, 1350410891, "390945", 1350410891, "390945", "{\n}", "227", "621", "E", "37TH", "ST", "621-621 E 37TH ST", " ", " ", "August 2010", "6735", "2157", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_227.pdf", null ], "41.82720833", "-87.61082485", [ null, "41.82720833", "-87.61082485", null, false ] ]
, [ 228, "076D0711-60EE-439B-98B1-CE8241F84248", 228, 1350410891, "390945", 1350410891, "390945", "{\n}", "228", "3726", "S", "VINCENNES", "AVE", "3726-3726 S VINCENNES AVE", " ", " ", "August 2010", "17519", "4140", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_228.pdf", null ], "41.82711346", "-87.61144965", [ null, "41.82711346", "-87.61144965", null, false ] ]
, [ 229, "106F1F97-ABE0-4728-83EB-F2F5BAAEBF41", 229, 1350410891, "390945", 1350410891, "390945", "{\n}", "229", "4315", "S", "STATE", "ST", "4315-4315 S STATE ST", " ", " ", "August 2010", "3205", "1092", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_229.pdf", null ], "41.81629944", "-87.62708494", [ null, "41.81629944", "-87.62708494", null, false ] ]
, [ 230, "2302BDB3-160C-43B4-8A55-D2526B8B7FA0", 230, 1350410891, "390945", 1350410891, "390945", "{\n}", "230", "4317", "S", "STATE", "ST", "4317-4317 S STATE ST", " ", " ", "August 2010", "2392", "1098", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_230.pdf", null ], "41.81604175", "-87.62712812", [ null, "41.81604175", "-87.62712812", null, false ] ]
, [ 231, "607EF137-6B76-4E38-9C3A-560342095F50", 231, 1350410891, "390945", 1350410891, "390945", "{\n}", "231", "4319", "S", "STATE", "ST", "4319-4319 S STATE ST", " ", " ", "August 2010", "2105", "1085", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_231.pdf", null ], "41.81577555", "-87.62712738", [ null, "41.81577555", "-87.62712738", null, false ] ]
, [ 232, "DCBE26C0-52DF-454E-89E0-BDDBEA51A066", 232, 1350410891, "390945", 1350410891, "390945", "{\n}", "232", "4489", "W", "45TH", "ST", "4489-4489 W 45TH ST", " ", " ", "August 2010", "7542", "2583", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_232.pdf", null ], "41.81330894", "-87.62676197", [ null, "41.81330894", "-87.62676197", null, false ] ]
, [ 233, "CEEB62D9-8583-45D7-952F-AC9542478881", 233, 1350410891, "390945", 1350410891, "390945", "{\n}", "233", "4487", "S", "STATE", "ST", "4487-4487 S STATE ST", " ", " ", "August 2010", "5225", "3886", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_233.pdf", null ], "41.81368058", "-87.62650477", [ null, "41.81368058", "-87.62650477", null, false ] ]
, [ 234, "4C7AC6E8-B0DC-4BEC-8AFF-E00B7E181D7D", 234, 1350410891, "390945", 1350410891, "390945", "{\n}", "234", "4485", "S", "STATE", "ST", "4485-4485 S STATE ST", " ", " ", "August 2010", "4757", "3468", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_234.pdf", null ], "41.81414449", "-87.62652535", [ null, "41.81414449", "-87.62652535", null, false ] ]
, [ 235, "99900F49-02BC-4E76-ACCC-A089F18A9283", 235, 1350410891, "390945", 1350410891, "390945", "{\n}", "235", "542", "S", "CALUMET", "AVE", "542-542 S CALUMET AVE", " ", " ", "August 2010", "12343", "5266", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_235.pdf", null ], "41.79879072", "-87.61729444", [ null, "41.79879072", "-87.61729444", null, false ] ]
, [ 236, "EE9A88CB-732B-4481-B3F8-236A5700460A", 236, 1350410891, "390945", 1350410891, "390945", "{\n}", "236", "5735", "S", "ELLIS", "AVE", "5735-5735 S ELLIS AVE", "SEARLE HALL", "UNIVERSITY OF CHICAGO", "August 2010", "15586", "994", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_236.pdf", null ], "41.79051625", "-87.60068350", [ null, "41.79051625", "-87.60068350", null, false ] ]
, [ 237, "4C0F49DD-BDAC-4019-A3D3-024ABB822EC7", 237, 1350410891, "390945", 1350410891, "390945", "{\n}", "237", "5720", "S", "ELLIS", "AVE", "5720-5720 S ELLIS AVE", "KERSTEN PHYSICS TEACHING CENTER", "U OF CHICAGO", "August 2010", "15567", "1636", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_237.pdf", null ], "41.79110192", "-87.60172193", [ null, "41.79110192", "-87.60172193", null, false ] ]
, [ 238, "8267082A-D96A-487E-99FB-306B9640B540", 238, 1350410891, "390945", 1350410891, "390945", "{\n}", "238", "5724", "S", "DREXEL", "AVE", "5724-5742 S DREXEL AVE", " ", " ", "August 2010", "25401", "1995", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_238.pdf", null ], "41.79033045", "-87.60426090", [ null, "41.79033045", "-87.60426090", null, false ] ]
, [ 239, "98037779-8CAB-497C-B0CF-E4F6ECC605E9", 239, 1350410891, "390945", 1350410891, "390945", "{\n}", "239", "900", "E", "57TH", "ST", "900-900 E 57TH ST", "CENTER FOR BIOMEDICAL DISCOVERY", "UNIVERSITY OF CHICAGO", "August 2010", "32736", "13825", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_239.pdf", null ], "41.79203642", "-87.60324413", [ null, "41.79203642", "-87.60324413", null, false ] ]
, [ 240, "7E9B7D33-6C4F-46CF-9DD3-6CB3DE66AF83", 240, 1350410891, "390945", 1350410891, "390945", "{\n}", "240", "3120", "S", "HALSTED", "ST", "3120-3138 S HALSTED ST", "9TH DISTRICT POLICE STATION", " ", "August 2010", "25045", "21037", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_240.pdf", null ], "41.83697483", "-87.64655619", [ null, "41.83697483", "-87.64655619", null, false ] ]
, [ 241, "9D9205D9-0659-4115-AC14-CC329BC6F2E7", 241, 1350410891, "390945", 1350410891, "390945", "{\n}", "241", "300", "E", "26TH", "ST", "300-300 E 26TH ST", " ", " ", "August 2010", "11228", "6734", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_241.pdf", null ], "41.84597877", "-87.61999455", [ null, "41.84597877", "-87.61999455", null, false ] ]
, [ 242, "2190E904-E5CD-418F-80B0-13BFFDC42AB9", 242, 1350410891, "390945", 1350410891, "390945", "{\n}", "242", "2559", "S", "DEARBORN", "ST", "2559-2559 S DEARBORN ST", " ", " ", "August 2010", "38074", "6378", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_242.pdf", null ], "41.84628225", "-87.62780861", [ null, "41.84628225", "-87.62780861", null, false ] ]
, [ 243, "DC1344C0-B104-47C9-B7F8-046826012EB9", 243, 1350410891, "390945", 1350410891, "390945", "{\n}", "243", "2013", "S", "MORGAN", "ST", "2013-2013 S MORGAN ST", " ", " ", "August 2010", "8018", "4076", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_243.pdf", null ], "41.85460977", "-87.65029146", [ null, "41.85460977", "-87.65029146", null, false ] ]
, [ 244, "2C06AE4B-5E45-4B56-9983-A0BB81370DDC", 244, 1350410891, "390945", 1350410891, "390945", "{\n}", "244", "2055", "S", "MORGAN", "ST", "2055-2055 S MORGAN ST", " ", " ", "August 2010", "13822", "8156", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_244.pdf", null ], "41.85459523", "-87.65107713", [ null, "41.85459523", "-87.65107713", null, false ] ]
, [ 245, "E72643CA-2847-407D-BE96-BEB10082F421", 245, 1350410891, "390945", 1350410891, "390945", "{\n}", "245", "2207", "S", "PRAIRIE", "AVE", "2207-2425 S PRAIRIE AVE", " ", " ", "August 2010", "1146303", "167349", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_245.pdf", null ], "41.85025548", "-87.62062239", [ null, "41.85025548", "-87.62062239", null, false ] ]
, [ 246, "61F19D85-7BE6-4D58-BE8B-E52079BF596E", 246, 1350410891, "390945", 1350410891, "390945", "{\n}", "246", "36", "S", "STATE", "ST", "36-42 S STATE ST", " ", " ", "August 2010", "11602", "4165", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_246.pdf", null ], "41.88092427", "-87.62812852", [ null, "41.88092427", "-87.62812852", null, false ] ]
, [ 247, "92B1517D-BEA6-4AAB-BD02-EBE6FFF7B307", 247, 1350410891, "390945", 1350410891, "390945", "{\n}", "247", "131", "S", "DEARBORN", "ST", "131-131 S DEARBORN ST", "CITADEL CENTER", "BANK ONE CORPORATE CENTER", "August 2010", "73279", "14570", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_247.pdf", null ], "41.87984707", "-87.62813070", [ null, "41.87984707", "-87.62813070", null, false ] ]
, [ 248, "EEFA0256-A444-473D-B917-A482795A9691", 248, 1350410891, "390945", 1350410891, "390945", "{\n}", "248", "10", "W", "JACKSON", "BLVD", "10-10 W JACKSON BLVD", "IMMIGRATION AND NATURALIZATION SERVICES", " ", "August 2010", "11723", "7205", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_248.pdf", null ], "41.87849564", "-87.62803089", [ null, "41.87849564", "-87.62803089", null, false ] ]
, [ 249, "AE20881D-0845-4A8B-9F88-4ED7437DC899", 249, 1350410891, "390945", 1350410891, "390945", "{\n}", "249", "555", "S", "DEARBORN", "ST", "555-555 S DEARBORN ST", " ", " ", "August 2010", "3358", "2238", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_249.pdf", null ], "41.87471955", "-87.62892426", [ null, "41.87471955", "-87.62892426", null, false ] ]
, [ 250, "92597EBF-A164-4623-BDD0-88B6C0EDA960", 250, 1350410891, "390945", 1350410891, "390945", "{\n}", "250", "630", "S", "MICHIGAN", "AVE", "630-630 S MICHIGAN AVE", " ", " ", "August 2010", "13156", "4611", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_250.pdf", null ], "41.87399442", "-87.62475756", [ null, "41.87399442", "-87.62475756", null, false ] ]
, [ 251, "BE8D87D7-8F2B-4B23-9837-6A8F08B4892A", 251, 1350410891, "390945", 1350410891, "390945", "{\n}", "251", "78", "E", "BALBO", "AVE", "78-78 E BALBO AVE", "BLACKSTONE HOTEL", " ", "August 2010", "23006", "1049", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_251.pdf", null ], "41.87338540", "-87.62479328", [ null, "41.87338540", "-87.62479328", null, false ] ]
, [ 252, "457AB510-2622-410C-8D11-6865FFD54BC5", 252, 1350410891, "390945", 1350410891, "390945", "{\n}", "252", "819", "S", "STATE", "ST", "819-819 S STATE ST", " ", " ", "August 2010", "34597", "8461", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_252.pdf", null ], "41.87141385", "-87.62687142", [ null, "41.87141385", "-87.62687142", null, false ] ]
, [ 253, "B1E7BF2A-5C82-4953-B260-7E3592E74F70", 253, 1350410891, "390945", 1350410891, "390945", "{\n}", "253", "1621", "S", "PRAIRIE", "AVE", "1621-1629 S PRAIRIE AVE", "1600 MUSEUM PARK", " ", "August 2010", "24623", "5244", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_253.pdf", null ], "41.85949166", "-87.62046477", [ null, "41.85949166", "-87.62046477", null, false ] ]
, [ 254, "7DEB5A6C-63BE-46D7-B38A-D584EA3D53F5", 254, 1350410891, "390945", 1350410891, "390945", "{\n}", "254", "1901", "S", "CALUMET", "AVE", "1901-1901 S CALUMET AVE", " ", " ", "August 2010", "27381", "2305", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_254.pdf", null ], "41.85644189", "-87.61855316", [ null, "41.85644189", "-87.61855316", null, false ] ]
, [ 255, "30E4A40F-E2FA-4231-8DC1-06961679D963", 255, 1350410891, "390945", 1350410891, "390945", "{\n}", "255", "2221", "S", "STATE", "ST", "2221-2221 S STATE ST", " ", " ", "August 2010", "6959", "3858", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_255.pdf", null ], "41.85210733", "-87.62675723", [ null, "41.85210733", "-87.62675723", null, false ] ]
, [ 256, "E0582CA0-7513-4E00-A03A-90F5E30F4475", 256, 1350410891, "390945", 1350410891, "390945", "{\n}", "256", "2138", "S", "INDIANA", "AVE", "2138-2138 S INDIANA AVE", "LEXINGTON PARK CONDOS", " ", "August 2010", "48177", "14286", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_256.pdf", null ], "41.85325712", "-87.62318782", [ null, "41.85325712", "-87.62318782", null, false ] ]
, [ 257, "370D87F0-1999-41CC-B423-BAA76350A2E9", 257, 1350410891, "390945", 1350410891, "390945", "{\n}", "257", "1919", "S", "WABASH", "AVE", "1919-1935 S WABASH AVE", " ", " ", "August 2010", "35402", "9684", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_257.pdf", null ], "41.85610867", "-87.62500998", [ null, "41.85610867", "-87.62500998", null, false ] ]
, [ 258, "B1E5EC61-FAF8-4F07-8333-915E02C4FEEF", 258, 1350410891, "390945", 1350410891, "390945", "{\n}", "258", "1620", "S", "MICHIGAN", "AVE", "1620-1638 S MICHIGAN AVE", " ", " ", "August 2010", "15268", "7419", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_258.pdf", null ], "41.85939686", "-87.62421382", [ null, "41.85939686", "-87.62421382", null, false ] ]
, [ 259, "6C6CCE92-03D8-4223-9EFB-77CE65960866", 259, 1350410891, "390945", 1350410891, "390945", "{\n}", "259", "1454", "S", "MICHIGAN", "AVE", "1454-1464 S MICHIGAN AVE", "MARQUEE MICHIGAN AVENUE", " ", "August 2010", "30185", "7356", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_259.pdf", null ], "41.86228407", "-87.62469954", [ null, "41.86228407", "-87.62469954", null, false ] ]
, [ 260, "6D708FE1-EDDD-49B7-8C25-B397E74B6160", 260, 1350410891, "390945", 1350410891, "390945", "{\n}", "260", "1400", "S", "MICHIGAN", "AVE", "1400-1400 S MICHIGAN AVE", "MICHIGAN AVENUE TOWER II", " ", "August 2010", "28269", "11462", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_260.pdf", null ], "41.86379262", "-87.62449275", [ null, "41.86379262", "-87.62449275", null, false ] ]
, [ 261, "F112C138-83C6-4203-93B5-8F91560E579F", 261, 1350410891, "390945", 1350410891, "390945", "{\n}", "261", "1401", "S", "STATE", "ST", "1401-1417 S STATE ST", " ", " ", "August 2010", "27137", "7464", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_261.pdf", null ], "41.86370988", "-87.62673229", [ null, "41.86370988", "-87.62673229", null, false ] ]
, [ 262, "14257F2B-F358-4540-A98C-F29A97AC1F64", 262, 1350410891, "390945", 1350410891, "390945", "{\n}", "262", "1201", "S", "PRAIRIE", "AVE", "1201-1201 S PRAIRIE AVE", " ", " ", "August 2010", "62907", "23817", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_262.pdf", null ], "41.86687725", "-87.62148046", [ null, "41.86687725", "-87.62148046", null, false ] ]
, [ 263, "025FDAD3-29AA-4A48-8EBD-0E888E37E96A", 263, 1350410891, "390945", 1350410891, "390945", "{\n}", "263", "1237", "S", "MICHIGAN", "AVE", "1237-1255 S MICHIGAN AVE", "SKY55", " ", "August 2010", "43753", "9524", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_263.pdf", null ], "41.86652666", "-87.62336406", [ null, "41.86652666", "-87.62336406", null, false ] ]
, [ 264, "0BCEA8AF-094C-45F0-8765-830A7C0148C1", 264, 1350410891, "390945", 1350410891, "390945", "{\n}", "264", "1235", "S", "STATE", "ST", "1235-1255 S STATE ST", " ", " ", "August 2010", "32168", "5451", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_264.pdf", null ], "41.86619875", "-87.62670489", [ null, "41.86619875", "-87.62670489", null, false ] ]
, [ 265, "C0B4AD69-A935-4762-A185-7EBEB7DA8393", 265, 1350410891, "390945", 1350410891, "390945", "{\n}", "265", "1154", "S", "CLARK", "ST", "1154-1154 S CLARK ST", " ", " ", "August 2010", "112162", "8862", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_265.pdf", null ], "41.86813978", "-87.63086891", [ null, "41.86813978", "-87.63086891", null, false ] ]
, [ 266, "D468BF3D-C259-4DA2-A04F-0421799BBFA0", 266, 1350410891, "390945", 1350410891, "390945", "{\n}", "266", "539", "W", "14TH", "PL", "539-539 W 14TH PL", " ", " ", "August 2010", "62827", "20598", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_266.pdf", null ], "41.86206002", "-87.63969460", [ null, "41.86206002", "-87.63969460", null, false ] ]
, [ 267, "347F5784-D9E5-4F09-84BA-E9F6502058E6", 267, 1350410891, "390945", 1350410891, "390945", "{\n}", "267", "150", "W", "ROOSEVELT", "RD", "150-150 W ROOSEVELT RD", " ", " ", "August 2010", "225003", "144320", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_267.pdf", null ], "41.86895739", "-87.63263694", [ null, "41.86895739", "-87.63263694", null, false ] ]
, [ 268, "20E86412-A94F-4BDE-AC6E-3AEA8A2D05B1", 268, 1350410891, "390945", 1350410891, "390945", "{\n}", "268", "541", "W", "ROOSEVELT", "RD", "541-555 W ROOSEVELT RD", " ", " ", "August 2010", "56560", "2278", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_268.pdf", null ], "41.86705407", "-87.64097699", [ null, "41.86705407", "-87.64097699", null, false ] ]
, [ 269, "321ADD3A-D9F7-4F38-AF22-3C76C695B2E4", 269, 1350410891, "390945", 1350410891, "390945", "{\n}", "269", "430", "W", "ROOSEVELT", "RD", "430-430 W ROOSEVELT RD", " ", " ", "August 2010", "5194", "3515", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_269.pdf", null ], "41.86751540", "-87.63875450", [ null, "41.86751540", "-87.63875450", null, false ] ]
, [ 270, "EA868B65-B23E-467B-8CA8-73E5C9848FEA", 270, 1350410891, "390945", 1350410891, "390945", "{\n}", "270", "170", "W", "POLK", "ST", "170-170 W POLK ST", "PRINTERS CORNER", " ", "August 2010", "10854", "4918", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_270.pdf", null ], "41.87238240", "-87.63324655", [ null, "41.87238240", "-87.63324655", null, false ] ]
, [ 271, "CAB2365F-1C23-4418-A4E8-E21B1F8F57F1", 271, 1350410891, "390945", 1350410891, "390945", "{\n}", "271", "1016", "W", "JACKSON", "BLVD", "1016-1016 W JACKSON BLVD", " ", " ", "August 2010", "9088", "2619", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_271.pdf", null ], "41.87805984", "-87.65267828", [ null, "41.87805984", "-87.65267828", null, false ] ]
, [ 272, "BBF0729A-9A55-494A-B18A-9355FE338565", 272, 1350410891, "390945", 1350410891, "390945", "{\n}", "272", "1001", "W", "VAN BUREN", "ST", "1001-1001 W VAN BUREN ST", " ", " ", "August 2010", "40083", "2696", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_272.pdf", null ], "41.87633693", "-87.65275898", [ null, "41.87633693", "-87.65275898", null, false ] ]
, [ 273, "F8EEF3B8-3BBE-480B-B9C2-1074DE9DFEA2", 273, 1350410891, "390945", 1350410891, "390945", "{\n}", "273", "29", "E", "CONGRESS", "PKWY", "29-33 E CONGRESS PKWY", "COLUMBIA COLLEGE", " ", "August 2010", "25244", "2407", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_273.pdf", null ], "41.87536382", "-87.62658925", [ null, "41.87536382", "-87.62658925", null, false ] ]
, [ 274, "5011C3F1-8DC3-487C-8075-2010544ECF6C", 274, 1350410891, "390945", 1350410891, "390945", "{\n}", "274", "710", "S", "CLARK", "ST", "710-730 S CLARK ST", "BURNHAM POINTE", " ", "August 2010", "32919", "4424", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_274.pdf", null ], "41.87310118", "-87.63083662", [ null, "41.87310118", "-87.63083662", null, false ] ]
, [ 275, "4AF8B98F-9033-410B-BC17-2288E7ADB6CC", 275, 1350410891, "390945", 1350410891, "390945", "{\n}", "275", "3839", "S", "HALSTED", "ST", "3839-3839 S HALSTED ST", " ", " ", "August 2010", "3484", "2611", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_275.pdf", null ], "41.82401953", "-87.64570406", [ null, "41.82401953", "-87.64570406", null, false ] ]
, [ 276, "71C403FC-86AC-40C0-BD0A-760BA9DE7150", 276, 1350410891, "390945", 1350410891, "390945", "{\n}", "276", "1611", "W", "HARRISON", "ST", "1611-1611 W HARRISON ST", "RUSH ORTHOPEDIC AMBULATORY  BUILDING", " ", "August 2010", "34422", "14971", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_276.pdf", null ], "41.87364295", "-87.66694572", [ null, "41.87364295", "-87.66694572", null, false ] ]
, [ 277, "AB858C63-017A-4A00-B897-993A7B712E26", 277, 1350410891, "390945", 1350410891, "390945", "{\n}", "277", "1007", "W", "HARRISON", "ST", "1007-1007 W HARRISON ST", "UIC-BEHAVIORAL SCIENCES BLDG", " ", "August 2010", "72199", "1388", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_277.pdf", null ], "41.87375439", "-87.65226132", [ null, "41.87375439", "-87.65226132", null, false ] ]
, [ 278, "9EAAFA6A-8D23-461F-A4B8-7EDD91D180AF", 278, 1350410891, "390945", 1350410891, "390945", "{\n}", "278", "845", "W", "HARRISON", "ST", "845-845 W HARRISON ST", "UIC ART/ARCHITECTURE BLDG", " ", "August 2010", "30456", "3836", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_278.pdf", null ], "41.87367952", "-87.64889882", [ null, "41.87367952", "-87.64889882", null, false ] ]
, [ 279, "06DFFA2A-F783-4E17-98EF-7A30F838FA75", 279, 1350410891, "390945", 1350410891, "390945", "{\n}", "279", "1101", "S", "STATE", "ST", "1101-1155 S STATE ST", "STATE PLACE", " ", "August 2010", "76423", "20468", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_279.pdf", null ], "41.86843150", "-87.62697769", [ null, "41.86843150", "-87.62697769", null, false ] ]
, [ 280, "E073B3A8-021C-4B78-B22F-C25892B5D827", 280, 1350410891, "390945", 1350410891, "390945", "{\n}", "280", "1200", "S", "LAKE SHORE", "DR", "1200-1200 S LAKE SHORE DR", "SHEDD AQUARIUM", " ", "August 2010", "163433", "2084", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_280.pdf", null ], "41.86768030", "-87.61339452", [ null, "41.86768030", "-87.61339452", null, false ] ]
, [ 281, "1F8A9F61-39B0-45E3-8654-E962256AC918", 281, 1350410891, "390945", 1350410891, "390945", "{\n}", "281", "222", "W", "ERIE", "ST", "222-222 W ERIE ST", " ", " ", "August 2010", "22038", "12730", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_281.pdf", null ], "41.89430454", "-87.63510729", [ null, "41.89430454", "-87.63510729", null, false ] ]
, [ 282, "3086809F-3AD3-4B43-82D4-987FD6E7F00F", 282, 1350410891, "390945", 1350410891, "390945", "{\n}", "282", "200", "W", "GRAND", "AVE", "200-200 W GRAND AVE", "THE GRAND ON GRAND", " ", "August 2010", "15907", "2011", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_282.pdf", null ], "41.89182239", "-87.63443282", [ null, "41.89182239", "-87.63443282", null, false ] ]
, [ 283, "D2D4A502-8B00-4C70-9ECC-294E98D59E53", 283, 1350410891, "390945", 1350410891, "390945", "{\n}", "283", "460", "E", "OHIO", "ST", "460-460 E OHIO ST", " ", " ", "August 2010", "46223", "7707", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_283.pdf", null ], "41.89309558", "-87.61528349", [ null, "41.89309558", "-87.61528349", null, false ] ]
, [ 284, "846819EE-284E-4410-93AA-07DAE96E7CEB", 284, 1350410891, "390945", 1350410891, "390945", "{\n}", "284", "440", "N", "MC CLURG", "CT", "440-480 N MC CLURG CT", "CITYVIEW", " ", "August 2010", "80039", "20805", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_284.pdf", null ], "41.89026006", "-87.61824604", [ null, "41.89026006", "-87.61824604", null, false ] ]
, [ 285, "21E2EA35-0955-494C-8590-E7567B69E2BC", 285, 1350410891, "390945", 1350410891, "390945", "{\n}", "285", "207", "E", "OHIO", "ST", "207-215 E OHIO ST", "THE GRAND OHIO CONDOMINIUMS", " ", "August 2010", "61140", "5170", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_285.pdf", null ], "41.89229251", "-87.62205776", [ null, "41.89229251", "-87.62205776", null, false ] ]
, [ 286, "9DD00587-3547-43F4-BAA7-5CCCF4CAF47A", 286, 1350410891, "390945", 1350410891, "390945", "{\n}", "286", "1520", "W", "NORTH", "AVE", "1520-1520 W NORTH AVE", " ", " ", "August 2010", "23899", "12047", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_286.pdf", null ], "41.91122989", "-87.66631610", [ null, "41.91122989", "-87.66631610", null, false ] ]
, [ 287, "48363BF9-ABD8-4934-B675-349596B824D0", 287, 1350410891, "390945", 1350410891, "390945", "{\n}", "287", "100", "N", "COLUMBUS", "DR", "100-100 N COLUMBUS DR", "JAY PRITZKER PAVILLION", " ", "August 2010", "1010186", "394024", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_287.pdf", null ], "41.88256930", "-87.62244102", [ null, "41.88256930", "-87.62244102", null, false ] ]
, [ 288, "406DAE49-87C8-461E-AF44-073F2E8AC916", 288, 1350410891, "390945", 1350410891, "390945", "{\n}", "288", "1260", "W", "ADAMS", "ST", "1260-1260 W ADAMS ST", "SKINNER SCHOOL", " ", "August 2010", "39957", "5603", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_288.pdf", null ], "41.87931986", "-87.65879355", [ null, "41.87931986", "-87.65879355", null, false ] ]
, [ 289, "2F44E5E1-D602-469E-9D31-2E46EE8DEBB3", 289, 1350410891, "390945", 1350410891, "390945", "{\n}", "289", "1228", "W", "MONROE", "ST", "1228-1228 W MONROE ST", " ", " ", "August 2010", "9870", "4140", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_289.pdf", null ], "41.88070203", "-87.65816944", [ null, "41.88070203", "-87.65816944", null, false ] ]
, [ 290, "834EF48D-CFDA-4D29-8D27-869171F0E1E2", 290, 1350410891, "390945", 1350410891, "390945", "{\n}", "290", "901", "W", "MADISON", "ST", "901-901 W MADISON ST", " ", " ", "August 2010", "33356", "7271", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_290.pdf", null ], "41.88150222", "-87.65008959", [ null, "41.88150222", "-87.65008959", null, false ] ]
, [ 291, "3FC3CB26-F595-43AC-BA8E-AFEF80B8460E", 291, 1350410891, "390945", 1350410891, "390945", "{\n}", "291", "550", "W", "ADAMS", "ST", "550-550 W ADAMS ST", " ", " ", "August 2010", "25610", "15446", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_291.pdf", null ], "41.87950653", "-87.64176272", [ null, "41.87950653", "-87.64176272", null, false ] ]
, [ 292, "0B74E443-41F2-4AA6-8854-E320BB7746F4", 292, 1350410891, "390945", 1350410891, "390945", "{\n}", "292", "345", "E", "OHIO", "ST", "345-345 E OHIO ST", "STREETER PLACE", " ", "August 2010", "30307", "13480", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_292.pdf", null ], "41.89239426", "-87.61899719", [ null, "41.89239426", "-87.61899719", null, false ] ]
, [ 293, "0F84564E-36F9-46AA-B916-067ACB35843B", 293, 1350410891, "390945", 1350410891, "390945", "{\n}", "293", "22", "W", "WASHINGTON", "ST", "22-22 W WASHINGTON ST", " ", " ", "August 2010", "128566", "18594", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_293.pdf", null ], "41.88363727", "-87.62874919", [ null, "41.88363727", "-87.62874919", null, false ] ]
, [ 294, "831FE3DE-3C5D-478E-8C14-78D7C5BB53C7", 294, 1350410891, "390945", 1350410891, "390945", "{\n}", "294", "55", "E", "PEARSON", "ST", "55-55 E PEARSON ST", "THE CLARE AT WATERTOWER", "SENIOR RETIREMENT RESIDENCE", "August 2010", "23303", "12177", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_294.pdf", null ], "41.89723248", "-87.62651705", [ null, "41.89723248", "-87.62651705", null, false ] ]
, [ 295, "0CE40815-35B0-4F11-8AC9-DDEFA1A90057", 295, 1350410891, "390945", 1350410891, "390945", "{\n}", "295", "233", "E", "SUPERIOR", "ST", "233-233 E SUPERIOR ST", "OLSON PAVILION/MCGAW PAVILION/HEALTH SC", "NORTHWESTERN UNIVERSITY", "August 2010", "47831", "2969", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_295.pdf", null ], "41.89524788", "-87.62070270", [ null, "41.89524788", "-87.62070270", null, false ] ]
, [ 296, "9AD9F502-F1ED-4962-AAE1-65B7D74D7211", 296, 1350410891, "390945", 1350410891, "390945", "{\n}", "296", "32", "S", "SANGAMON", "ST", "32-32 S SANGAMON ST", " ", " ", "August 2010", "22312", "15929", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_296.pdf", null ], "41.88070290", "-87.65135030", [ null, "41.88070290", "-87.65135030", null, false ] ]
, [ 297, "6A43EA04-61BF-4996-ABC9-4819ACEA7B9C", 297, 1350410891, "390945", 1350410891, "390945", "{\n}", "297", "444", "E", "ONTARIO", "ST", "444-448 E ONTARIO ST", " ONTERIE CENTER", " ", "August 2010", "37741", "1431", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_297.pdf", null ], "41.89385520", "-87.61644131", [ null, "41.89385520", "-87.61644131", null, false ] ]
, [ 298, "4FC8EE49-1316-4ED6-9A68-430AE2110B97", 298, 1350410891, "390945", 1350410891, "390945", "{\n}", "298", "401", "N", "WABASH", "AVE", "401-413 N WABASH AVE", "TRUMP TOWER", " ", "August 2010", "49504", "8494", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_298.pdf", null ], "41.88893928", "-87.62653879", [ null, "41.88893928", "-87.62653879", null, false ] ]
, [ 299, "BB6A2763-4404-4DE2-9129-DC7FDF4DFC80", 299, 1350410891, "390945", 1350410891, "390945", "{\n}", "299", "947", "N", "STATE", "ST", "947-951 N STATE ST", " ", " ", "August 2010", "5015", "2292", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_299.pdf", null ], "41.90061714", "-87.62806299", [ null, "41.90061714", "-87.62806299", null, false ] ]
, [ 300, "09028E03-D96D-480B-BE74-99D42A6D5C2E", 300, 1350410891, "390945", 1350410891, "390945", "{\n}", "300", "11", "E", "OAK", "ST", "11-15 E OAK ST", " ", " ", "August 2010", "11253", "5737", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_300.pdf", null ], "41.90056196", "-87.62756771", [ null, "41.90056196", "-87.62756771", null, false ] ]
, [ 301, "017AE4B4-E76E-4920-B29E-5CB8333726E8", 301, 1350410891, "390945", 1350410891, "390945", "{\n}", "301", "10", "E", "DELAWARE", "PL", "10-10 E DELAWARE PL", " ", " ", "August 2010", "11138", "2968", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_301.pdf", null ], "41.89931967", "-87.62787408", [ null, "41.89931967", "-87.62787408", null, false ] ]
, [ 302, "E8B3A3A1-5967-4317-8B1F-FC75A976B1AE", 302, 1350410891, "390945", 1350410891, "390945", "{\n}", "302", "35", "W", "DELAWARE", "PL", "35-35 W DELAWARE PL", " ", " ", "August 2010", "13057", "5299", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_302.pdf", null ], "41.89889998", "-87.62933745", [ null, "41.89889998", "-87.62933745", null, false ] ]
, [ 303, "0A043809-A0F7-471E-AD8F-7796B558A504", 303, 1350410891, "390945", 1350410891, "390945", "{\n}", "303", "900", "S", "CLARK", "ST", "900-900 S CLARK ST", "AMLI 900", " ", "August 2010", "21585", "7380", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_303.pdf", null ], "41.87034167", "-87.63113844", [ null, "41.87034167", "-87.63113844", null, false ] ]
, [ 304, "F27BDA6E-0636-419B-886E-1BC48A928B75", 304, 1350410891, "390945", 1350410891, "390945", "{\n}", "304", "101", "S", "WACKER", "DR", "101-101 S WACKER DR", "111 SOUTH WACKER", " ", "August 2010", "31142", "24223", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_304.pdf", null ], "41.88031958", "-87.63640929", [ null, "41.88031958", "-87.63640929", null, false ] ]
, [ 305, "356AEA58-338D-49DF-9CAD-83D759235E14", 305, 1350410891, "390945", 1350410891, "390945", "{\n}", "305", "3742", "S", "VINCENNES", "AVE", "3742-3742 S VINCENNES AVE", " ", " ", "August 2010", "3384", "1060", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_305.pdf", null ], "41.82598825", "-87.61231350", [ null, "41.82598825", "-87.61231350", null, false ] ]
, [ 306, "AD25BEDC-EEFD-4C84-A841-ED095FEC2AF2", 306, 1350410891, "390945", 1350410891, "390945", "{\n}", "306", "2636", "W", "NORTH", "AVE", "2636-2644 W NORTH AVE", " ", " ", "August 2010", "11863", "4616", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_306.pdf", null ], "41.91050464", "-87.69367167", [ null, "41.91050464", "-87.69367167", null, false ] ]
, [ 307, "E07BDEDC-2483-4EE4-805B-49F311DF548C", 307, 1350410891, "390945", 1350410891, "390945", "{\n}", "307", "100", "N", "CLARK", "ST", "100-118 N CLARK ST", "CITY HALL & COUNTY BUILDING", " ", "August 2010", "115511", "35157", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_307.pdf", null ], "41.88396929", "-87.63188170", [ null, "41.88396929", "-87.63188170", null, false ] ]
, [ 308, "9A61987F-0D00-4B4B-9667-9DB39D85D838", 308, 1350410891, "390945", 1350410891, "390945", "{\n}", "308", "900", "N", "MICHIGAN", "AVE", "900-900 N MICHIGAN AVE", " ", " ", "August 2010", "98800", "26958", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_308.pdf", null ], "41.89973361", "-87.62540596", [ null, "41.89973361", "-87.62540596", null, false ] ]
, [ 309, "99322B18-3283-4386-91CC-C5BB8844EE64", 309, 1350410891, "390945", 1350410891, "390945", "{\n}", "309", "901", "N", "RUSH", "ST", "901-901 N RUSH ST", " ", " ", "August 2010", "42324", "26497", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_309.pdf", null ], "41.89965470", "-87.62640595", [ null, "41.89965470", "-87.62640595", null, false ] ]
, [ 310, "D562E51E-0011-478C-A149-7E520117EC06", 310, 1350410891, "390945", 1350410891, "390945", "{\n}", "310", "115", "W", "CHICAGO", "AVE", "115-115 W CHICAGO AVE", "ACCESS LIVING", " ", "August 2010", "10379", "6925", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_310.pdf", null ], "41.89631036", "-87.63191930", [ null, "41.89631036", "-87.63191930", null, false ] ]
, [ 311, "F3B2F5DA-0BEE-41CE-A776-8882F917CFF3", 311, 1350410891, "390945", 1350410891, "390945", "{\n}", "311", "4245", "N", "OAK PARK", "AVE", "4245-4245 N OAK PARK AVE", " ", " ", "October 2010", "15022", "5166", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_311.pdf", null ], "41.95846174", "-87.79689793", [ null, "41.95846174", "-87.79689793", null, false ] ]
, [ 312, "01249444-2396-45AA-946F-8EC51D11FB0F", 312, 1350410891, "390945", 1350410891, "390945", "{\n}", "312", "10", "S", "STATE", "ST", "10-10 S STATE ST", " ", " ", "August 2010", "38932", "16908", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_312.pdf", null ], "41.88159217", "-87.62819880", [ null, "41.88159217", "-87.62819880", null, false ] ]
, [ 313, "1BF34379-52FB-40EE-B690-5455746FA8C3", 313, 1350410891, "390945", 1350410891, "390945", "{\n}", "313", "2430", "N", "CANNON", "DR", "2430-2430 N CANNON DR", "PEGGY NOTEBART NATURE MUSEUM", " ", "August 2010", "48015", "15241", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_313.pdf", null ], "41.92676124", "-87.63522385", [ null, "41.92676124", "-87.63522385", null, false ] ]
, [ 314, "7AF3DBEF-FC86-4B6B-B804-028ACEC843AD", 314, 1350410891, "390945", 1350410891, "390945", "{\n}", "314", "0", " ", "LINCOLN PARK ZOO #1", " ", "0-0   LINCOLN PARK ZOO #1", " ", " ", "August 2010", "9220", "3516", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_314.pdf", null ], "41.92114142", "-87.63482948", [ null, "41.92114142", "-87.63482948", null, false ] ]
, [ 315, "F1310FED-E7F8-4962-813B-0D6CCDF4268D", 315, 1350410891, "390945", 1350410891, "390945", "{\n}", "315", "1616", "S", "STATE", "ST", "1616-1616 S STATE ST", " ", " ", "August 2010", "36054", "20726", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_315.pdf", null ], "41.85972617", "-87.62777831", [ null, "41.85972617", "-87.62777831", null, false ] ]
, [ 316, "E16A4DA1-FA5B-4AF1-B0E3-E8B8D5757180", 316, 1350410891, "390945", 1350410891, "390945", "{\n}", "316", "5706", "W", "LAKE", "ST", "5706-5706 W LAKE ST", " ", " ", "August 2010", "8446", "2978", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_316.pdf", null ], "41.88819948", "-87.76794405", [ null, "41.88819948", "-87.76794405", null, false ] ]
, [ 317, "D5EC87BF-443F-43D9-912C-03B70D671C17", 317, 1350410891, "390945", 1350410891, "390945", "{\n}", "317", "9400", "W", "FOSTER", "AVE", "9400-9420 W FOSTER AVE", " ", " ", "October 2010", "49458", "31526", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_317.pdf", null ], "41.97359739", "-87.86291021", [ null, "41.97359739", "-87.86291021", null, false ] ]
, [ 318, "685F25CE-7F9C-4DAC-94CF-645024DC2CC1", 318, 1350410891, "390945", 1350410891, "390945", "{\n}", "318", "0", " ", "OHARE BLDG 5", " ", "0-0   OHARE BLDG 5", " ", " ", "October 2010", "5284", "3776", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_318.pdf", null ], "41.99685566", "-87.88513923", [ null, "41.99685566", "-87.88513923", null, false ] ]
, [ 319, "D1EA889B-692E-4602-87DB-CF2134ED9A8D", 319, 1350410891, "390945", 1350410891, "390945", "{\n}", "319", "0", " ", "OHARE BLDG 6", " ", "0-0   OHARE BLDG 6", " ", " ", "October 2010", "12617", "5072", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_319.pdf", null ], "41.99582087", "-87.88508027", [ null, "41.99582087", "-87.88508027", null, false ] ]
, [ 320, "DA84FC4F-7014-4A62-88E8-CEFCF7E58155", 320, 1350410891, "390945", 1350410891, "390945", "{\n}", "320", "7001", "W", "59TH", "ST", "7001-7001 W 59TH ST", " ", " ", "October 2010", "11929", "3364", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_320.pdf", null ], "41.78453836", "-87.79617584", [ null, "41.78453836", "-87.79617584", null, false ] ]
, [ 321, "B8BC6554-C7ED-45D5-9E88-BCE4AAABFB79", 321, 1350410891, "390945", 1350410891, "390945", "{\n}", "321", "3027", "E", "93RD", "ST", "3027-3027 E 93RD ST", "E46", "CHICAGO FIRE HOUSE", "September 2010", "6879", "5281", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_321.pdf", null ], "41.72616565", "-87.54999697", [ null, "41.72616565", "-87.54999697", null, false ] ]
, [ 322, "07083741-858E-4B7A-B097-6B063A28FACF", 322, 1350410891, "390945", 1350410891, "390945", "{\n}", "322", "7512", "S", "SHORE", "DR", "7512-7512 S SHORE DR", " ", " ", "September 2010", "44303", "31799", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_322.pdf", null ], "41.76025963", "-87.55628251", [ null, "41.76025963", "-87.55628251", null, false ] ]
, [ 323, "E5D6FBA8-3BEC-4BF6-B503-DC6219245BD8", 323, 1350410891, "390945", 1350410891, "390945", "{\n}", "323", "1715", "N", "DAMEN", "AVE", "1715-1715 N DAMEN AVE", " ", " ", "August 2010", "4159", "956", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_323.pdf", null ], "41.91286175", "-87.67710425", [ null, "41.91286175", "-87.67710425", null, false ] ]
, [ 324, "C56D973C-6546-4947-80B8-542E45698800", 324, 1350410891, "390945", 1350410891, "390945", "{\n}", "324", "1036", "W", "MONTROSE", "AVE", "1036-1036 W MONTROSE AVE", " ", " ", "August 2010", "13393", "1235", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_324.pdf", null ], "41.96210751", "-87.65597235", [ null, "41.96210751", "-87.65597235", null, false ] ]
, [ 325, "3DE5F5B5-27A2-4F38-8DB1-D39236DA35B8", 325, 1350410891, "390945", 1350410891, "390945", "{\n}", "325", "2567", "E", "72ND", "PL", "2567-2569 E 72ND PL", " ", " ", "September 2010", "2418", "2231", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_325.pdf", null ], "41.76556744", "-87.56081139", [ null, "41.76556744", "-87.56081139", null, false ] ]
, [ 326, "BFE254BB-C41C-45B7-BB7D-62CA80049073", 326, 1350410891, "390945", 1350410891, "390945", "{\n}", "326", "121", "S", "JEFFERSON", "ST", "121-125 S JEFFERSON ST", "Park Alexandria", " ", "August 2010", "22048", "7345", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_326.pdf", null ], "41.87993183", "-87.64186880", [ null, "41.87993183", "-87.64186880", null, false ] ]
, [ 327, "1E5BCDFA-960C-43B1-8DC9-8A866A9C3AFC", 327, 1350410891, "390945", 1350410891, "390945", "{\n}", "327", "5430", "N", "SHERIDAN", "RD", "5430-5430 N SHERIDAN RD", " ", " ", "August 2010", "13459", "6802", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_327.pdf", null ], "41.98099580", "-87.65550004", [ null, "41.98099580", "-87.65550004", null, false ] ]
, [ 328, "5D598FB0-34C0-418A-ABD3-3E010CA93FF6", 328, 1350410891, "390945", 1350410891, "390945", "{\n}", "328", "4239", "N", "OAK PARK", "AVE", "4239-4239 N OAK PARK AVE", " ", " ", "October 2010", "21904", "19999", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_328.pdf", null ], "41.95759616", "-87.79665150", [ null, "41.95759616", "-87.79665150", null, false ] ]
, [ 329, "B27FB684-6367-4018-9EE6-1996DE6B3A8B", 329, 1350410891, "390945", 1350410891, "390945", "{\n}", "329", "5414", "S", "CORNELL", "AVE", "5414-5420 S CORNELL AVE", " ", " ", "September 2010", "34338", "4958", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_329.pdf", null ], "41.79775568", "-87.58577750", [ null, "41.79775568", "-87.58577750", null, false ] ]
, [ 330, "FD669FE9-0DDF-4E91-92FB-00EF2AB0A6CD", 330, 1350410891, "390945", 1350410891, "390945", "{\n}", "330", "1620", "E", "75TH", "ST", "1620-1620 E 75TH ST", null, null, "September 2010", "13026", "12059", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_330.pdf", null ], "41.75852287", "-87.58486224", [ null, "41.75852287", "-87.58486224", null, false ] ]
, [ 331, "F8416260-4AA6-411C-BEE1-4BD491CD9E57", 331, 1350410891, "390945", 1350410891, "390945", "{\n}", "331", "5220", "S", "HYDE PARK", "BLVD", "5220-0 S HYDE PARK BLVD", " ", " ", "September 2010", "9182", "2878", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_331.pdf", null ], "41.80029304", "-87.58476512", [ null, "41.80029304", "-87.58476512", null, false ] ]
, [ 332, "891B6991-DED0-4919-A904-10894FB05423", 332, 1350410891, "390945", 1350410891, "390945", "{\n}", "332", "2320", "E", "93RD", "ST", "2320-2342 E 93RD ST", "ADVOCATE TRINITY HOSPITAL", " ", "September 2010", "106836", "3873", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_332.pdf", null ], "41.72677484", "-87.56667240", [ null, "41.72677484", "-87.56667240", null, false ] ]
, [ 333, "A0A1707A-4F0E-4A50-8B3A-A8E040E4A2D9", 333, 1350410891, "390945", 1350410891, "390945", "{\n}", "333", "1700", "E", "95TH", "ST", "1700-1700 E 95TH ST", " ", " ", "September 2010", "3440", "745", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_333.pdf", null ], "41.72194529", "-87.58253226", [ null, "41.72194529", "-87.58253226", null, false ] ]
, [ 334, "8344286B-888D-4951-96CD-0C9EFB3BC5CB", 334, 1350410891, "390945", 1350410891, "390945", "{\n}", "334", "3448", "E", "CHELTENHAM", "PL", "3448-3448 E CHELTENHAM PL", " ", " ", "September 2010", "1788", "1478", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_334.pdf", null ], "41.75442313", "-87.54549379", [ null, "41.75442313", "-87.54549379", null, false ] ]
, [ 335, "989BF9A1-D6A7-49A6-AB7F-6F4A0012B185", 335, 1350410891, "390945", 1350410891, "390945", "{\n}", "335", "0", " ", "O'HARE BLDG 7", " ", "0-0   O'HARE BLDG 7", " ", " ", "October 2010", "897", "768", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_335.pdf", null ], "41.99628442", "-87.91633192", [ null, "41.99628442", "-87.91633192", null, false ] ]
, [ 336, "95937AD8-DC6C-461B-8565-3EC5F8BD36A6", 336, 1350410891, "390945", 1350410891, "390945", "{\n}", "336", "0", " ", "O'HARE BLDG 8", " ", "0-0   O'HARE BLDG 8", " ", " ", "October 2010", "8912", "8912", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_336.pdf", null ], "41.99641165", "-87.91585284", [ null, "41.99641165", "-87.91585284", null, false ] ]
, [ 337, "994B947C-34B3-4C42-9595-29219B463569", 337, 1350410891, "390945", 1350410891, "390945", "{\n}", "337", "0", " ", "OHARE BLDG 1", " ", "0-0   OHARE BLDG 1", " ", " ", "October 2010", "184193", "176272", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_337.pdf", null ], "41.96246622", "-87.92436577", [ null, "41.96246622", "-87.92436577", null, false ] ]
, [ 338, "D8FB06BF-BE9D-4439-B1B2-4223B6B87B2F", 338, 1350410891, "390945", 1350410891, "390945", "{\n}", "338", "0", " ", "OHARE BLDG 2", " ", "0-0   OHARE BLDG 2", " ", " ", "October 2010", "12315", "11608", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_338.pdf", null ], "41.96190697", "-87.92298687", [ null, "41.96190697", "-87.92298687", null, false ] ]
, [ 339, "FFD9D0EF-1D1E-4B29-ACA8-50CE3BE43F44", 339, 1350410891, "390945", 1350410891, "390945", "{\n}", "339", "0", " ", "OHARE BLDG 3", " ", "0-0   OHARE BLDG 3", " ", " ", "October 2010", "39934", "4107", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_339.pdf", null ], "41.96033246", "-87.92317345", [ null, "41.96033246", "-87.92317345", null, false ] ]
, [ 340, "78E7B3FD-A4E3-425B-A41F-E31BAD2E1C64", 340, 1350410891, "390945", 1350410891, "390945", "{\n}", "340", "0", " ", "OHARE BLDG 4", " ", "0-0   OHARE BLDG 4", " ", " ", "October 2010", "19114", "19114", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_340.pdf", null ], "41.95970277", "-87.90259547", [ null, "41.95970277", "-87.90259547", null, false ] ]
, [ 341, "04343E4C-FB49-4953-AD32-66E8644AD2EE", 341, 1350410891, "390945", 1350410891, "390945", "{\n}", "341", "0", " ", "A.R.F.F. #3", " ", "0-0   A.R.F.F. #3", "A.R.F.F. #3", "OHARE AIRPORT STRUCTURE", "October 2010", "13754", "4784", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_341.pdf", null ], "41.98081256", "-87.89784851", [ null, "41.98081256", "-87.89784851", null, false ] ]
, [ 342, "84CF6D9D-A353-43DA-9C67-9E1D5ACDAE54", 342, 1350410891, "390945", 1350410891, "390945", "{\n}", "342", "1701", "E", "95TH", "ST", "1701-1701 E 95TH ST", " ", " ", "September 2010", "7888", "2606", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_342.pdf", null ], "41.72186408", "-87.58144528", [ null, "41.72186408", "-87.58144528", null, false ] ]
, [ 343, "BD7C1C4A-9B06-4925-8E81-610BC41B0157", 343, 1350410891, "390945", 1350410891, "390945", "{\n}", "343", "24", "S", "MORGAN", "ST", "24-24 S MORGAN ST", "PURE", " ", "August 2010", "18707", "2610", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_343.pdf", null ], "41.88113741", "-87.65242896", [ null, "41.88113741", "-87.65242896", null, false ] ]
, [ 344, "F9C6B773-0952-4A43-91C6-C9270F559249", 344, 1350410891, "390945", 1350410891, "390945", "{\n}", "344", "55", "E", "MONROE", "ST", "55-55 E MONROE ST", "MID CONTINENTAL PLAZA", " ", "August 2010", "45321", "1733", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_344.pdf", null ], "41.88008845", "-87.62573950", [ null, "41.88008845", "-87.62573950", null, false ] ]
, [ 345, "B87173AD-4AFA-4A91-9F46-02ED7D7ABC55", 345, 1350410891, "390945", 1350410891, "390945", "{\n}", "345", "66", "E", "RANDOLPH", "ST", "66-66 E RANDOLPH ST", " ", " ", "August 2010", "6290", "4599", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_345.pdf", null ], "41.88491504", "-87.62545574", [ null, "41.88491504", "-87.62545574", null, false ] ]
, [ 346, "5A8E4AD2-09A7-414A-A2C3-FB63836B9A80", 346, 1350410891, "390945", 1350410891, "390945", "{\n}", "346", "62", "E", "RANDOLPH", "ST", "62-62 E RANDOLPH ST", " ", " ", "August 2010", "6647", "1968", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_346.pdf", null ], "41.88479550", "-87.62565169", [ null, "41.88479550", "-87.62565169", null, false ] ]
, [ 347, "96D69795-267D-42DE-99E1-2E18CA577E00", 347, 1350410891, "390945", 1350410891, "390945", "{\n}", "347", "110", "W", "SUPERIOR", "ST", "110-116 W SUPERIOR ST", "110 W SUPERIOR", " ", "August 2010", "6196", "899", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_347.pdf", null ], "41.89592113", "-87.63199711", [ null, "41.89592113", "-87.63199711", null, false ] ]
, [ 348, "337D7F1D-E9D3-49AC-BEC3-32E067D83B70", 348, 1350410891, "390945", 1350410891, "390945", "{\n}", "348", "924", "N", "CLARK", "ST", "924-924 N CLARK ST", " ", " ", "August 2010", "4261", "957", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_348.pdf", null ], "41.89955299", "-87.63189495", [ null, "41.89955299", "-87.63189495", null, false ] ]
, [ 349, "29D408F5-D1B4-4B47-963C-D1D37C975FF4", 349, 1350410891, "390945", 1350410891, "390945", "{\n}", "349", "1211", "S", "PRAIRIE", "AVE", "1211-1235 S PRAIRIE AVE", " ", " ", "August 2010", "36677", "8426", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_349.pdf", null ], "41.86614130", "-87.62095996", [ null, "41.86614130", "-87.62095996", null, false ] ]
, [ 350, "9474ACFE-EFCE-4383-BB5E-92BF9B352CA4", 350, 1350410891, "390945", 1350410891, "390945", "{\n}", "350", "3700", "W", "103RD", "ST", "3700-3700 W 103RD ST - DORM #1", " ", " ", "August 2010", "8839", "1055", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_350.pdf", null ], "41.71014049", "-87.71291553", [ null, "41.71014049", "-87.71291553", null, false ] ]
, [ 351, "7E568E14-E8A4-4D06-8E9B-9B4A952F4F10", 351, 1350410891, "390945", 1350410891, "390945", "{\n}", "351", "3700", "W", "103RD", "ST", "3700-3700 W 103RD ST - DORM #2", " ", " ", "August 2010", "9039", "1297", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_351.pdf", null ], "41.70954771", "-87.71342297", [ null, "41.70954771", "-87.71342297", null, false ] ]
, [ 352, "203B497D-9899-40B1-AEB6-C3FC61D698FF", 352, 1350410891, "390945", 1350410891, "390945", "{\n}", "352", "29", "S", "WABASH", "AVE", "29-29 S WABASH AVE", " ", " ", "August 2010", "26072", "4169", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_352.pdf", null ], "41.88139153", "-87.62570792", [ null, "41.88139153", "-87.62570792", null, false ] ]
, [ 353, "1363293E-26DB-4858-8281-B77492042C62", 353, 1350410891, "390945", 1350410891, "390945", "{\n}", "353", "505", "N", "MCCLURG", "CT", "505-505 N MCCLURG CT", "PARKVIEW WEST", " ", "August 2010", "109692", "72791", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_353.pdf", null ], "41.89145603", "-87.61640368", [ null, "41.89145603", "-87.61640368", null, false ] ]
, [ 354, "C1AD3F5D-FE35-4049-992F-599316D91066", 354, 1350410891, "390945", 1350410891, "390945", "{\n}", "354", "1502", "N", "KINGSBURY", "ST", "1502-1538 N KINGSBURY ST", " ", " ", "August 2010", "90475", "25711", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_354.pdf", null ], "41.90856993", "-87.65261877", [ null, "41.90856993", "-87.65261877", null, false ] ]
, [ 355, "0DFAEFDC-1DA7-45F8-81C9-E218330D0E65", 355, 1350410891, "390945", 1350410891, "390945", "{\n}", "355", "5641", "N", "KENMORE", "AVE", "5641-5641 N KENMORE AVE", " ", " ", "August 2010", "5197", "2470", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_355.pdf", null ], "41.98498146", "-87.65614925", [ null, "41.98498146", "-87.65614925", null, false ] ]
, [ 356, "C71D3D39-4D37-49A5-AD7B-9D13F3308060", 356, 1350410891, "390945", 1350410891, "390945", "{\n}", "356", "3231", "N", "SPRINGFIELD", "AVE", "3231-3231 N SPRINGFIELD AVE", "LORCA SCHOOL", " ", "August 2010", "38316", "31480", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_356.pdf", null ], "41.94009155", "-87.72421011", [ null, "41.94009155", "-87.72421011", null, false ] ]
, [ 357, "71360FF9-58C3-41F0-B318-12862F405A61", 357, 1350410891, "390945", 1350410891, "390945", "{\n}", "357", "1410", " ", "MUSEUM CAMPUS", "DR", "1410-1410 MUSEUM CAMPUS DR", " ", " ", "August 2010", "2223396", "839593", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_357.pdf", null ], "41.86219928", "-87.61590461", [ null, "41.86219928", "-87.61590461", null, false ] ]
, [ 358, "CCAF7C32-7F4C-4600-8E17-F8D43C89EE23", 358, 1350410891, "390945", 1350410891, "390945", "{\n}", "358", "555", "W", "MONROE", "ST", "555-555 W MONROE ST", "QUAKER PLAZA", " ", "August 2010", "40890", "3355", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_358.pdf", null ], "41.88029169", "-87.64224052", [ null, "41.88029169", "-87.64224052", null, false ] ]
, [ 359, "B1A73A69-8BFF-4EF0-8A8D-596E08C023A1", 359, 1350410891, "390945", 1350410891, "390945", "{\n}", "359", "521", "E", "38TH", "ST", "521-521 E 38TH ST", " ", " ", "August 2010", "5028", "2030", [ "https://gisapps.cityofchicago.org/gisimages/Greenroofs/VR_359.pdf", null ], "41.82594931", "-87.61354305", [ null, "41.82594931", "-87.61354305", null, false ] ]
 ]
}
);
