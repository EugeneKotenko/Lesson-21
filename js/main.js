const buttons = document.querySelectorAll('.button');

function addShadow(button) {
  button.classList.add('shadow');
}

function removeShadow(button) {
  button.classList.remove('shadow');
}

function areOddButtonsPressed() {
  return Array.from(buttons).every((button, index) => index % 2 === 0 ? button.classList.contains('shadow') : true);
}

function areEvenButtonsPressed() {
  return Array.from(buttons).every((button, index) => index % 2 !== 0 ? button.classList.contains('shadow') : true);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('shadow')) {
      addShadow(button);
    } else {
      removeShadow(button);
    }

    if (areOddButtonsPressed()) {
      console.log('Натиснуті всі непарні кнопки!');
    }

    if (areEvenButtonsPressed()) {
      console.log('Натиснуті всі парні кнопки!');
    }

    if (Array.from(buttons).every(button => button.classList.contains('shadow'))) {
      console.log('Всі кнопки натиснуті!');
    }
  });
});
