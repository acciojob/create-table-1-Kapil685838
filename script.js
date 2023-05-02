function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');

	const newRow = table.insertRow(0);

	const leftCell = newRow.insertCell(0);
	const rightCell = newRow.insertCell(1);

	leftCell.innerHTML = "New Cell1";
	rightCell.innerHTML = 'New Cell2';
}
