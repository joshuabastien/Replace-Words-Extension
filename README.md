# Replace Words Chrome Extension - WIP

This is a simple Chrome extension that replaces specific strings on web pages. It includes a popup UI and a content script.

## What it Does / How to Use

1. Go to a website and hit 'On'
2. Now all instances of words located in 'data' array in contentScript.js of the website will be changed to the newWord.
3. For the extension to work across websites, it must be reloaded.

## Installation

1. Clone the repository or download the source code.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable the "Developer mode" toggle in the top right corner.
4. Click on the "Load unpacked" button.
5. Select the directory containing the extension files.

## How I Built It

This Chrome extension was built using the following technologies and techniques:

- **Chrome Extension API**: The extension utilizes the Chrome Extension API to interact with browser features and inject the content script into web pages.
- **JavaScript**: The extension's logic is implemented using JavaScript, including event handling, storage operations, and DOM manipulation.
- **HTML/CSS**: The popup UI is built using HTML for the structure and CSS for styling.
- **Content Script**: The `contentScript.js` file contains the script that modifies the web page's content, replacing specific strings.
- **Chrome Storage**: The `chrome.storage.local` API is used to store and retrieve the extension's state, specifically the status of the title changer.
- **Manifest File**: The `manifest.json` file defines the extension's configuration, permissions, and dependencies.

## Files

### `popup.js`

This file contains the code for the popup UI and handles user interactions.

### `contentScript.js`

This file contains the content script that modifies the web page's content.

## License

This project is licensed under the [MIT License](LICENSE).
