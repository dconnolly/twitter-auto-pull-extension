/* global
    document: true,
    window: true,
*/

var checkForNewTweets = function() {

  var newTweetsBar = document.getElementsByClassName('js-new-tweets-bar');

  // check if there are new tweets ready to process
  if(newTweetsBar.length > 0) {
    // load and process new tweets
    newTweetsBar[0].click();
  }
};

// Set up Mutation Observers for 'new tweets' dom insert.
var targetNodes = $(".stream-container .js-new-items-bar-container");
var Observer = window.MutationObserver || window.WebKitMutationObserver;
var myObserver = new Observer(mutationHandler);
var obsConfig = { childList: true, characterData: true, attributes: true, subtree: true };

//--- Add a target node to the observer. Can only add one node at a time.
targetNodes.each (function () {
  myObserver.observe (this, obsConfig);
});

// Watch for possible 'new tweets' element insertion, call loader.
function mutationHandler (mutationRecords) {
  mutationRecords.forEach(function (mutation) {
    if (mutation.addedNodes.length > 0) {
      checkForNewTweets();
    }
  });
}
