
function okClick() {
  window.alert("OK");
  //Run through and save sites
  //Create string on Names
  
}

function cancelClick() {
  window.alert("Cancel");
  //Close window
}

function addMoreClick() {
  window.alert("Add More");
  //Check if table is <10
  //addElements
}

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


document.getElementById('site1_url').addEventListener('click', okClick);

document.getElementById('okButton').addEventListener('click', okClick);
document.getElementById('cancelButton').addEventListener('click', cancelClick);
document.getElementById('addMoreButton').addEventListener('click', addMoreClick);


document.addEventListener('DOMContentLoaded', loadSiteData, false);