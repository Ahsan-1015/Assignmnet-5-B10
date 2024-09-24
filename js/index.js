// -----------[noakhali pert start]--------
let count = 0;
document
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

      const zero = document.getElementById('noakhali-input');
      zero.value = '';
      return;
    }
    count += 1;
    // congrats modal start
    const congratsModal = document.getElementById('congrats-modal');
    congratsModal.classList.remove('hidden');
    congratsModal.classList.add('flex');

    const closeConfirmBtn = document.getElementById('close-confirm-btn');
    closeConfirmBtn.addEventListener('click', function () {
      congratsModal.classList.add('hidden');
    });

    const noakhaliCurrentDonate = getTextFiledValueById('noakhali-donated');

    document.getElementById('noakhali-donated').innerText = (
      noakhaliInput + noakhaliCurrentDonate
    ).toFixed(2);

    const updateBalance = mainBalance - noakhaliInput;
    document.getElementById('main-balance').innerText =
      updateBalance.toFixed(2);

    const historyForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'border-green-100',
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-4',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
    <div class="border-l-2 border-green-500  rounded-lg pl-2">
    <P class ="font-semibold text-gray-500 bg-green-100 border-2 w-14 text-center rounded">NO: ${count}</P>
  <p class ="text-base md:text-xl font-bold "> ${noakhaliInput.toFixed(
    2
  )} Taka is Donated for famine-2024 at noakhali, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-200 p-2 rounded-md bg-gradient-to-r from-gray-50 to-green-50"> ${new Date()}</p>
    </div>

`;
    historyForm.insertBefore(p, historyForm.firstChild);

    // reset input
    const zero = document.getElementById('noakhali-input');
    zero.value = '';
  });
// noakhali pert end

// ----------[feni part start]--------------
document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    const feniInput = inputValueGetElementById('feni-input');
    const mainBalance = getTextFiledValueById('main-balance');

    if (isNaN(feniInput) || feniInput <= 0 || feniInput > mainBalance) {
      alert('Please Enter Your Correct Number');

      const zero = document.getElementById('feni-input');
      zero.value = '';
      return;
    }
    count += 1;
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

    document.getElementById('feni-donated').innerText = (
      feniInput + feniCurrentDonate
    ).toFixed(2);

    const updateBalance = mainBalance - feniInput;
    document.getElementById('main-balance').innerText =
      updateBalance.toFixed(2);

    const historyForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'border-yellow-100',
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-4',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
    <div class= "  border-l-2 border-yellow-500  rounded-lg pl-2 ">
    <P class ="font-semibold text-gray-500 text-sm bg-yellow-100 border-2 w-14 text-center rounded">NO:${count}</P>
  <p class ="text-base md:text-xl font-bold "> ${feniInput.toFixed(
    2
  )} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-100 p-2 rounded-md bg-gradient-to-r from-gray-100 to-yellow-50"> ${new Date()}</p>
    </div>

`;
    historyForm.insertBefore(p, historyForm.firstChild);

    const zero = document.getElementById('feni-input');
    zero.value = '';
  });

// feni part end

//-------------[quota part start]------------
const quotaInputBtn = document
  .getElementById('quota-donate-btn')
  .addEventListener('click', function () {
    const mainBalance = getTextFiledValueById('main-balance');
    const quotaInput = inputValueGetElementById('quota-input');
    if (isNaN(quotaInput) || quotaInput <= 0 || quotaInput > mainBalance) {
      alert('Please Enter Your Correct Number');

      const zero = document.getElementById('quota-input');
      zero.value = '';
      return;
    }

    count += 1;
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

    document.getElementById('quota-donated').innerText = (
      quotaInput + quotaCurrentDonate
    ).toFixed(2);

    const updateBalance = mainBalance - quotaInput;
    document.getElementById('main-balance').innerText =
      updateBalance.toFixed(2);

    const historyForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'border-blue-100',
      'space-y-1',
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-4',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
    <div class="border-l-2 border-blue-500  rounded-lg pl-2">
    <P class ="font-semibold text-gray-500 bg-blue-100 border-2 w-14 text-center rounded">NO: ${count}</P>
  <p class ="text-base md:text-xl font-bold "> ${quotaInput.toFixed(
    2
  )} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-200 p-2 rounded-md bg-base-100  bg-gradient-to-r from-gray-100 to-blue-50"> ${new Date()}</p>
    </div>

`;
    historyForm.insertBefore(p, historyForm.firstChild);

    // reset input
    const zero = document.getElementById('quota-input');
    zero.value = '';
  });
// quota part end

// ----------[blog section start]-----------
const blogBtn = document
  .getElementById('blog-btn')
  .addEventListener('click', function () {
    window.location.href = '/blog.html';
  });

// ----------[history donation btn functionally]-------
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {
  historyBtn.classList.add('bg-blog_btn', 'hover:bg-blog_btn_hover');
  historyBtn.classList.remove('text-gray-500', 'border-2');

  donationBtn.classList.remove('bg-blog_btn', 'hover:bg-blog_btn_hover');
  donationBtn.classList.add('border-2', 'text-gray-500');
});

const donationBtn = document.getElementById('donation-btn');
donationBtn.addEventListener('click', function () {
  historyBtn.classList.remove('bg-blog_btn', 'hover:bg-blog_btn_hover');
  historyBtn.classList.add('text-gray-500', 'border-2');

  donationBtn.classList.add('bg-blog_btn', 'hover:bg-blog_btn_hover');
  donationBtn.classList.remove('border-2', 'text-gray-500');
});
