# Form-Input-Validation-with-JavaScript

This project is a **user registration form** built with **HTML, CSS, and JavaScript**. It validates user input before submission and gives feedback using JavaScript `alert()` messages.

The project was created to meet the requirements of the **Form Input Validation with JavaScript** assessment.

## Project Objective

The goal of this project is to demonstrate understanding of:

- JavaScript form validation
- The browser window API, especially `alert()`
- Working with form inputs
- Preventing form submission when validation fails
- Showing a success message when all inputs are correct

## Features

The registration form includes the following fields:

- **Full Name**
- **Email Address**
- **Password**
- **Confirm Password**
- **Age**

## Validation Rules

The form checks the following before submission:

### 1. Full Name
- Must not be empty
- Must contain at least **2 words**

### 2. Email Address
- Must be in a valid email format
- Example: `example@domain.com`

### 3. Password
- Must be at least **8 characters long**
- Must contain:
  - at least **one uppercase letter**
  - at least **one number**
  - at least **one special character**

### 4. Confirm Password
- Must match the password entered

### 5. Age
- Must be **18 or older**

## Functional Requirements Implemented

- Displays **alert messages** when an input is invalid
- **Stops form submission** if any validation rule fails
- Displays a **success alert message** if all inputs are valid
- Includes a small **bonus feature**: red border feedback on invalid input, which clears as the user corrects it

## Technologies Used

- **HTML5** – for the structure of the form
- **CSS3** – for styling the form and layout
- **JavaScript** – for input validation and user feedback

## Project Structure

```bash
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. The user fills in the registration form.
2. When the **Validate** button is clicked, JavaScript checks each field.
3. If any field is invalid:
   - an alert message is shown
   - the form is not submitted
   - the invalid input is highlighted
4. If all fields are valid:
   - a success message is shown
   - the form resets

## How to Run the Project

1. Download or clone this repository:

```bash
git clone <your-repository-link>
```

2. Open the project folder.
3. Make sure these files are in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
4. Open `index.html` in your browser.

## Important Note

To make the JavaScript work, ensure the HTML file links the JavaScript file before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

## Learning Focus

This project uses beginner-friendly JavaScript concepts such as:

- variables (`const`, `let`)
- functions
- conditionals (`if`, `else`)
- loops (`for...of`)
- string methods
- event listeners
- `alert()` messages

## Author

**Abraham Aigbokhan**

## Submission

This project was prepared for submission as part of a JavaScript assessment on **Form Input Validation**.
