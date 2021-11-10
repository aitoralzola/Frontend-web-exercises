function addColumn()
{     
    var table = document.getElementById("myTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertCell(0);
    
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    
    // Add some text to the new cells:
    cell1.innerHTML = "0.3";
    cell2.innerHTML = "1.3";     
}