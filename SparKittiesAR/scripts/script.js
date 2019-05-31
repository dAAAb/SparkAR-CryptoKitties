//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.

var Animation = require('Animation');
var FaceTracking = require('FaceTracking');
const Scene = require('Scene');

var ft = Scene.root.child("Device").child("Camera").child("Focal Distance").child("facetracker0");

var pizzaWheel0 = ft.child("pizzas_123");
var pizzaWheel1 = ft.child("pizzas_456");
var pizzaWheel2 = ft.child("pizzas_789");

var mouthIsOpen = FaceTracking.face(0).mouth.openness.gt(0.3).and(FaceTracking.count.gt(0));

pizzaWheel0.hidden = pizzaWheel1.hidden = pizzaWheel2.hidden = mouthIsOpen.not();

var wheelDriver = Animation.timeDriver({durationMilliseconds: 1500, loopCount: Infinity});
var wheelSampler = Animation.samplers.linear(0, -Math.PI*1);

pizzaWheel0.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);
pizzaWheel1.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);
pizzaWheel2.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);

mouthIsOpen.monitor().subscribe( function(e) {
  if (e.newValue == true) {
    wheelDriver.start();
  } else {
  	wheelDriver.stop();
  	wheelDriver.reset();
  }
});

//==============================================================================
// The following example demonstrates how to send a JSON request to an online
// API.
//
// Project setup:
// - Whitelist the jsonplaceholder.typicode.com domain in Capabilities
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const Networking = require('Networking');
const Materials = require('Materials');
const Textures = require('Textures');

// Locate the material and texture in the Assets

// Assign the texture to the material

//==============================================================================
// Create the request
//==============================================================================

// Store the URL we're sending the request to
const url = 'https://api.cryptokitties.co/kitties?owner_wallet_address=0x12a0E25E62C1dBD32E505446062B26AECB65F028&limit=4&offset=0';

// Create a request object
const request = {

  // The HTTP Method of the request
  // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  method: 'GET'

};

//==============================================================================
// Send the request and log the results
//==============================================================================

// Send the request to the url
Networking.fetch(url, request).then(function(result) {

  // Check the status of the result
  // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  if ((result.status >= 200) && (result.status < 300)) {

    // If the request was successful, chain the JSON forward
    return result.json();

  }

  // If the request was not successful, throw an error
  throw new Error('HTTP status code - ' + result.status);

}).then(function(json) {

  // Log the JSON obtained by the successful request
  Diagnostics.log('Successfully sent - ' + json.kitties[0].image_url_png);
  for (var i=0;i<3;i++){
    Diagnostics.log(i);
    Textures.get('externalTexture'+i).url = json.kitties[i].image_url_png;
  }
}).catch(function(error) {

  // Log any errors that may have happened with the request
  Diagnostics.log('Error - ' + error.message);

});