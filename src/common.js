
angular.module('$cordova.config', []).value('$cordova.config', {});
angular.module('$cordova', ['$cordova.config']);

(function create_stage() {
   var el = document.createElement("div");
   el.id = 'stage';
   document.body.appendChild(el);
})();

window.app = {
    // Application Constructor
    initialize: function() {
      console.log('initialize');
      this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
      console.log('bindEvents');
      var _this = this;
      window.document.addEventListener(
	'deviceready', function() { 
	  console.log("RECV deviceready");
	  _this.onDeviceReady.apply(_this,arguments);
	}, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

