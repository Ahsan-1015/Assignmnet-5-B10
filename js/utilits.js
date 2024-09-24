function inputValueGetElementById(id) {
  return Number(document.getElementById(id).value).toFixed(2);
}

function getTextFiledValueById(id) {
  return Number(document.getElementById(id).innerText).toFixed(2);
}

function showSectionById(id) {
  document.getElementById('donation-form').classList.add('hidden');
  document.getElementById('history-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}
