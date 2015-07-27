
function okClick() {

  var tableRows = document.getElementById('sitesTable').rows.length; 
  var numberSites = getURLParameter("numSites");
  
  var numberSitesLabel = "'period" + getURLParameter("period") + "_numberSites'";
  var urlsPeriodLabel = "'period" + getURLParameter("period") + "_urls'";
  var sitesPeriodLabel = "'period" + getURLParameter("period") + "_sites'";
  
  var numberSitesObj = {};
  var urlsObj = {};
  var sitesObj = {};

  var urlsString = "";
  var namesString = "";
  
  var numberSites = 0;
  chrome.storage.sync.set({numberSitesLabel: 0}, function(){
    var i = 1;
      for(i = 1; i < tableRows; i++) {
      (function(x) {

        numberSites += 1;

        //Add comma to string if not first site
        if (numberSites != 1) {
          urlsString += ",";
          namesString += ",";
        }
            
        //Add each row to string
        urlsString += document.getElementById('site' + x + '_url').value;
        namesString += document.getElementById('site' + x + '_name').value;

      })(i);      
    }
    
    numberSitesObj[numberSitesLabel] = numberSites;
    urlsObj[urlsPeriodLabel] = urlsString;
    sitesObj[sitesPeriodLabel] = namesString;
    
    chrome.storage.sync.set(urlsObj, function(){
      chrome.storage.sync.set(sitesObj, function(){
        chrome.storage.sync.set(numberSitesObj, function(){
          window.location = chrome.extension.getURL('options.html');
        });
      });
    });
  });
  
}

function cancelClick() {
  window.close();
}

function addMoreClick() {
  var table = document.getElementById('sitesTable');
  var tableRows = table.rows.length;
   
  //window.alert(tableRows);
  var row = table.insertRow(-1);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  
  cell1.innerHTML = "<input type='text' id='site" + tableRows + "_url' value='' style='width: 100%'>";
  cell2.innerHTML = "<input type='text' id='site" + tableRows + "_name' value='' style='width: 100%'>";
  
  if (tableRows == 10){
    var addMoreButton = document.getElementById('addMoreButton');
    addMoreButton.disabled = true;
  }
  
  document.getElementById('site' + tableRows + '_url').addEventListener('blur', function() {
    onURLChange(tableRows);
  });
  
}

function breakDownURL(url) {
    var page = url;
    //remove "http://"
    if (page.indexOf("http://") == 0) {
        page = page.substr(7);
    }
    //remove "www."
    if (page.indexOf("www.") == 0) {
        page = page.substr(4);
    }
    //remove after last "."
    if (page.indexOf(".") != -1) {
      page = page.substring(0, page.indexOf('.'));
    }
    
    //Capitalizes first character
    page = page[0].toUpperCase() + page.substr(1);
    
    return page;
}

//Called when url text box is changed
//Breaks down url and puts it into name text box
function onURLChange(siteNumber) {
  
  var urlTextBoxID = 'site' + siteNumber + '_url';
  var nameTextBoxID = 'site' + siteNumber + '_name';
  
  var urlTextBoxValue = document.getElementById(urlTextBoxID).value;
  var nameTextBox = document.getElementById(nameTextBoxID);
  
  nameTextBox.value = breakDownURL(urlTextBoxValue);
  
}


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}



function loadSiteData() {

  var numberSites = getURLParameter("numSites");
  var periodNumber = getURLParameter("period");
  
  var urlsString = "";
  var namesString = "";
  
  var urlsLabel = "'period" + periodNumber + "_urls'";
  var namesLabel = "'period" + periodNumber + "_sites'";
  
  chrome.storage.sync.get(urlsLabel, function(data) {
    urlsString = data[urlsLabel];
    chrome.storage.sync.get(namesLabel, function(data) {
      namesString = data[namesLabel];
      if (numberSites == 0) {
        
      } else if (numberSites == 1) {
        document.getElementById('site1_url').value = urlsString.split(',')[0]
        document.getElementById('site1_name').value = namesString.split(',')[0]
      } else {
        document.getElementById('site1_url').value = urlsString.split(',')[0]
        document.getElementById('site1_name').value = namesString.split(',')[0]
        for (var i = 1; i < numberSites; i++) {
          (function(x) {
            addMoreClick();
            var row = x + 1;
            document.getElementById('site' + row + '_url').value = urlsString.split(',')[x]
            document.getElementById('site' + row + '_name').value = namesString.split(',')[x]
          })(i);
        };
      }
      //window.alert("urlsString: " + urlsString);
    });
  });
  
  
  
  
  
   
}


//document.getElementById('site1_url').addEventListener('click', okClick);

document.getElementById('okButton').addEventListener('click', okClick);
document.getElementById('cancelButton').addEventListener('click', cancelClick);
document.getElementById('addMoreButton').addEventListener('click', addMoreClick);

//On url change event
document.getElementById('site1_url').addEventListener('blur', function() {
  onURLChange("1");
});


document.addEventListener('DOMContentLoaded', loadSiteData, false);