
function openStartUpTabs() {
  
  var numberPeriods = 0;
  var enabledData = "";
  var descData = "";
  var startData = "";
  var endData = "";
  var urlsData = "";
  
  var activePeriod = "Default";
  var activePeriodUrls = "";
  
  var afterStart = false;
  var beforeEnd = false;
  var currentHour = new Date().getHours();
  var currentMinute = new Date().getMinutes();
  
 // window.alert("currentTime: " + currentHour + ":" + currentMinute);
  
  chrome.storage.sync.get("numberPeriods", function(data){
    numberPeriods = data['numberPeriods'] + 1;
    for (var i = 1; i < numberPeriods+1; i++) {
      (function(x) {
        var enabled = "'period" + x + "_enabled'";
        var desc = "'period" + x + "_desc'";
        var start = "'period" + x + "_start'";
        var end = "'period" + x + "_end'";
        var urls = "'period" + x + "_urls'";
        
        chrome.storage.sync.get(enabled, function(data){
          enabledData = data[enabled];
          if (enabledData == "false") {
            return true;
          }
        });
        
        chrome.storage.sync.get(start, function(data){
          startData = data[start];
          
        });
        
        chrome.storage.sync.get(desc, function(data){
          descData = data[desc];
          
        });
        
        chrome.storage.sync.get(end, function(data){
          endData = data[end];
        });
        
        chrome.storage.sync.get(urls, function(data){
          urlsData = data[urls];
          
          if (startData != "-" && endData != "-") {
            var periodHourStart = startData.split(':')[0];
            var periodMinuteStart = startData.split(':')[1];
            var periodHourEnd = endData.split(':')[0];
            var periodMinuteEnd = endData.split(':')[1];
            
            if (currentHour > periodHourStart && currentHour < periodHourEnd) {
              if (activePeriod == "Default"){
                activePeriod = descData;
                activePeriodUrls = urlsData;
              }
            }
            if (currentHour == periodHourStart && currentMinute > periodMinuteStart) {
              if (activePeriod == "Default"){
                activePeriod = descData;
                activePeriodUrls = urlsData;
              }
            }
            if (currentHour == periodHourEnd && currentMinute < periodMinuteEnd) {
              if (activePeriod == "Default"){
                activePeriod = descData;
                activePeriodUrls = urlsData;
              }
            }
          }
        });
      })(i);
    }
    window.alert("Active Period: " + activePeriod);
    window.alert("URLs: " + activePeriodUrls);
    
    if (activePeriodUrls != "") {
      var urlsArray = activePeriodUrls.split(',');
      var urlsArrayLength = urlsArray.length;
      for (var i = 0; i < urlsArrayLength; i++) {
        chrome.tabs.create({
        //tabId: tab.id,
        url: "http://" + urlsArray[i],
        active: false
        });
      }
    }
    
    
  });
  
}


document.addEventListener('DOMContentLoaded', openStartUpTabs, false);