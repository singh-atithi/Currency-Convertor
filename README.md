# **🌍 Currency Converter**

This is a simple currency converter web application that allows users to convert between different currencies using real-time exchange rates. The application is built with **HTML**, **CSS**, and **JavaScript**.

## **✨ Features**

- 🌐 Convert currencies based on real-time exchange rates
- 🇺🇳 Automatically updates flags based on the selected currencies
- 📊 Displays the conversion result in a user-friendly format

## **🚀 Getting Started**

### **Prerequisites**

- Basic knowledge of **HTML**, **CSS**, and **JavaScript**
- A text editor or an Integrated Development Environment (**IDE**) like **VSCode**
- A web browser (e.g., **Google Chrome**, **Firefox**)

### **Installation**

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/currency-converter.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd currency-converter
    ```

3. **Open the `index.html` file in your web browser** to view the application.

### **Usage**

1. Open the application in your web browser.
2. Enter the amount you wish to convert in the input field.
3. Select the currencies you wish to convert from and to using the dropdown selectors.
4. Click the **"EVALUATE CONVERSION"** button to see the converted amount.

### **Code Overview**

- **HTML**: The structure of the application, including input fields, dropdown selectors, and display elements.
- **CSS**: Styling for the application, including layout, colors, and responsiveness.
- **JavaScript**: Logic for fetching exchange rates, updating flags, and performing the conversion.

### **Important Note**

The API key used in this project (`https://api.metalpriceapi.com/v1/latest?api_key=bbfdfd44e5c10f3192ee8554883c5c7c`) is no longer active. Please use another API for testing purposes. Here are some alternative APIs you can use:

- [**ExchangeRate-API**](https://www.exchangerate-api.com/)
- [**CurrencyLayer**](https://currencylayer.com/)
- [**Open Exchange Rates**](https://openexchangerates.org/)

To use a different API, replace the `url` variable in the JavaScript file with the new API endpoint.

```javascript
let url = "YOUR_NEW_API_ENDPOINT";

File Structure
index.html: The main HTML file containing the structure of the application.
style.css: The CSS file containing the styles for the application.
code.js and app.js: The JavaScript files containing the logic for fetching exchange rates and updating the UI.
Screenshot

🤝 Contributing
Feel free to fork the repository and submit pull requests. Any improvements or bug fixes are welcome.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

💖 Acknowledgements
Font Awesome for the icons
FlagsAPI for the flag images
