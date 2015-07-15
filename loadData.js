function onInit() {
  
  //window.alert("loaded");
  //numberRowsToAdd = localStorage["numberPeriods"];
  
  var numberRowsToAdd = 0;
  var enabledData = "";
  var descData = "";
  var startData = "";
  var endData = "";
  var sitesData = "";
        
  chrome.storage.sync.get("numberPeriods", function(data){
    numberRowsToAdd = data['numberPeriods'] + 1;
    
    if (numberRowsToAdd > 20)
      numberRowsToAdd = 20;
    
    for (var i = 1; i < numberRowsToAdd; i++) {
      (function(x) {
        //Create variables for element names
        var enabled = "'period" + x + "_enabled'";
        var desc = "'period" + x + "_desc'";
        var start = "'period" + x + "_start'";
        var end = "'period" + x + "_end'";
        var sites = "'period" + x + "_sites'";
        
        if (x != 1)
          addTableRows();
        
        //Retrieve data from storage
        chrome.storage.sync.get('enabled', function(data){
          enabledData = data['enabled'];
          if (enabledData == "false") {
            document.getElementById('period' + x + '_enabled').checked = false;
          } else {
             document.getElementById('period' + x + '_enabled').checked = true;
          }
        });
        console.log("x: " + x);
        chrome.storage.sync.get('desc', function(data){
          descData = data['desc'];
          document.getElementById('period' + x + '_desc').value = descData;
        });
        
        chrome.storage.sync.get('start', function(data){
          startData = data['start'];
          document.getElementById('period' + x + '_start').value = startData;
        });
        
        chrome.storage.sync.get('end', function(data){
          endData = data['end'];
          document.getElementById('period' + x + '_end').value = endData;
        });
        
        chrome.storage.sync.get('sites', function(data){
          sitesData = data['sites'];
          document.getElementById('period' + x + '_sites').value = sitesData;
        });
        
      })(i);
      
    }
    
     //Set Default Data
 /*  if (descData != "") {
    if (enabledData == "false") {
      document.getElementById('period1_enabled').checked = false;
    } else {
       document.getElementById('period1_enabled').checked = true;
    }
    document.getElementById('period1_desc').value = descData;
    document.getElementById('period1_start').value = startData;
    document.getElementById('period1_end').value = endData;
    document.getElementById('period1_sites').value = sitesData;
  } */
    
  //Load rest of data into elements
  /* for (var i = 1; i < numberRowsToAdd; i++) {
    
    var id = i + 1;
    addTableRows();
    if (enabledData == "false") {
      document.getElementById('period' + id + '_enabled').checked = false;
    } else {
       document.getElementById('period' + id + '_enabled').checked = true;
    }
    document.getElementById('period' + id + '_desc').value = descData;
    document.getElementById('period' + id + '_start').value = startData;
    document.getElementById('period' + id + '_end').value = endData;
    document.getElementById('period' + id + '_sites').value = sitesData;
    
  } */
    
  });
  
 
  
  
}


document.addEventListener('DOMContentLoaded', onInit, false);

