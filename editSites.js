
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
  
  if (tableRows < 11) {
    //window.alert(tableRows);
    var row = table.insertRow(-1);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = "<input type='text' id='site" + tableRows + "_url' value='' style='width: 100%'>";
    cell2.innerHTML = "<input type='text' id='site" + tableRows + "_name' value='' style='width: 100%'>";
  } else {
    var addMoreButton = document.getElementById('addMoreButton');
    addMoreButton.disabled = true;
  }
}

function breakDownURL(url) {
    var domain = "",
        page = "";
    //remove "http://"
    if (url.indexOf("http://") == 0) {
        url = url.substr(7);
    }
    //remove "www."
    if (url.indexOf("www.") == 0) {
        url = url.substr(4);
    }
    domain = url.split('/')[0].split('.')[0]
    if (url.split('/').length > 1) {
        page = url.split('/')[1].split('.')[0];
    }
    document.write("domain : " + domain + 
      (page == "" ? "" : " page : " + page) + page + "<br/>");
}

//function enterURL

function loadSiteData() {
  
  
  
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


document.addEventListener('DOMContentLoaded', loadSiteData, false);