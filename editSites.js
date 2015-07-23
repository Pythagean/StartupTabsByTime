
function okClick() {
  window.alert("OK");
  //Run through and save sites
  //Create string on Names
  
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

//Called when url text box is chaged
//Breaks down url and puts it into name text box
function onURLChange(siteNumber) {
  
  var urlTextBoxID = 'site' + siteNumber + '_url';
  var nameTextBoxID = 'site' + siteNumber + '_name';
  
  var urlTextBoxValue = document.getElementById(urlTextBoxID).value;
  var nameTextBox = document.getElementById(nameTextBoxID);
  
  nameTextBox.value = breakDownURL(urlTextBoxValue);
  
}



function loadSiteData() {
  
  var url = window.location.href;
  var numberSites = url.substring(url.indexOf("?")+1).split("=")[1];
  
  if (numberSites == 0) {
    
  } else if (numberSites == 1) {
    
  } else {
    
    for (var i = 1; i < numberSites; i++) {
      (function(x) {
        
        addMoreClick();
        
      })(i);
      
    };
    
  }
  
  
  
 // window.alert(numberSites);
  
  //Get number of sites
  //Create rows
  //Add elements
  //Load Data
  
  
  
  /* chrome.storage.sync.get("numberPeriods", function(data){
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
    
  }); */
  
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