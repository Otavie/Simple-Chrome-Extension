# My Chrome Extension Project

This project is a replica of the Chrome extension created in the tutorial series "How to make a Chrome Extension" by JerryJacks. Specifically, it focuses on creating the popup window, as demonstrated in episode #3.

## Project Overview

This Chrome extension provides a simple popup window that appears when the extension's toolbar icon is clicked. The popup window includes basic HTML and JavaScript to demonstrate how to create and manage the extension's user interface.

### Features

- Display a custom popup window when the extension icon is clicked.
- Simple user interface with basic interactivity.
- Easy-to-follow structure for learning Chrome extension development.

## Getting Started

Follow the instructions below to set up and run the extension on your local machine.

### Prerequisites

- Google Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/my-chrome-extension.git
   cd my-chrome-extension
   ```

2. **Load the Extension in Chrome**:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the directory where you cloned the repository.

3. **Run the Extension**:
   - Click on the extension icon in the Chrome toolbar to open the popup window.

### Project Structure

```
Simple-Chrome-Extension/
├── api/
├── images/
│   └── icon-16.png
│   └── icon-32.png
│   └── icon-48.png
│   └── icon-128.png
├── popup/
│   ├── popup.html
│   ├── bulma.min.css
├── background.js
├── manifest.json
└── README.md
```

- **images**: This directory contains the icon for the extension.
- **popup/popup.html**: The HTML file for the popup window.
- **popup/bulma.min.css**: The CSS file for styling the popup window.
- **background.js**: The JavaScript file for adding interactivity to the popup window.
- **manifest.json**: The manifest file that configures the extension.
- **README.md**: This README file.

### Usage

Click the extension icon in the Chrome toolbar to open the popup window. The popup will display a simple interface defined in `popup.html`, styled with `bulma.css`, and made interactive with `background.js`.

### Customization

Feel free to customize the HTML, CSS, and JavaScript files to modify the popup window according to your preferences. You can add more features and functionalities to extend the capabilities of this basic Chrome extension.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Contributions are always welcome!

## Credits

This project is based on the tutorial series "How to make a Chrome Extension" by JerryJacks. Special thanks to JerryJacks for providing an excellent tutorial series.

- YouTube Tutorial: [How to make a Chrome Extension](https://www.youtube.com/watch?v=VQnBO4hxwyw&list=PLVrGZCP4x3PRHKbq-gDrSygGHbU4X9pTR)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
