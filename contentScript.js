import { data, newWord } from './wordData.js';

function replaceTextOnPage(oldStrings, to) {
    const elements = document.querySelectorAll('*');
  
    elements.forEach((element) => {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        // Replace text in text nodes
        let textContent = element.textContent;
        oldStrings.forEach((oldString) => {
          const regex = new RegExp(oldString, 'gi');
          textContent = textContent.replace(regex, to);
        });
        element.textContent = textContent;
      } else {
        // Replace text in attribute values
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const attr = attributes[i];
          oldStrings.forEach((oldString) => {
            const regex = new RegExp(oldString, 'gi');
            if (attr.value.match(regex)) {
              attr.value = attr.value.replace(regex, to);
            }
          });
        }
      }
    });
  }

  let newWord = 'Spellbreak';

// Listen to changes in the extension storage
chrome.storage.local.get(['titleChanger'], function(result) {
    if (result['titleChanger']) {
        replaceTextOnPage(data, newWord); // replace 'old text' and 'new text' with your actual texts
    }
});
