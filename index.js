const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const btnTranslate = document.querySelector('#btn-translate');
const serverURL = "https://api.funtranslations.com/translate/pirate.json?"

function getTranslationURL(inputText) {
    return serverURL + "text=" + inputText.value;
}

function ErrorHandler(error) {
    console.log("Error occured " + error)
}

function clickEventHandler() {
    /* const response = fetch(`https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${inputText.value}`) */
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated)
    /* .then(json => outputText.innerHTML = json.contents.translated + " " + json.contents.text + " " + json.contents.translation) */
    .catch(ErrorHandler)
    /* .catch(error => console.log("Error occured : " + error)) */
}

btnTranslate.addEventListener('click',clickEventHandler);