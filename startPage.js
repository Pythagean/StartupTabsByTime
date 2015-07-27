
function openStartUpTabs() {
  
  var numberPeriods = 0;
  var enabledData = "";
  var startData = "";
  var endData = "";
  var urlsData = "";
  
  var afterStart = false;
  var beforeEnd = false;
  var currentHour = new Date().getHours();
  var currentMinute = new Date().getMinutes();
  
  window.alert("currentTime: " + currentHour + ":" + currentMinute);
  
  chrome.storage.sync.get("numberPeriods", function(data){
    numberPeriods = data['numberPeriods'] + 1;
    for (var i = 1; i < numberPeriods+1; i++) {
      (function(x) {
        var enabled = "'period" + x + "_enabled'";
        var start = "'period" + x + "_start'";
        var end = "'period" + x + "_end'";
        var urls = "'period" + x + "_urls'";
        
        //Retrieve data from storage
        chrome.storage.sync.get(enabled, function(data){
          enabledData = data[enabled];
          if (enabledData == "false") {
            return true;
          }
        });
        
        chrome.storage.sync.get(start, function(data){
          startData = data[start];
          
        });
        
        chrome.storage.sync.get(end, function(data){
          endData = data[end];
        });
        
        chrome.storage.sync.get(urls, function(data){
          urlsData = data[urls];
        });
        
        var periodHourStart = startData.split(':')[0];
        var periodMinuteStart = startData.split(':')[1];
        var periodHourStart = endData.split(':')[0];
        var periodMinuteEnd = endData.split(':')[1];
        
        
      })(i);
    }
    
  });
  
}


document.addEventListener('DOMContentLoaded', openStartUpTabs, false);