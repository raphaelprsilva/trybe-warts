const trybewartsForm = document.querySelector('[data-js="trybewarts-form"]');
const evaluationForm = document.querySelector('[data-js="evaluation-form"]');
const agreementCheck = document.querySelector('[data-js="agreement-input"]');
const submitButton = document.querySelector('[data-js="submit-btn"]');
const commentsTextArea = document.querySelector('[data-js="comments-textarea"]');
const charactersCount = document.querySelector('[data-js="counter"]');
const radioFamilyItems = document.querySelectorAll('[data-js="radio-family"]');
const contentToLearn = document.querySelectorAll('[data-js="learn-input"]');
const ratingItems = document.querySelectorAll('[data-js="evaluation-input"]');
const mainContent = document.querySelector('[data-js="main-content"]');
const report = document.querySelector('[data-js="report"]');

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

const generateReport = (userInfos) => {
  const [userFirstName, userLastName, userEmail, selectedHouse,
    familyOption, learnedTechs, rating, comments] = userInfos;

  report.innerHTML = `
  <h2>Relatório</h2>
  <p>Nome: ${userFirstName} ${userLastName}</p>
  <p>Email: ${userEmail}</p>
  <p>Casa: ${selectedHouse}</p>
  <p>Família: ${familyOption}</p>
  <p>Matérias: ${learnedTechs}</p>
  <p>Avaliação: ${rating}</p>
  <p>Obervações: ${comments}</p>
`;
};

submitButton.addEventListener('click', () => {
  const userFirstName = evaluationForm.inputName.value;
  const userLastName = evaluationForm.inputLastname.value;
  const userEmail = evaluationForm.email.value;
  const userHouseOptions = evaluationForm.house.options;
  const userHouseSelectedIndex = userHouseOptions.selectedIndex;
  const selectedHouse = userHouseOptions[userHouseSelectedIndex].value;
  const familyOption = [...radioFamilyItems].filter((element) => element.checked)[0].value;
  const learnedTechs = [...contentToLearn].filter((element) => element.checked)
    .map(({ value }) => value);
  const rating = [...ratingItems].filter((element) => element.checked)[0].value;
  const comments = commentsTextArea.value;
  const userInfos = [userFirstName, userLastName, userEmail, selectedHouse,
    familyOption, learnedTechs, rating, comments];

  mainContent.style.display = 'none';
  generateReport(userInfos);
});
