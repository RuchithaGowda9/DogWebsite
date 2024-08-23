//Sample JSON data
const customerData = [
    {
        "name": "John",
        "email": "john@gmail.com",
        "phone": "1234567890",
        "address": "123 Main St",
        "city": "New York"
    },
    {
        "name": "tina",
        "email": "tina@gmail.com",
        "phone": "9345678901",
        "address": "123 Main St",
        "city": "New York"
    },
    {
        "name": "Jeenu",
        "email": "jeenu@gmail.com",
        "phone": "7345678910",
        "address": "123 Main St",
        "city": "New York"
    }
];
 
// Function to generate the table
function generateTable(data) {
    // Get the reference for the table body
    const tableBody = document.getElementById('table-body');
 
    // Clear any existing rows
    tableBody.innerHTML = '';
 
    // Loop through the data and generate table rows
    customerData.forEach((item) => {
        const row = document.createElement('tr');
 
        // Loop through each property in the item
        for (let key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
 
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
 
// Call the function with the JSON data
//generateTable(customerData);