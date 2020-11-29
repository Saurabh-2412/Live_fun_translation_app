const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text')
const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

function getTranslationURL(inputText) {
    return serverURL + "text=" + inputText.value;
}
 

document.querySelector('#btn-translate').addEventListener('click', () => {
    /* const response = fetch(`https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${inputText.value}`) */
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated + " " + json.contents.text + " " + json.contents.translation)
    .catch(error => console.log("Error occured : " + error))
    
})