/*MY PLACCES PAGE MAP*/

jQuery(document).ready(function () {
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
    }

    jQuery(AmCharts.maps.worldHigh.svg.g.path).each(function () {
        if (this.title !== undefined)
            names[this.id] = this.title.replace(/x28/g, '(').replace(/x29/g, ')').replace(/x2C/g, ',');
    });


    jQuery(".section-map-list").each(function () {
        jQuery.map(lists, function (list, name) {
            var tbody = jQuery("#" + name).find("tbody");

            jQuery(list).each(function () {
                var CC = String(this);
                var row = jQuery("<tr>").appendTo(tbody);
                var col = jQuery("<td>").appendTo(row);
                var div = jQuery("<div>").appendTo(col).addClass("checkbox");
                var label = jQuery("<label>").appendTo(div).text(names[CC]);
                var checkbox = jQuery("<input>").attr({
                    type: "checkbox",
                    name: "map",
                    value: this
                }).prependTo(label);

                row.on("click", function (e) {
                    e.stopImmediatePropagation();
                    checkbox.prop("checked", !checkbox.prop("checked"));
                    map.updateSelection();
                });

                checkbox.on("click", function (e) {
                    e.stopImmediatePropagation();
                    map.updateSelection();
                });
            });
        });
    });

});


/*SET AND STORE COOKIES FOR MY-PLACES MAP*/
