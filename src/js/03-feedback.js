import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onSubmitForm);

const emailEl = document.querySelector('input');
emailEl.addEventListener('input', throttle(updateStorege, 500));

const messageEl = formEl.querySelector('textarea');
messageEl.addEventListener('input', throttle(updateStorege, 500));

const KEY_FORM = 'feedback-form-state';
const current_Storege = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {
  email: '',
  message: '',
};

emailEl.value = current_Storege.email;
messageEl.value = current_Storege.message;

function updateStorege() {
  current_Storege.email = emailEl.value;
  current_Storege.message = messageEl.value;
  localStorage.setItem(KEY_FORM, JSON.stringify(current_Storege));
}

function onSubmitForm(event) {
  event.preventDefault();
  updateStorege();
  console.log(`${KEY_FORM}: `, current_Storege);
  localStorage.removeItem(KEY_FORM);
  formEl.reset();
}
