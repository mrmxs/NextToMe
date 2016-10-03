/**
 * Created by mrmxs on 27.09.16.
 */
var currentLocation = {
    latitude: 0,
    longitude: 0,
    accuracy: 0
//     latitude: 55.7485233, //Moscow
//     longitude: 37.0734954,
//     accuracy: 0
};

var geoposManager = {
    init: function () {
        window.navigator.geolocation.getCurrentPosition(this.setCurrent,
            function () {
                /*error*/
            }, {
                maximumAge: 250,
                enableHighAccuracy: true
            });
    },
    setCurrent: function (position) {
        currentLocation.latitude = position.coords.latitude;
        currentLocation.longitude = position.coords.longitude;
        currentLocation.accuracy = position.coords.accuracy;
        console.log(
            'lat: ' + currentLocation.latitude + ', '
            + 'lng: ' + currentLocation.longitude + ', '
            + 'accuracy: ' + currentLocation.accuracy);
    },
    getCurrent: function () {
        return currentLocation;
    },
    distance: function (lat1, lon1, lat2, lon2) {
        var rlat1 = Math.PI * lat1 / 180;
        var rlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var rtheta = Math.PI * theta / 180;
        var dist =
            Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) *
            Math.cos(rlat2) * Math.cos(rtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;

        return dist * 1.609344; //from miles to km
    },
    distanceFromCurrent: function (lat1, lon1) {
        return this.distance(lat1, lon1, currentLocation.latitude, currentLocation.longitude);
    },
    inRadius: function (lat1, lon1, lat2, lon2, radius) {
        return radius >= this.distance(lat1, lon1, lat2, lon2);
    },
    startWatching: function () {
        var geolocation = window.navigator.geolocation.watchPosition(
            this.setCurrent
            , function () {
                /*error*/
            }, {
                maximumAge: 250,
                enableHighAccuracy: true
            }
        );
        window.setTimeout(function () {
                window.navigator.geolocation.clearWatch(geolocation)
            },
            5000 //stop checking after 5 seconds
        );
    }
};