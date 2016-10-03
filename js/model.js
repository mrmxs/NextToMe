/**
 * Created by mrmxs on 25.09.16.
 */
//----------------- model ---------------------
model = {
    initLSSession: function () {
        if (typeof(Storage) !== "undefined") {
            console.log('OK. LocalStorage SUPPORTED');

            var lsTasksDefined =
                typeof (lsManager.get('tasks')) != 'undefined';
            var lsLocsDefined =
                typeof (lsManager.get('locations')) != 'undefined';
            var validJSON = false;

            do {
                if (lsTasksDefined && lsLocsDefined) {
                    try {
                        console.log('var "tasks" >>');
                        taskManager.restore(
                            JSON.parse(
                                lsManager.get('tasks')));
                        console.log('var "locs" >>');
                        locationManager.restore(
                            JSON.parse(
                                lsManager.get('locations')));
                        // console.log(locs.toString() + (locs.toString() == '[]'));
                        if (locationManager.getLocs().length === 0) {
                            locationManager.addDefaultLocation();
                        }
                        validJSON = true;
                    } catch (err) {
                        console.log('Invalid JSON string unable to parse. Local Storage will be redefined.');
                        //console.log(err.toString());
                    }
                }
                if (!validJSON) {
                    lsManager.define('tasks');
                    lsManager.define('locations');
                    lsTasksDefined = true;
                    lsLocsDefined = true;
                }
            } while (!validJSON);

            return true;

        } else {
            // Sorry! No Web Storage support..
            console.log('No Web Storage support');

            return false;
        }
    },


    connect: function (taskId, locId) {
        // if (locs.includes(loc => loc.id === locId)) {
        //     console.log('LOCATION BY id NOT FOUND: ' + locId);
        //     locId = 0;
        // }
        // if (!task.locations.includes(locId)) {
        //     task.locations.push(locId);
        //     console.log('TASK #' + task.id + ' CONNECTED WITH LOCATION #' + locId);
        //
        //     lsManager.restore('tasks', tasks);
        // }
        // else {
        //     console.log('TASK #' + task.id + ' ALREADY CONNECTED WITH LOCATION #' + locId);
        // }
    },
    sjkjkjkjkWatching: function () {
        window.setTimeout(function () {
                this.setGeolocation();
            },
            30000 //check every 30 seconds
        );
    }
};
//----------------- /model ---------------------

