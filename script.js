function saveChanges() {
        
  var table = document.getElementById('periodsTable');
  var tableRows = table.rows.length;    
 
  //localStorage.clear();
  
  var numberPeriods = 0;
  chrome.storage.sync.set({'numberPeriods': 0}, function(){
    var i = 1;
  
    //while (i < tableRows) {
    for(i = 1; i < tableRows; i++) {
      (function(x) {
        descElement = 'period' + x + '_desc';
        if (document.getElementById(descElement).value == "") {
          //i++;  
          //continue;
        }

        numberPeriods += 1;

        chrome.storage.sync.set({'numberPeriods': numberPeriods}, function(){
          console.log("Saved 'numberPeriods' as " + numberPeriods);
          
          var enabled = "'period" + x + "_enabled'";
          var desc = "'period" + x + "_desc'";
          var start = "'period" + x + "_start'";
          var end = "'period" + x + "_end'";
          var sites = "'period" + x + "_sites'";
          var numberSites = "'period" + x + "_numberSites'";
          
          var enabledObj = {};
          var descObj = {};
          var startObj = {};
          var endObj = {};
          var sitesObj = {};
          var numberSitesObj = {};
          
          enabledObj[enabled] = document.getElementById('period' + x + '_enabled').checked;
          descObj[desc] = document.getElementById('period' + x + '_desc').value;
          startObj[start] = document.getElementById('period' + x + '_start').value;
          endObj[end] = document.getElementById('period' + x + '_end').value;
          sitesObj[sites] = document.getElementById('period' + x + '_sites').value;
          if (sitesObj[sites] == '') {
            numberSitesObj[numberSites] = 0;
          } else {
            var sitesArray = sitesObj[sites].split(",")
            numberSitesObj[numberSites] = sitesArray.length;
          }
         
          chrome.storage.sync.set(enabledObj, function(){
           // console.log("Saved " + enabled + " as " + enabledSave);
          });
          chrome.storage.sync.set(descObj, function(){
           // console.log("Saved " + desc+ " as " + descSave);
          });
          chrome.storage.sync.set(startObj, function(){});
          chrome.storage.sync.set(endObj, function(){});
          chrome.storage.sync.set(sitesObj, function(){});
          chrome.storage.sync.set(numberSitesObj, function(){});
          
          
        });
      })(i);
    //for (var i = 1; i < tableRows; i++) {
      //Skip if not a valid period
      
    }
  });
     
        
};


function deleteLocal() {
  //localStorage.clear();
  numberPeriods = 1;
  chrome.storage.sync.set({'numberPeriods': numberPeriods}, function(){console.log("Saved 'numberPeriods' as " + numberPeriods)});
}

/* function getChromeStorage() {
  
  var dataLoaded = {};
  var numberPeriods = 0;
  chrome.storage.sync.get("numberPeriods", function(data){
    numberPeriods = data['numberPeriods'];
    for (var i = 1; i < numberPeriods; i++) {
      
    }
  });
  
  var numberPeriods = 0;
  chrome.storage.sync.get("numberPeriods", function(data){
    numberPeriods = data['numberPeriods'];
    for (var i = 1; i < numberPeriods; i++) {
     (function(x) {
        var enabled = "'period" + x + "_enabled'";
        var desc = "'period" + x + "_desc'";
        var start = "'period" + x + "_start'";
        var end = "'period" + x + "_end'";
        var sites = "'period" + x + "_sites'";
      
        chrome.storage.sync.get(enabled, function(data){
          console.log("chrome.storage.sync.get[" + enabled + "]: " + data['enabled']);
        });
        chrome.storage.sync.get(desc, function(data){
          console.log("chrome.storage.sync.get[" + desc + "]: " + data['desc']);
        });
        chrome.storage.sync.get(start, function(data){
          //console.log("chrome.storage.sync.get[" + start + "]: " + data['start']);
        });
        chrome.storage.sync.get(end, function(data){
          //console.log("chrome.storage.sync.get[" + end + "]: " + data['end']);
        });
        chrome.storage.sync.get(sites, function(data){
          //console.log("chrome.storage.sync.get[" + sites + "]: " + data['sites']);
        });
     })(i);
      
    }
  })
  
  
} */
function addEditSitesButtonMethods() {
  
  chrome.storage.sync.get("numberPeriods", function(data){
    numberRowsToAdd = data['numberPeriods'] + 1;
    
    //console.log("TEST: " + numberRowsToAdd);
    
    if (numberRowsToAdd > 20)
      numberRowsToAdd = 20;
    
    for (var i = 1; i < numberRowsToAdd; i++) {
      (function(x) {
       // console.log("TEST: ");
        buttonID = "period" + x + "_editSites"
        //console.log(buttonID + " -> " + "editSites")
        document.getElementById(buttonID).addEventListener('click', function() {
          editSites(x);
        });
        
      })(i);
      
    };
    
  });
  
}



function editSites(periodNumber) {
  
  var numberSitesField = "'period" + periodNumber + "_numberSites'";
  
  //window.alert("' " + periodNumber +  "' Edit Sites Clicked")
  chrome.storage.sync.get(numberSitesField, function(data){
    
    var numberSites = data[numberSitesField];
    //window.alert("numberSites: " + numberSites);
    
    chrome.windows.create({
      //tabId: tab.id,
      url: chrome.extension.getURL('editSites.html?numSites=' + numberSites),
      type: 'popup',
      focused: true,
      width: 400,
      height: 370
    });
  });
  
  


  
}


function addTableRows() {
  
  var table = document.getElementById('periodsTable');
  var tableRows = table.rows.length;
  
  if (tableRows < 11) {
    //window.alert(tableRows);
    var row = table.insertRow(-1);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    cell1.innerHTML = "<input type='checkbox' id='period" + tableRows + "_enabled' value='enabled'>";
    cell2.innerHTML = "<input type='text' id='period" + tableRows + "_desc' style='width: 100%'>";
    cell3.innerHTML = "<input type='time' id='period" + tableRows + "_start'>";
    cell4.innerHTML = "<input type='time' id='period" + tableRows + "_end'>";
    cell5.innerHTML = "<input type='text' id='period" + tableRows + "_sites'>";
    cell6.innerHTML = "<input type='button' id='period" + tableRows + "_editSites' value='Edit Sites'>";
  }else {
    var addMoreButton = document.getElementById('addMoreButton');
    addMoreButton.disabled = true;
  }
}



document.getElementById('addMoreButton').addEventListener('click', addTableRows);
document.getElementById('deleteButton').addEventListener('click', deleteLocal);


//document.getElementById('chromeStorageButton').addEventListener('click', getChromeStorage);


document.getElementById('saveButton').addEventListener('click', saveChanges);

document.addEventListener('DOMContentLoaded', addEditSitesButtonMethods, false);