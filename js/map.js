/**
 * Created by mrmxs on 04.10.16.
 */
//----------------- map ---------------------
var myMap;
map = {
    init: function () {
        var curPos = geoposManager.getCurrent();
        ymaps.ready(function() {
            myMap = new ymaps.Map('map', {
                center: [curPos.latitude, curPos.longitude],
                zoom: 13
            });
        });
    },
    update: function () {
        // var curPos = geoposManager.getCurrent();
        // myMap.setCenter([curPos.latitude, curPos.longitude], 13);
        myMap.setCenter([35, 46], 13);
    }
};
//----------------- /map ---------------------

