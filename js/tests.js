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
    function (backup) {
        console.log('>>>>> Test Model. Delete location from task <<<<<');

        taskManager.addTask('222222', ['loc1', 'loc2']);
        taskManager.deleteLocationFromTask(1, 'loc2');

        return backup;
    },
    function (backup) {
        console.log('>>>>> Test Model. Delete location from task. Empty locations <<<<<');

        taskManager.addTask('222222', ['loc2']);
        taskManager.deleteLocationFromTask(1, 'loc2');

        return backup;
    },
    function (backup) {
        console.log('>>>>> Test Model. Delete nonexistant-location from task  <<<<<');

        taskManager.addTask('222222', ['loc2']);
        taskManager.deleteLocationFromTask(1, 'loc3');

        return backup;
    },
    function (backup) {
        console.log('>>>>> Test Model. Delete from nonexistant-task  <<<<<');

        taskManager.addTask('222222', ['loc2']);
        taskManager.deleteLocationFromTask(2, 'loc3');

        return backup;
    }
];
//----------------- /TESTS ---------------------
