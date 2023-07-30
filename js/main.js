const buttons = document.querySelectorAll('.button');

function addShadow(button) {
    return new Promise((resolve) => {
        button.classList.add('shadow');
        resolve();
    });
}

function removeShadow(button) {
    return new Promise((resolve) => {
        button.classList.remove('shadow');
        resolve();
    });
}

function areButtonsPressed(predicate) {
    return Promise.all(Array.from(buttons).map((button, index) => {
        if (index % 2 === predicate) {
            return button.classList.contains('shadow');
        }
        return true;
    }));
}

buttons.forEach(button => {
    button.addEventListener('click', async () => {
        if (!button.classList.contains('shadow')) {
            await addShadow(button);
        } else {
            await removeShadow(button);
        }

        const areOddButtons = await areButtonsPressed(0);
        const areEvenButtons = await areButtonsPressed(1);
        const areAllButtonsPressed = await Promise.all(Array.from(buttons).map(button => button.classList.contains('shadow')));

        if (areOddButtons.every(Boolean)) {
            console.log('Натиснуті всі непарні кнопки!');
        }

        if (areEvenButtons.every(Boolean)) {
            console.log('Натиснуті всі парні кнопки!');
        }

        if (areAllButtonsPressed.every(Boolean)) {
            console.log('Всі кнопки натиснуті!');
        }
    });
});


