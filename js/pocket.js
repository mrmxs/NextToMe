/**
 * Created by mrmxs on 25.09.16.
 */

// //NOTIFICATIONS -ANDROID NOT OK!
// function sendNotification(title, options) {
//   // Проверим, поддерживает ли браузер HTML5 Notifications
//   if (!("Notification" in window)) {
//     console.log('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
//   }

//   // Проверим, есть ли права на отправку уведомлений
//   else if (Notification.permission === "granted") {
//     // Если права есть, отправим уведомление
//     var notification = new Notification(title, options);

//     function clickFunc() {
//       console.log('Пользователь кликнул на уведомление');
//     }

//     notification.onclick = clickFunc;
//   }

//   // Если прав нет, пытаемся их получить
//   else if (Notification.permission !== 'denied') {
//     Notification.requestPermission(function(permission) {
//       // Если права успешно получены, отправляем уведомление
//       if (permission === "granted") {
//         var notification = new Notification(title, options);

//       } else {
//         console.log('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
//       }
//     });
//   } else {
//     // Пользователь ранее отклонил наш запрос на показ уведомлений
//     // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
//   }
// }

// // sendNotification('Kostroma.', {
// //   body: 'You are here',
// //   icon: '214929.jpg',
// //   dir: 'auto'
// // });

// //GEOLOCATION
// function showMap(position) {
//   currentCoords = position.coords.latitude + ',' + position.coords.longitude;
//   // Show a map centered at (position.coords.latitude, position.coords.longitude).
//   sendNotification(
//     currentCoords, { 
//       body: 'Вы здесь.',
//       icon: '214929.jpg',
//       dir: 'auto'
//     });
// }

// // One-shot position request.
// navigator.geolocation.getCurrentPosition(showMap);

// //Example of requesting repeated position updates and handling errors.

// function scrollMap(position) {
//   // Scrolls the map so that it is centered at (position.coords.latitude, position.coords.longitude).
//   //showMap(position);
// }

// function handleError(error) {
//   // Update a div element with error.message.
// }

// // Request repeated updates.
// var watchId = navigator.geolocation.watchPosition(scrollMap, handleError);

// function buttonClickHandler() {
//   // Cancel the updates when the user clicks a button.
//   navigator.geolocation.clearWatch(watchId);
// }
