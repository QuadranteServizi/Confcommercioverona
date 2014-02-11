/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements. See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership. The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"1073127551296","ecb":"app.onNotificationGCM"});


        //--Back button
        document.addEventListener("backbutton", function(e){
          if($.mobile.activePage.is('#homepage')){
              e.preventDefault();
              navigator.app.exitApp();
          }
          else {
            navigator.app.backHistory()
          }
        }, false);
        //--------------------
        
        
       //--Menu button
        document.addEventListener("menubutton", onMenuKeyDown, false);
        

        // Handle the menu button
        //
        function onMenuKeyDown() {   
           $('#popupDialog').popup({history: false});//awesomeness
           $('#popupDialog').popup('open');

        }
        //--------------------
        
        //--Search button
        document.addEventListener("searchbutton", onSearchKeyDown, false);


        // Handle the search button
        //
        function onSearchKeyDown() {
         alert('search');
        }
        //--------------------





        
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // result contains any message sent from the plugin call
    successHandler: function(result) {
        //alert('Callback Success! Result = '+result)
    },
    errorHandler:function(error) {
        alert(error);
    },
    onNotificationGCM:function(e) {
        switch( e.event )
        {
            case 'registered':
              if ( e.regid.length > 0 )
                {
                 
                    var url='http://www.confcommercioverona.it/app/notify_newdevice.php?registrationId='+e.regid;
                    
                    var ref = window.open(url, '_self','hidden=yes');
                    ref.addEventListener('loadstart', function() { /*alert('start: ' + event.url); */});
                    ref.addEventListener('loadstop', function() { /*alert('stop: ' + event.url); */});
                    ref.addEventListener('exit', function() { /*alert(event.type);*/ });   
                    // close InAppBrowser after 5 seconds
                    setTimeout(function() {
                      ref.close();
                    }, 5000)
                    
                   
               }
            break;

            case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert(e.message);
                break;

            case 'error':
                alert('GCM error = '+e.msg);
                break;

            default:
                alert('An unknown GCM event has occurred');
                break;
        }
    }

};