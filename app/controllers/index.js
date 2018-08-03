



$.fullname.text = 'Abdullah Alkatheri';
$.flag.text = 'Saudi Arabia';
$.passport.text = '721031112';
$.fingerprint.text = 'Nº090';


function showLiteneraire(e) {
	if (e.error) {
		Ti.API.error('Error: ' + e.error);
	} else {
			Ti.Platform.openURL('http://maps.google.com/maps?saddr=' + 21.5851044 + ',' + 39.1938863 + '&daddr=' + 21.5990047 + ',' + 39.1595597 + '&sensor=false');
	}
}

function finishProcess(){
	alert('Success');
}
/*
require("dataHandlers").test(function(response) {
		//Alloy.Globals.globals = response;
		stringify(response, 'globalsssssssssss');
	}, function error() {
	});
*/	
	
//require('pushManager').activate();

$.index.open();
/*
var core = require('firebase.core');
//var fcm = require('firebase.cloudmessaging');

// Configure core module (required for all Firebase modules).
core.configure();
core.configure({
    GCMSenderID: '960573827199',
    googleAppID: 'sada-478c0', // Differs between Android and iOS.
    // file: 'GoogleService-Info.plist' // If using a plist (iOS only).
});

// Called when the Firebase token is registered or refreshed.
fcm.addEventListener('didRefreshRegistrationToken', function(e) {
    Ti.API.info('Token', e.fcmToken);
});

// Called when direct messages arrive. Note that these are different from push notifications.
fcm.addEventListener('didReceiveMessage', function(e) {
    Ti.API.info('Message', e.message);
});

// Android-only: For configuring custom sounds and importance for the generated system 
// notifications when app is in the background
OS_ANDROID && fcm.createNotificationChannel({
    sound: 'warn_sound',
    channelId: 'general',
    channelName: 'General Notifications',
    importance: 'high' //will pop in from the top and make a sound
})
;
// Register the device with the FCM service.
fcm.registerForPushNotifications();

// Check if token is already available.
if (fcm.fcmToken) {
    Ti.API.info('FCM-Token', fcm.fcmToken);
} else {
    Ti.API.info('Token is empty. Waiting for the token callback ...');
}

// Subscribe to a topic.
fcm.subscribeToTopic('testTopic');
*/