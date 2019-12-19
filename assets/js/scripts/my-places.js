/*MY PLACCES PAGE MAP*/

//AM CHARTS CODE//
jQuery(document).ready(function () {

	if (document.cookie.indexOf("mapSelections") < 0) {
		createCookie("");

	} else {
		getMyMapCookieValues();
	}

	var lists = {
		africa: ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "MU", "MG", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SD", "SL", "SN", "SO", "SS", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW", "EH", "KM", "GO", "JU", "SH", "ST", "YT", "BV", "CV", "SC"],
		asia: ["AE", "AF", "BD", "BN", "IO", "BT", "CN", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MO", "MM", "MN", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SY", "TH", "TJ", "TL", "TM", "TW", "UZ", "VN", "YE", "HK", "MV", "BH", "SG"],
		europe: ["AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "JE", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MD", "ME", "MK", "NL", "NO", "PL", "PT", "RO", "RS", "SE", "SI", "SJ", "SK", "TR", "UA", "RU", "VA", "MT", "MC", "XK", "LI", "IM", "GI", "FO", "AD", "AX", "GG", "SM"],
		northAmerica: ["BS", "BZ", "CA", "CR", "CU", "DO", "GL", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "PR", "SV", "US", "AG", "AW", "BB", "BL", "GD", "KN", "LC", "MQ", "TC", "VG", "AI", "BM", "DM", "PM", "GP", "KY", "MF", "MS", "SX", "TT", "VC", "VI", "BQ", "CW"],
		southAmerica: ["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE", "GS"],
		oceania: ["AS", "AU", "UM-FQ", "CC", "CX", "FJ", "FM", "GU", "HM", "UM-HQ", "UM-DQ", "UM-JQ", "KI", "MH", "UM-MQ", "MP", "NC", "NF", "NR", "NU", "NZ", "PG", "PW", "SB", "TF", "TK", "TL", "TO", "TV", "VU", "UM-WQ", "WF", "WS", "CK", "PF", "PN"]
	};
	var names = {};

	map = AmCharts.makeChart("mapdiv", {
		"type": "map",
		"theme": "light",
		"addClassNames": true,
		"dataProvider": {
			"map": "worldHigh",
			"getAreasFromMap": true,
			"areas": []
		},
		/*COLOURS CHANGED TO MATCH THEME*/
		"areasSettings": {
			"autoZoom": false,
			"selectable": true,
			"color": "#8e8883",
			"colorSolid": "#906c49",
			"selectedColor": "#be2026",
			"outlineColor": "#c3c0af",
			"rollOverColor": "#c3c0af",
			"rollOverOutlineColor": "#000000"
		}
	});

	map.addListener("clickMapObject", function (event) {
		var CC = event.mapObject.id;
		var checkbox = jQuery("input[value=" + CC + "]");
		var anchor = jQuery(checkbox).parents(".tab-pane").attr("id");
		var mapObject = event.mapObject;

		map.selectedObject = map.dataProvider;

		mapObject.showAsSelected = !mapObject.showAsSelected;
		map.returnInitialColor(mapObject);


		checkbox[0].checked = event.mapObject.showAsSelected;
		addToCookie(checkbox); /*added here the checkbox selection cookie to the listener*/


		jQuery(".section-map-list .nav-tabs [data-anchor=" + anchor + "]").tab("show");
	});

	map.updateSelection = function () {
		var areas = [];
		jQuery(".section-map-list input:checked").each(function () {
			var CC = this.value;

			areas.push({
				id: CC,
				showAsSelected: true
			});
		});
		map.dataProvider.areas = areas;
		map.validateData();
		return areas;
	};

	jQuery(AmCharts.maps.worldHigh.svg.g.path).each(function () {
		if (this.title !== undefined)
			names[this.id] = this.title.replace(/x28/g, '(').replace(/x29/g, ')').replace(/x2C/g, ',');
	});

    //I added the code below to set & store cookies for the map//

    //SET AND STORE COOKIES FOR MY-PLACES MAP//
	//add cookie for areas selected on list//
	jQuery(".section-map-list").each(function () {
		jQuery.map(lists, function (list, name) {
			var tbody = jQuery("#" + name).find("tbody");

			jQuery(list).each(function () {
				var CC = String(this);
				var row = jQuery("<tr>").appendTo(tbody);
				var col = jQuery("<td>").appendTo(row);
				var div = jQuery("<div>").appendTo(col).addClass("checkbox");
				var label = jQuery("<label>").appendTo(div).text(names[CC]);
				var checkbox;
				if (inCookie(this)) {
					checkbox = jQuery("<input>").attr({
						type: "checkbox",
						name: "map",
						value: this,
						checked: 'checked',

					}).prependTo(label);
					map.updateSelection();
				} else {
					checkbox = jQuery("<input>").attr({
						type: "checkbox",
						name: "map",
						value: this
					}).prependTo(label);

				}

				row.on("click", function (e) {
					e.stopImmediatePropagation();
					checkbox.prop("checked", !checkbox.prop("checked"));
					map.updateSelection();
				});

				checkbox.on("click", function (e) {
					if (checkbox.prop("checked")) {
						addToCookie(checkbox);
					} else {
						removeFromCookie(checkbox);
					}
					e.stopImmediatePropagation();
					map.updateSelection();
				});
			});
		});
    });
    var mapCookieValue;

/* If no cookie exists, store country id on click */
function inCookie(countryCode) {
	var gotCode = false;
	if (mapCookieValue != null) {
		if (mapCookieValue.indexOf(",") != -1) {
			var cookieCountryCodes = mapCookieValue.split(",");

			for (var i = 0; i < cookieCountryCodes.length; i++) {
				if (cookieCountryCodes[i] == countryCode) {
					gotCode = true;
				}
			}
		} else {
			gotCode = (mapCookieValue == countryCode) ? true : false;
		}
	}
	return gotCode;
}
/* Get map cookie value from array */
function getMyMapCookieValues() {
	var myMapCookie = "mapSelections=";
	var allCookiesAsArray = document.cookie.split(';');
	for (var i = 0; i < allCookiesAsArray.length; i++) {
		if (allCookiesAsArray[i].indexOf(myMapCookie) != -1) {
			mapCookieValue = allCookiesAsArray[i].substring(allCookiesAsArray[i].indexOf("=") + 1, allCookiesAsArray[i].length);
		}
	}
	return mapCookieValue;
}
/* Add cookie value to array */
function createCookie(value) {
	var date = new Date();
	date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = "mapSelections=" + value + expires + "; path=/";
}

function addToCookie(checkbox) {
	var val = checkbox.prop("value");
	var cookieValue = getMyMapCookieValues();
	if (cookieValue == null || cookieValue.trim() == "") {
		cookieValue = val;
	} else {
		if (cookieValue.includes(val) === false) {
			cookieValue = cookieValue + "," + val;
		} else {
			initial_index = cookieValue.indexOf(val);
	
		}
		cookieValue = cookieValue + "," + val;
	}
	createCookie(cookieValue);
}

function removeFromCookie(checkbox) {
	var val = checkbox.prop("value");
	var cookieValue = getMyMapCookieValues();
	var cookieValueAsArray = cookieValue.split(",");
	var myNewCookieValue = "";
	//keep looping while i is less then array.length//
	for (var i = 0; i < cookieValueAsArray.length; i++) {
		if (val != cookieValueAsArray[i]) {
			myNewCookieValue = myNewCookieValue + cookieValueAsArray[i];
			if (i < cookieValueAsArray.length) {
				myNewCookieValue = myNewCookieValue + ",";
			}
		}
	}
	createCookie(myNewCookieValue);
}


});