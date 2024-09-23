function inputValueGetElementById(id) {
  return Number(document.getElementById(id).value);
}

function getTextFiledValueById(id) {
  return Number(document.getElementById(id).innerText);
}

function showSectionById(id) {
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}
