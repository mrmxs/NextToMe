/**
 * Created by mrmxs on 25.09.16.
 */
//----------------- TESTS ---------------------
tests = [
    // function (backup) {
    //     console.log('>>>>> Test Model. Add 1 task <<<<<');
    //
    //     taskManager.addTask('111111', '1111111');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test TM. Add 2 Tasks <<<<<');
    //
    //     taskManager.addTask('111111', '1111111');
    //     taskManager.addTask('222222', '2222222');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete Task (id === 1) <<<<<');
    //
    //     taskManager.addTask('111111', '1111111');
    //     taskManager.addTask('222222', '2222222');
    //     taskManager.deleteTask(1);
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Add 1 Location <<<<<');
    //
    //     locationManager.addLocation('loc1', [45.56565, 36.565757]);
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Add 2 Locations <<<<<');
    //
    //     locationManager.addLocation('loc1', [45.56565, 36.565757]);
    //     locationManager.addLocation('loc2', [45.56565, 36.565757]);
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete Location (id === 1) <<<<<');
    //
    //     locationManager.addLocation('loc1', [45.56565, 36.565757]);
    //     locationManager.addLocation('loc2', [45.56565, 36.565757]);
    //     locationManager.deleteLocation(1);
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Add location to the task <<<<<');
    //
    //     taskManager.addTask('111111', ['loc1']);
    //     taskManager.addTask('222222', ['loc2']);
    //     taskManager.addLocationToTask(2, 'loc3');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete location from task <<<<<');
    //
    //     taskManager.addTask('222222', ['loc1', 'loc2']);
    //     taskManager.deleteLocationFromTask(1, 'loc2');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete location from task. Empty locations <<<<<');
    //
    //     taskManager.addTask('222222', ['loc2']);
    //     taskManager.deleteLocationFromTask(1, 'loc2');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete nonexistant-location from task  <<<<<');
    //
    //     taskManager.addTask('222222', ['loc2']);
    //     taskManager.deleteLocationFromTask(1, 'loc3');
    //
    //     return backup;
    // },
    // function (backup) {
    //     console.log('>>>>> Test Model. Delete from nonexistant-task  <<<<<');
    //
    //     taskManager.addTask('222222', ['loc2']);
    //     taskManager.deleteLocationFromTask(2, 'loc3');
    //
    //     return backup;
    // },
    function (backup) {
        console.log('>>>>> Test Model. Distance locations  <<<<<');
        console.log('case 1: 57.767938, 40.926925 - 57.766930, 40.924733 = 165 m');
        console.log(geoposManager.distance(57.767938, 40.926925, 57.766930, 40.924733));
        console.log('case 2: 57.767938, 40.926925 - 57.770823, 40.933123 = 495 m');
        console.log(geoposManager.distance(57.767938, 40.926925, 57.770823, 40.933123));

        return backup;
    },
    function (backup) {
        console.log('>>>>> Test Model. Distance from current  <<<<<');
        console.log('case: location: 57.767938, 40.926925. current: '
            + currentLocation.latitude + ','
            + currentLocation.longitude);
        console.log(geoposManager.distanceFromCurrent(57.767938, 40.926925));

        return backup;
    },
    function (backup) {
        console.log('>>>>> Test Model. Get current  <<<<<');
        console.log('example: lat: 35.5830119, lng: -124.4871223, accuracy: 40');
        geoposManager.init();
        return backup;
    }

]
;
//----------------- /TESTS ---------------------
