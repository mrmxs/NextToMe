/**
 * Created by mrmxs on 25.09.16.
 */
//----------------- Task Manager ---------------------
var tasks = [];

var Task = function (id, text, locations) {
    return {
        id: id,
        text: text,
        locations: locations
    };
};

taskManager = {
    addTask: function (text, locations) {
        var id;
        if (tasks.length === 0) {
            id = 1;
        }
        else {
            var lastTask = tasks[tasks.length - 1];
            id = lastTask.id + 1;
        }
        var newTask = new Task(id, text, locations);
        tasks.push(newTask);
        console.log('NEW TASK OBJECT: ' + JSON.stringify(newTask));

        lsManager.set('tasks', tasks);
    },
    deleteTask: function (id) {
        var delIndex = tasks.findIndex(element => element.id === id);
        if (delIndex !== -1) {
            var removed = tasks.splice(delIndex, 1);
            console.log('TASK DELETED: ' + JSON.stringify(removed));

            lsManager.set('tasks', tasks);
        }
        else {
            console.log('NO TASKS DELETED. id NOT FOUND: ' + id);
        }
    },
    addLocationToTask: function (taskId, locationId) {
        var taskIndex = tasks.findIndex(element => element.id === taskId);
        if (taskIndex !== -1) {
            var changed = tasks[taskIndex];
            if (!changed.locations.includes(locationId)) {
                changed.locations.push(locationId);
                console.log('location ' + locationId + ' ADDED TO TASK #' + taskId + ': ' +
                    JSON.stringify(tasks[taskIndex]));

                lsManager.set('tasks', tasks);
            }
            else {
                console.log('location ' + locationId + ' ALREADY CONNECTED WITH TASK #' + taskId);
            }
        }
        else {
            console.log('TASKS NOT CHANGED. id NOT FOUND: ' + taskId);
        }
    },
    deleteLocationFromTask: function (taskId, locationId) {
        var taskIndex = tasks.findIndex(element => element.id === taskId);

        if (taskIndex !== -1) {
            var changed = tasks[taskIndex];
            var locationIndex = changed.locations.findIndex(element => element === locationId);

            if (locationIndex !== -1) {
                changed.locations.splice(locationIndex, 1);
                console.log('location ' + locationId + ' DELETED FROM TASK #' + taskId + ': ' +
                    JSON.stringify(tasks[taskIndex]));

                if (changed.locations.length === 0) {
                    taskManager.addLocationToTask(taskId, 0);
                }
                else {
                    lsManager.set('tasks', tasks);
                }
            }
            else {
                console.log('TASKS NOT CHANGED. ' +
                    'location ' + locationId + ' NOT CONNECTED WITH TASK #' + taskId);
            }
        }
        else {
            console.log('TASKS NOT CHANGED. id NOT FOUND: ' + taskId);
        }
    }
};
//----------------- /Task Manager ---------------------


