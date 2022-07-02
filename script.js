	const calcForm = document.getElementById('calculatorForm');
	const calcBtn = document.getElementById('buttonCalc');
	let inputTag = document.querySelectorAll('input');
	let inputNumTag = document.querySelectorAll('input[type=number]');
	
	let flag = false;
	
	inputNumTag.forEach( el => {
		if(el.value === '') {
			el.value = 0
		};
	})
				
	function SaveForm(t) {
		setDataForm(t.querySelectorAll('input'));
	}
		
	function setDataForm(tag) {
				flag = true;
				tag.forEach(tagElement => {
				localStorage.setItem(tagElement.id, tagElement.value)
			});
	}
		
		
	function getDataForm() {
		for (let i = 0; i < inputTag.length; i++) {
			if(localStorage.hasOwnProperty(inputTag[i].id)) {
				inputTag[i].value = localStorage.getItem(inputTag[i].id);	
			}
		}
 	}
		
 getDataForm();

calcBtn.onclick = () => {
	let checkedRadio = document.querySelector('input[name="radio"]:checked');
	let startData = [];
	console.log(tourists.value)
	
	if(!localStorage.getItem('startData') || flag){
		startData = [cost1.value, cost2.value, cost3.value, cost4.value, cost8.value, tourists.value]
		localStorage.setItem('startData', JSON.stringify(startData))
	}else{
		startData = JSON.parse(localStorage.getItem('startData'));
	}

	startData = startData.map( line => {
		return line*Number(checkedRadio.value);
	})

	console.log(startData)

  wageResult.innerHTML = (startData[3] * cost5.value).toFixed();
	
  turnoverResult.innerHTML = (startData[5] * average1.value).toFixed();
	
  commissionResult.innerHTML = (turnoverResult.innerHTML * (average2.value / 100)).toFixed();
	
 // incomeResult.innerHTML = commissionResult.innerHTML - saleResult.innerHTML;
	
  taxResult.innerHTML = (commissionResult.innerHTML * (cost9.value / 100)).toFixed();
	
  salaryResult.innerHTML = ((commissionResult.innerHTML - taxResult.innerHTML) * (cost10.value / 100)).toFixed();
	
  expensesResult.innerHTML = (startData[0] + startData[1]  + startData[2] 
	+  Number(wageResult.innerHTML) + Number(cost6.value) + Number(cost7.value)  + startData[4] + Number(taxResult.innerHTML) + Number(salaryResult.innerHTML)).toFixed();
	
 netIncomeResult.innerHTML = (commissionResult.innerHTML - expensesResult.innerHTML).toFixed();
}