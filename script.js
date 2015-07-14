function saveChanges() {
        
        var table = document.getElementById('periodsTable');
        var tableRows = table.rows.length;    
       
        localStorage.clear();
        
        localStorage["numberPeriods"] = 0;
        
        for (var i = 1; i < tableRows; i++) {
          //Skip if not a valid period
          if (document.getElementById('period' + i + '_desc').value == "")
            continue;
          
          var numberPeriods = parseInt(localStorage["numberPeriods"]);
          numberPeriods += 1;
          localStorage["numberPeriods"] = numberPeriods;
          
          localStorage["period" + i + "_enabled"] = document.getElementById('period' + i + '_enabled').checked;
          localStorage["period" + i + "_desc"] = document.getElementById('period' + i + '_desc').value;
          localStorage["period" + i + "_start"] = document.getElementById('period' + i + '_start').value;
          localStorage["period" + i + "_end"] = document.getElementById('period' + i + '_end').value;
          localStorage["period" + i + "_sites"] = document.getElementById('period' + i + '_sites').value;
       
        }

};

function deleteLocal() {
  localStorage.clear();
  
}



function addTableRows() {
  
  var table = document.getElementById('periodsTable');
  var tableRows = table.rows.length;
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

}


document.getElementById('addMoreButton').addEventListener('click', addTableRows);
document.getElementById('deleteButton').addEventListener('click', deleteLocal);

document.getElementById('saveButton').addEventListener('click', saveChanges);