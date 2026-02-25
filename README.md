# Currency Exchange Web App

A full-stack Currency Exchange Web Application built with Node.js, Express, EJS, and Axios that allows users to convert currencies in real-time using a live exchange rate API.

## 🚀 Features

- 🌍 Real-time currency conversion

- 📊 Displays exchange rate and converted amount

- ✅ Form validation (client-side & server-side)

- 🔐 Secure API key using environment variables

- 🎨 Clean and responsive UI (Poppins font + modern styling)

- ⚡ Fast and lightweight Express server

## 🛠 Tech Stack

- Backend: Node.js, Express.js

- Frontend: EJS (HTML templating), CSS, JavaScript

- Template Engine: EJS

- HTTP Client: Axios

- API: ExchangeRate API

- Environment Config: dotenv

##  📁 Project Structure
```
currency-exchange-app/
│
├── public/
│   ├── styles/
│   │   └── style.css
│   ├── images/
│   │   └── currencies.jpg
│   └── index.js
│
├── views/
│   └── index.ejs
│
├── .env
├── server.js
├── package.json
└── README.md
```
##  📦 Installation & Setup
1️⃣ Clone the repository
```javascript
git clone https://github.com/Dharmndr/Currency-Exchange-App.git
cd currency-exchange-app
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Create .env file

Create a .env file in the root directory:
```javascript
API_KEY=your_exchange_rate_api_key
```
Get your free API key from: https://www.exchangerate-api.com/

4️⃣ Start the server
```
node server.js
```
Server will run at:
```javascript
http://localhost:3000
```

## 🔄 How It Works
1️⃣ Fetch Supported Currency Codes

When the homepage loads:
```
GET /codes
```
The app retrieves all supported currency codes from the API and populates dropdown menus.

2️⃣ Convert Currency

When user submits the form:
```
POST /submit
```
The app sends a request:
```
/pair/{base}/{target}/{amount}
```
The API returns:

- Conversion rate

- Converted amount

The results are displayed dynamically using EJS templating.

## 🧠 Validation Logic
Client-Side Validation

- Ensures both currencies are selected

- Ensures amount is positive

- Highlights invalid fields

- Displays error messages dynamically

Server-Side Validation

- API key check

- Error handling for API failures

## 🎨 UI Highlights

- Clean centered card layout

- Background image with modern styling

- Error messages in red

- Result highlighted in green

- Responsive design


## 🧩 Future Improvements

- Add currency flags

- Add swap currency button

- Add historical exchange rates

- Add currency conversion charts

## 👨‍💻 Author

Dharmendra Kumar

© 2025 All rights reserved.

## 📄 License

This project is open-source and available under the MIT License.
