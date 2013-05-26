chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); // snub them.
});
