//Header

var Animation = require('Animation');
var FaceTracking = require('FaceTracking');
const Scene = require('Scene');

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

//==============================================================================
// Fetch blockchain data
//==============================================================================
// load CryptoKitties by using CK API https://api.cryptokitties.co/kitties?owner_wallet_address=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]&limit=[NUMBER-OF-KITTIES]&offset=[START-FROM-WHICH-KITTY]
// you can also use OpenSea API https://api.opensea.io/api/v1/assets/?format=json&order_by=current_price&order_direction=asc&owner=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]
// also show how rich this user is by Etherscan API https://api.etherscan.io/api?module=account&action=balance&address=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]
// don't forget to Whitelist the api.cryptokitties.co or other api domain in Capabilities.
// if you want to display Kitties PNG as externalTexure source, remember to Whitelist the img.cryptokitties.co as well.

const url = 'https://api.cryptokitties.co/kitties?owner_wallet_address=0x12a0E25E62C1dBD32E505446062B26AECB65F028&limit=4&offset=1';

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
  // JC: Sorry for some brute-force hard coding style...
  for (var i=0;i<3;i++){
    //Check if data loaded
    Diagnostics.log(i);
    Diagnostics.log('Successfully load - ' + json.kitties[i].image_url_png);
    //Display Kitties
    Textures.get('externalTexture'+i).url = json.kitties[i].image_url_png;
  }
}).catch(function(error) {

  // Log any errors that may have happened with the request
  Diagnostics.log('Error - ' + error.message);

});