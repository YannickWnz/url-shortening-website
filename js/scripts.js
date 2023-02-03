// get form 
const form = document.querySelector('#process-link-form');

// get form input text
const inputText = document.querySelector('#process-link-form input[type="text"]');

// get form error message
const emptyInputErrorMessage = document.querySelector('#process-link-form span.error-msg');

// get invalid url message span
const invalidUrlErrorMessage = document.querySelector('#process-link-form span.invalid-url-msg');

// processed link container
const processedLinkContainer = document.querySelector('.processed-link');

// get original url p tag
let originalUrl = document.querySelector('.original-link p');

// let shortUrl
let shortUrl = document.querySelector('.short-link p');

// copy url button
const button = document.querySelector('.copy-link-btn button');

const copiedBtn = document.querySelector('.copy-link-btn button.copied');

// copy url to clipboard function
const copyUrlToClipboard = async () => {
    try {
    await navigator.clipboard.writeText(shortUrl.innerHTML);
    
    // display "copied" button when copy is successful
    displayCopyButtonText();

    // remove "copied" button function after 1s
    setTimeout(() => {
        removeCopyButtonText();
    }, 1000);
    
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

//   run copy url to clipboard function on button click
button.addEventListener('click', copyUrlToClipboard)


// function displaying "copied" button after user clicks on copy button 
const displayCopyButtonText = () => {
    button.style.display = 'none';
    copiedBtn.style.display = 'block';
}

// remove "copied" button function
const removeCopyButtonText = () => {
    button.style.display = 'block';
    copiedBtn.style.display = 'none';
}

// function handling form
const handleForm = e => {
    e.preventDefault();

    let link = inputText.value;

    // run handleError function when input empty
    if(link.length == 0) {
        handleError();
        return false;
    }

    // run invalid url format error function when url not valid
    if(!isUrlValid(link)) {
        console.log('invalid url');
        handleInvalidUrlFormat();
        return false;
    }

    // pass link to function that handle sending data to the server
    sendLinkToServer(link)

    // removing error message when form is submitted with no error
    removeInvalidFormatErrorMessage();

    // form.reset();
}

// run handleform function on form submit
form.addEventListener('submit', handleForm)

// function handling 
const handleError = () => {
    emptyInputErrorMessage.style.display = 'block';
    inputText.style.border = '4px solid var(--red)';
    form.classList.add('error');
}

// remove error function
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

// run remove error function on keyup event
inputText.addEventListener('keyup', removeError)

// validating user url 
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

// send url to server
const sendLinkToServer = (url) => {

    let http = new XMLHttpRequest();

    http.open('GET', './include/apiRequest.inc.php?url='+url, true);

    http.onload = function() {
        if(this.status == 200 && this.readyState == 4) {
            if(http.responseText == 'err') {
                alert('An error occurred')
                return;
            }
            let results = JSON.parse(http.responseText);
            let shortLinkResult = results.result.full_short_link;
            let originalLinkResult = results.result.original_link;
            displayApiResponseInBrowser(originalLinkResult, shortLinkResult)
        }
    }
    http.send();
}

// display fetched results
const displayApiResponseInBrowser = (original_Url, short_Url) => {

    processedLinkContainer.style.display = 'flex';

    originalUrl.innerHTML = original_Url;
    shortUrl.innerHTML = short_Url;
}

