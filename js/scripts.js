// get form 
const form = document.querySelector('#process-link-form');

// get form input text
const inputText = document.querySelector('#process-link-form input[type="text"]');

// get form error message
const emptyInputErrorMessage = document.querySelector('#process-link-form span.error-msg');

// get invalid url message span
const invalidUrlErrorMessage = document.querySelector('#process-link-form span.invalid-url-msg');


// function handling form
const handleForm = e => {
    let link = inputText.value;

    e.preventDefault();

    if(link.length == 0) {
        handleError();
        return false;
    }

    if(!isUrlValid(link)) {
        console.log('invalid url');
        handleInvalidUrlFormat();
        return false;
    }

    removeInvalidFormatErrorMessage();
    form.reset();
}

form.addEventListener('submit', handleForm)

// function handling 
const handleError = () => {
    emptyInputErrorMessage.style.display = 'block';
    inputText.style.border = '4px solid var(--red)';
    form.classList.add('error');
}

const removeError = () => {
    emptyInputErrorMessage.style.display = 'none';
    form.classList.remove('error');
    inputText.style.border = 'none';
}

// handle invalid url format error 
const handleInvalidUrlFormat = () => {
    inputText.style.border = '4px solid var(--red)';
    invalidUrlErrorMessage.style.display = 'block';
}

// function removing invalid format error message
const removeInvalidFormatErrorMessage = () => {
    invalidUrlErrorMessage.style.display = 'none';
}

inputText.addEventListener('keyup', removeError)

// validing user url 
function isUrlValid(url) {
    try {
        new URL (url)
        console.log('working')
        return true;
    } catch (e) {
        console.log('error:', e)
        return false;
    }
}

// isValid('https://www.figma.com/')