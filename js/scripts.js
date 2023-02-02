// get form 
const form = document.querySelector('#process-link-form');

// get form input text
const inputText = document.querySelector('#process-link-form input[type="text"]');

// get form error message
const emptyInputErrorMessage = document.querySelector('#process-link-form span.error-msg');

// get invalid url message span
const invalidUrlErrorMessage = document.querySelector('#process-link-form span.invalid-url-msg');

// get original url p tag
const originalUrl = document.querySelector('.original-link p').innerHTML;

// get processed url p tag
// const shortUrl = document.querySelector('.short-link p').innerHTML;

// let shortUrl
const shortUrl = document.querySelector('.short-link p').innerHTML;


// copy url button
const button = document.querySelector('.copy-link-btn button');

const copiedBtn = document.querySelector('.copy-link-btn button.copied');

// copy url to clipboard function
const copyUrlToClipboard = async () => {
    try {
    //   await navigator.clipboard.writeText('trying to copy');
    await navigator.clipboard.writeText('shortUrl');
    // setTimeout(() => {
    //     changeCopyButtonText();
    // }, 1000);
    console.log('Content copied to clipboard');
    } catch (err) {
    console.error('Failed to copy: ', err);
    }
};

//   run copy url to clipboard function on button click
button.addEventListener('click', copyUrlToClipboard)

const changeCopyButtonText = () => {
    button.style.display = 'none';
    copiedBtn.style.display = 'block';
}

// console.log(shortUrl.innerHTML)

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

    // sendLinkToServer(link)
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

// send link to server
const sendLinkToServer = (url) => {

    let http = new XMLHttpRequest();

    http.open('GET', './include/apiRequest.inc.php?url='+url, true);

    http.onload = function() {
        if(this.status == 200 && this.readyState == 4) {
            // console.log(http.responseText);
            // console.log('diff')
            let results = JSON.parse(http.responseText);
            // let results = http.responseText;
            console.log(results.result.short_link);
            // console.log(JSON.parse(results));
        }
    }

    // http.send();


}