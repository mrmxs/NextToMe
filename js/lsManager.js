/**
 * Created by mrmxs on 25.09.16.
 */
//----------------- HTML5 Local Storage. Local Storage Manager ---------------------
lsManager = {
    define: function (key) {
        // define localStorage key
        localStorage.setItem(key, JSON.stringify([]));
        console.log('DEFINE localStorage.' + key);
    },
    set: function (key, value) {
        // restore localStorage key
        localStorage.setItem(key, JSON.stringify(value));
        console.log('localStorage.' + key + ' UPDATED: ' + localStorage[key]);
    },
    get: function(key) {
       return localStorage[key];
    }//,
    // show: function(key) {
    //     var body = document.getElementsByTagName('body')[0];
    //     body.innerHTML = localStorage[key];
    //     //console.log = localStorage[key];
    // }
};
//----------------- /Local Storage Manager ---------------------
