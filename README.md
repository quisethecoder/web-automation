# Puppeteer Credit Card Form Automation 

This project demonstrates how to use Puppeteer to automate filling out a credit card form. The script leverages the puppeteer-extra library with the stealth plugin to avoid detection.

**Installation**
Clone the repository: git clone https://github.com/yourusername/puppeteer-credit-card-form-automation.git
cd puppeteer-credit-card-form-automation

Install the dependencies: npm install puppeteer-extra puppeteer-extra-plugin-stealth

**Usage**
Run the script: node index.js

**Code Explanation**
The script performs the following steps:

1. Requires puppeteer-extra and the stealth plugin.
2. Uses the stealth plugin to avoid detection.
3. Launches a new browser instance.
4. Opens a new page and navigates to the specified URL.
5. Waits for and fills in the credit card form fields (name, card type, card number, CSC, expiration month, and year).
6. Clicks the submit button to submit the form.
