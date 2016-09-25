/**
 * Created by mrmxs on 25.09.16.
 */
//--------------------- Session ------------------------
if (typeof(Storage) !== "undefined") {
    //   console.log('OK. LocalStorage SUPPORTED');
    lsManager.init('tasks');
    lsManager.init('locations');
    locationManager.addDefaultLocation();

    tests.forEach(test => {
        var backup = test(JSON.stringify([locs, tasks]));
        backup = JSON.parse(backup);
        locs = backup[0];
        tasks = backup[1];
    });

} else {
    // Sorry! No Web Storage support..
    console.log('No Web Storage support');
}
//--------------------- /Session ------------------------
