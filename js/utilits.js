function inputValueGetElementById(id) {
  return Number(document.getElementById(id).value);
}

function getTextFiledValueById(id) {
  return Number(document.getElementById(id).innerText);
}

function showSectionById(id) {
  document.getElementById('donation-form').classList.add('hidden');
  document.getElementById('history-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}
