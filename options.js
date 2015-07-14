function saveChanges() {
        
        var table = document.getElementById('periodsTable');
        var rows = table.rows;
        
        var firstEnabled = document.getElementById('period1_enabled');
        //window.alert(firstEnabled.checked);
        
        // Get a value saved in a form.
        var theValue = firstEnabled.value;
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
};

function addTableRows() {
  
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

}



document.getElementById('addMoreButton').addEventListener('click', addTableRows);

document.getElementById('saveButton').addEventListener('click', saveChanges);