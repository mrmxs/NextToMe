/**
 * Created by mrmxs on 25.09.16.
 */
//--------------------- Session ------------------------

model.initLSSession();


tests.forEach(test => {
    var backup = test(JSON.stringify([locs, tasks]));
    backup = JSON.parse(backup);
    locs = backup[0];
    tasks = backup[1];
});


//--------------------- /Session ------------------------
