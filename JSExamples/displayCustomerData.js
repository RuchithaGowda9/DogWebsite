var tableData = [];

function createCustomerTable() {
    var table = document.getElementById("customerTable");
    var columnsInput = parseInt(document.getElementById("columns").value);
    var rowsInput = parseInt(document.getElementById("rows").value);

    // Clear table if exists
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    var headerRow = document.createElement("tr");
    for (var i = 0; i < columnsInput; i++) {
        var th = document.createElement("th");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "header-input");
        input.setAttribute("placeholder", "Column " + (i + 1));
        th.appendChild(input);
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    tableData = []; // Initialize tableData

    for (var i = 0; i < rowsInput; i++) {
        var rowData = [];
        var row = document.createElement('tr');
        for (var j = 0; j < columnsInput; j++) {
            var cell = document.createElement('td');
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("class", "editable-cell");
            cell.addEventListener("input", updateCell); // Callback to update cell function
            rowData.push(""); // Initialize cell data
            row.appendChild(cell); // Append cell to row
        }
        tableData.push(rowData); // Add row data to tableData
        table.appendChild(row); // Append row to table
    }
}

function updateCell(event) {
    var rowIndex = event.target.parentElement.rowIndex - 1;
    var columnIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
    var cellValue = event.target.textContent.trim();
    updateData(rowIndex, columnIndex, cellValue);
}

function updateData(row, col, value) {
    tableData[row][col] = value;
}
