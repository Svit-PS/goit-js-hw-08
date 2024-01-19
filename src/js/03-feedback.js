import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input');
const messageEl = formEl.querySelector('textarea');

const KEY_FORM = 'feedback-form-state';
const current_Storege = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {
  email: '',
  message: '',
};

emailEl.value = current_Storege.email;
messageEl.value = current_Storege.message;

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(updateStorege, 500));

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
