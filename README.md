# Calculator

JavaScript Calculator

A dynamic browser-based calculator built using vanilla JavaScript.
All UI elements are generated programmatically through DOM manipulation without relying on pre-written HTML buttons.

📌 Description

This project is a fully functional calculator application developed using pure JavaScript.
It demonstrates strong understanding of:

DOM manipulation

Event handling

State management

Basic arithmetic logic implementation

UI rendering through JavaScript

The calculator supports fundamental arithmetic operations and dynamic display updates.

🚀 Features

Addition, subtraction, multiplication, and division

Percentage calculation

Decimal support (restricted to one per number)

Backspace functionality

Clear/reset functionality

Dynamic operator enabling/disabling

Dual display screen (expression + result)

Fully generated UI via JavaScript

🛠 Tech Stack

HTML5

CSS3 (Flexbox layout)

Vanilla JavaScript (ES6)

No external libraries or frameworks used.

📂 Project Structure
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md


All calculator buttons and screens are dynamically created inside script.js.

⚙️ Installation

Clone the repository:

git clone https://github.com/jayssSmm/Calculator


Navigate into the project directory:

cd calculator


Open index.html in your browser:

open index.html


Or simply double-click the file.

No dependencies or package installations required.

▶️ Usage

Click numeric buttons to enter values.

Select an operator (+, -, X, /, %).

Enter the next number.

Press = to calculate the result.

Special Controls

Clear → Resets the calculator.

Backspace → Removes last entered character.

Decimal (.) → Allows one decimal per number.

Operators automatically disable until a valid next input is entered.

🧠 How It Works (Technical Overview)

Buttons and display elements are created using document.createElement().

Flexbox is used for grid layout.

An internal array stores the parsed expression.

A custom operate() function evaluates expressions sequentially.

Operator buttons are dynamically enabled/disabled to prevent invalid states.

Decimal usage is controlled via a boolean flag.

🔮 Future Improvements

Keyboard support

Improved UI styling

Operator precedence (currently evaluates left-to-right)

Refactoring into modular functions

Unit testing

Error handling for divide-by-zero

🤝 Contribution

Contributions are welcome.

If you’d like to improve the project:

Fork the repository

Create a new branch

Submit a pull request

🏁 Portfolio Note

This project was built as part of structured frontend learning and demonstrates strong fundamentals in JavaScript logic, DOM manipulation, and UI state control without using frameworks.