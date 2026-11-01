const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const pricess=document.querySelectorAll('.prices');
	let sum=0;
	pricess.forEach(priceElement =>{
		sum+=Number(priceElement.textContent);
	});
	if(document.querySelector('[data-ns-test="grandTotal"]')){
		return;
	}
	const table=document.createElement('table');
  const newRow=document.createElement('tr');
	const newCell=document.createElement('td');
	newCell.setAttribute('data-ns-test','grandTotal');
	newCell.textContent=sum;
	newRow.appendChild(newCell);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

