/**
 * Created by mrmxs on 25.09.16.
 */
//----------------- Location Manager ---------------------
var locs = [];

var Location = function (id, name, position) {
    return {
        id: id,
        name: name,
        position: position
    };
};

locationManager = {
    addLocation: function (name, position) {
        var id;
        if (locs.length === 0) {
            id = 1;
        } else {
            var lastLoc = locs[locs.length - 1];
            id = lastLoc.id + 1;
        }
        var newLoc = new Location(id, name, position);
        locs.push(newLoc);
        console.log('NEW LOCATION OBJECT: ' + JSON.stringify(newLoc));

        lsManager.set('locations', locs);
    },
    addDefaultLocation: function () {
        var newLoc = new Location(0, 'default', [0, 0]);
        locs.push(newLoc);
        console.log('NEW LOCATION OBJECT: ' + JSON.stringify(newLoc));

        lsManager.set('locations', locs);
    },
    deleteLocation: function (id) {
        var delIndex = locs.findIndex(element => element.id === id);
        if (delIndex !== -1) {
            var removed = locs.splice(delIndex, 1);
            console.log('LOCATION DELETED: ' + JSON.stringify(removed));

            lsManager.set('locations', locs);
        } else {
            console.log('NO LOCATIONS DELETED. id NOT FOUND: ' + id);
        }
    }
};
//----------------- /Location Manager ---------------------

