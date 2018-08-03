var Notifications = require('T/notifications');

var savedPush = null;

exports.activate = function() {
	Notifications.activate({
		success: function(e){
			Ti.API.info('Device token : ' + e);
			//require("dataHandlers").subscribeDevice();
		}
	});
};

exports.getRemoteDeviceUUID = function() {
	return Notifications.isRemoteNotificationsEnabled() ? Notifications.getRemoteDeviceUUID() : null;
};

exports.activeReceiver = function() {
	Notifications.onReceived = function(e) {
		
		//Ti.API.info("PUSH received: " + (OS_ANDROID ? e : JSON.stringify(e)));
		stringify(e,'PUSH received: ' );
		
		if(!e || !e.data)
			return;
		
		
		
		var data = e.data;    
		Alloy.Globals.events.trigger("goToNotif");    		
		
		// e.data
		// e.inBackground
						
	};
};

exports.checkSavedPush = function() {
	if(savedPush)
		Notifications.onReceived(savedPush);
};
