// noakhali pert start
const noakhaliDonateBtn = document
  .getElementById('noakhali-donate-btn')
  .addEventListener('click', function () {
    const noakhaliInput = inputValueGetElementById('noakhali-input');
    const mainBalance = getTextFiledValueById('main-balance');
    if (
      isNaN(noakhaliInput) ||
      noakhaliInput <= 0 ||
      noakhaliInput > mainBalance
    ) {
      alert('Please Enter Your Correct Number');
      return;
    }
    // congrats modal start
    const congratsModal = document.getElementById('congrats-modal');
    congratsModal.classList.remove('hidden');
    congratsModal.classList.add('flex');

    const closeConfirmBtn = document.getElementById('close-confirm-btn');
    closeConfirmBtn.addEventListener('click', function () {
      congratsModal.classList.add('hidden');
    });
    // congrats modal end

    // main balance set

    const noakhaliCurrentDonate = getTextFiledValueById('noakhali-donated');

    document.getElementById('noakhali-donated').innerText =
      noakhaliInput + noakhaliCurrentDonate;

    const updateBalance = mainBalance - noakhaliInput;
    document.getElementById('main-balance').innerText = updateBalance;

    const zero = document.getElementById('noakhali-input');
    zero.value = '';
  });
// noakhali pert end

// feni pert start
const feniInputBtn = document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    const feniInput = inputValueGetElementById('feni-input');
    const mainBalance = getTextFiledValueById('main-balance');

    if (isNaN(feniInput) || feniInput <= 0 || feniInput > mainBalance) {
      alert('Please Enter Your Correct Number');
      return;
    }

    // congrats modal start
    const congratsModal = document.getElementById('congrats-modal');
    congratsModal.classList.remove('hidden');
    congratsModal.classList.add('flex');

    const closeConfirmBtn = document.getElementById('close-confirm-btn');
    closeConfirmBtn.addEventListener('click', function () {
      congratsModal.classList.add('hidden');
    });
    // congrats modal end

    const feniCurrentDonate = getTextFiledValueById('feni-donated');

    document.getElementById('feni-donated').innerText =
      feniInput + feniCurrentDonate;

    const updateBalance = mainBalance - feniInput;
    document.getElementById('main-balance').innerText = updateBalance;

    const zero = document.getElementById('feni-input');
    zero.value = '';
  });

// feni part end

//  quota part start
const quotaInputBtn = document
  .getElementById('quota-donate-btn')
  .addEventListener('click', function () {
    const mainBalance = getTextFiledValueById('main-balance');
    const quotaInput = inputValueGetElementById('quota-input');
    if (isNaN(quotaInput) || quotaInput <= 0 || quotaInput > mainBalance) {
      alert('Please Enter Your Correct Number');
      return;
    }

    // congrats modal start
    const congratsModal = document.getElementById('congrats-modal');
    congratsModal.classList.remove('hidden');
    congratsModal.classList.add('flex');

    const closeConfirmBtn = document.getElementById('close-confirm-btn');
    closeConfirmBtn.addEventListener('click', function () {
      congratsModal.classList.add('hidden');
    });
    // congrats modal end

    const quotaCurrentDonate = getTextFiledValueById('quota-donated');

    document.getElementById('quota-donated').innerText =
      quotaInput + quotaCurrentDonate;

    const updateBalance = mainBalance - quotaInput;
    document.getElementById('main-balance').innerText = updateBalance;

    const zero = document.getElementById('quota-input');
    zero.value = '';
  });
