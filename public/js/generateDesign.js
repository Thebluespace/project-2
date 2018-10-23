console.log('javascript file linked successfully');

// data

const name = document.getElementById('inputName');
const phone = document.getElementById('inputPhone');
const email = document.getElementById('inputEmail');
const url = document.getElementById('inputURL');

// add info buttons

const addNameButton = document.getElementById('addName');
const addPhoneButton = document.getElementById('addPhone');
const addEmailButton = document.getElementById('addEmail');
const addURLButton = document.getElementById('addURL');

// empty divs for populating data / styles

const cardBackground = document.getElementById('card');

const nameField = document.getElementById('nameField');
const phoneField = document.getElementById('phoneField');
const emailField = document.getElementById('emailField');
const urlField = document.getElementById('urlField');

// function that adds what is in the input field to the card area

addToCard = (input, output) => {
    console.log('you clicked the ' + input.value + ' button');
    event.preventDefault();
    output.innerHTML =
        `
        <h1> ${input.value} </h1>
    `;
};

// event handlers for buttons

addNameButton.addEventListener('click', () => {
    addToCard(inputName, nameField);

});

addPhoneButton.addEventListener('click', () => {
    addToCard(inputPhone, phoneField);
});

addEmailButton.addEventListener('click', () => {
    addToCard(inputEmail, emailField);
});

addURLButton.addEventListener('click', () => {
    addToCard(inputURL, urlField);
});

// style changes

// change bg-color

changeColor = () => {
    let color = document.getElementById('selectColor').value;
    const colorChoices = ['card-gb-default', 'card-bg-white', 'card-bg-black, card-bg-red'];
    for (let i = 0; i < colorChoices.length; i++) {
        if (color === 'default') {
            card.className = 'card-bg-default';
        } else if (color === 'white') {
            card.className = 'card-bg-white';
        } else if (color === 'black') {
            card.className = 'card-bg-black';
        } else if (color === 'red') {
            card.className = 'card-bg-red';
        }
    }

}


//Saving
const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', () => {

    let cardObject = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        bgcolor: card.className,
        quote:quoteField.value,
        url: url.value
    }
    console.log("current card" + cardObject);
    $.post("/api/addDesign", cardObject);


});
