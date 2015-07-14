function onInit() {
  
  //window.alert("loaded");
  numberRowsToAdd = localStorage["numberPeriods"];
  //window.alert(numberRowsToLoad);
  
  if (localStorage["period1_desc"] != "") {
    if (localStorage["period1_enabled"] == "false") {
      document.getElementById('period1_enabled').checked = false;
    } else {
       document.getElementById('period1_enabled').checked = true;
    }
     
    document.getElementById('period1_desc').value = localStorage["period1_desc"];
    document.getElementById('period1_start').value = localStorage["period1_start"];
    document.getElementById('period1_end').value = localStorage["period1_end"];
    document.getElementById('period1_sites').value = localStorage["period1_sites"];
    
    
  }
  
  for (var i = 1; i < numberRowsToAdd; i++) {
    
    var id = i + 1;
    addTableRows();
    if (localStorage["period" + id + "_enabled"] == "false") {
      document.getElementById('period' + id + '_enabled').checked = false;
    } else {
       document.getElementById('period' + id + '_enabled').checked = true;
    }
    document.getElementById('period' + id + '_desc').value = localStorage["period" + id + "_desc"];
    document.getElementById('period' + id + '_start').value = localStorage["period" + id + "_start"];
    document.getElementById('period' + id + '_end').value = localStorage["period" + id + "_end"];
    document.getElementById('period' + id + '_sites').value = localStorage["period" + id + "_sites"];
    
  }
  
  
}


document.addEventListener('DOMContentLoaded', onInit, false);

