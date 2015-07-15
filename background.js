/* function saveChanges() {
        
        var table = document.getElementById('periodsTable');
        var tableRows = table.rows.length;
        //window.alert("tableRows: " + tableRows);
        
        var checkBoxesArray = [];
        var descriptionsArray = [];
        var startTimesArray = [];
        var endTimesArray = [];
        
        localStorage.clear();
        
        localStorage["numberPeriods"] = tableRows - 1;
        
        for (var i = 1; i < tableRows; i++) {
          //Populate arrays with input values
         /*  checkBoxesArray.push(document.getElementById('period' + i + '_enabled').checked);
          descriptionsArray.push(document.getElementById('period' + i + '_desc').value);
          startTimesArray.push(document.getElementById('period' + i + '_start').value);
          endTimesArray.push(document.getElementById('period' + i + '_end').value); */
       /*    localStorage["period" + i + "_enabled"] = document.getElementById('period' + i + '_enabled').checked;
          localStorage["period" + i + "_desc"] = document.getElementById('period' + i + '_desc').value;
          localStorage["period" + i + "_start"] = document.getElementById('period' + i + '_start').value;
          localStorage["period" + i + "_end"] = document.getElementById('period' + i + '_end').value;
          
       
        }

}; */ 

function onInit() {
  
 // window.alert("loaded");
  console.log(chrome.storage);
}

/* function addTableRows() {
  
  var table = document.getElementById('periodsTable');
  var tableRows = table.rows.length;
  //window.alert(tableRows);
  var row = table.insertRow(-1);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  
  cell1.innerHTML = "<input type='checkbox' id='period" + tableRows + "_enabled' value='enabled'>";
  cell2.innerHTML = "<input type='text' id='period" + tableRows + "_desc' style='width: 100%'>";
  cell3.innerHTML = "<input type='time' id='period" + tableRows + "_start'>";
  cell4.innerHTML = "<input type='time' id='period" + tableRows + "_end'>";

} */

document.addEventListener('DOMContentLoaded', onInit, false);

//document.getElementById('addMoreButton').addEventListener('click', addTableRows);

//document.getElementById('saveButton').addEventListener('click', saveChanges);