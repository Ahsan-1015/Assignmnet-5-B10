// noakhali history start
const noakhaliBtn = document
  .getElementById('noakhali-donate-btn')
  .addEventListener('click', function () {
    const noakhaliInput = inputValueGetElementById('noakhali-input');

    const noakhaliHistoryForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-8',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
  <p class ="text-base md:text-xl font-bold "> ${noakhaliInput} Taka is Donated for famine-2024 at noakhali, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-200 p-2 rounded-md"> ${new Date()}</p>

`;
    noakhaliHistoryForm.appendChild(p);

    const zero = document.getElementById('noakhali-input');
    zero.value = '';
  });
// noakhali history end

// feni history start
const feniBtn = document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    const feniInput = inputValueGetElementById('feni-input');

    const historyForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-8',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
  <p class ="text-base md:text-xl font-bold "> ${feniInput} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-200 p-2 rounded-md"> ${new Date()}</p>

`;
    historyForm.appendChild(p);

    const zero = document.getElementById('feni-input');
    zero.value = '';
  });
// feni history end

// quota history start
const quotaBtn = document
  .getElementById('quota-donate-btn')
  .addEventListener('click', function () {
    const quotaInput = inputValueGetElementById('quota-input');

    const historyForm = document.getElementById('history-form');
    const p = document.createElement('p');
    p.classList.add(
      'space-y-1',
      'w-11/12',
      'md:w-8/12',
      'mx-auto',
      'p-2',
      'md:p-8',
      'border-2',
      'rounded-xl',
      'space-y-2'
    );
    p.innerHTML = `
  <p class ="text-base md:text-xl font-bold "> ${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
  <p class ="text-xs md:text-base bg-base-200 p-2 rounded-md"> ${new Date()}</p>

`;
    historyForm.appendChild(p);
  });
// quota history end
