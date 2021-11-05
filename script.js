const trybewartsForm = document.querySelector('[data-js="trybewarts-form"]');
const evaluationForm = document.querySelector('[data-js="evaluation-form"]');
const agreementCheck = document.querySelector('[data-js="agreement-input"]');
const submitButton = document.querySelector('[data-js="submit-btn"]');
const commentsTextArea = document.querySelector('[data-js="comments-textarea"]');
const charactersCount = document.querySelector('[data-js="counter"]');
const radioFamilyItems = document.querySelectorAll('[data-js="radio-family"]');
const contentToLearn = document.querySelectorAll('[data-js="learn-input"]');

const defaultEmail = 'tryber@teste.com';
const defaultPassword = '123456';
const maxCommentsCharactersAllowed = '500';

trybewartsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputedEmail = event.target.email.value;
  const inputedPassword = event.target.senha.value;
  const isAValidEmail = defaultEmail === inputedEmail;
  const isAvalidPassword = defaultPassword === inputedPassword;
  const isAValidLogin = isAValidEmail && isAvalidPassword;

  if (isAValidLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreementCheck.addEventListener('click', (event) => {
  const targetElement = event.target.checked;
  if (targetElement) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
    submitButton.classList.add('disabled');
  }
});

commentsTextArea.addEventListener('input', (event) => {
  const commentsLength = event.target.value.length;
  charactersCount.textContent = maxCommentsCharactersAllowed - commentsLength;
});

submitButton.addEventListener('click', () => {
  const userFirstName = evaluationForm.inputName.value;
  const userLastName = evaluationForm.inputLastname.value;
  const userEmail = evaluationForm.email.value;

  const userHouseOptions = evaluationForm.house.options;
  const userHouseSelectedIndex = userHouseOptions.selectedIndex;
  const selectedHouse = userHouseOptions[userHouseSelectedIndex].value;

  let familyOption = '';

  for (let index = 0; index < radioFamilyItems.length; index += 1) {
    const isCurrentItemChecked = radioFamilyItems[index].checked;
    if (isCurrentItemChecked) {
      familyOption = radioFamilyItems[index].value;
    }
  }

  console.log(familyOption);

  console.log([...contentToLearn].filter((element) => element.checked).map(({ value }) => value));
});

console.log(contentToLearn);
