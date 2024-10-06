
# Personal Portfolio

This is my portfolio project where I present my list of projects, a brief personal introduction, a contact form, and links to my social media, including my GitHub profile.

## Table of Contents

- [Project Description](#project-description)
- [Technologies and Libraries Used](#technologies-and-libraries-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Features](#features)
- [Contact](#contact)

## Project Description

This portfolio was developed to showcase my projects and skills in a clear and interactive way. It uses routes for navigation between sections and presents relevant information about each project in a list format.

## Technologies and Libraries Used

- **React**: Library for building user interfaces.
- **React Router**: For route implementation.
- **Tailwind CSS**: For styling and responsiveness.
- **React Icons**: For icons in the footer.
- **JavaScript**: Programming language used in development.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/your_portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your_portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

5. Configure the `tailwind.config.js` file:

   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. Add Tailwind directives in the main CSS file (e.g., `src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. Start the project:

   ```bash
   npm start
   ```

## How to Use

- Navigate through the menu to access different sections of the portfolio.
- Click on a project in the list to view details.
- Fill out the contact form and check the information in the console.
- Use the icons in the footer to access my social media.

## Features

- **Menu**: Navigation between the portfolio sections using routes.
- **Project List**: Displays the projects with the ability to view details.
- **Personal Introduction**: Information about me and my skills.
- **Contact Form**: Allows visitors to send messages, printing the data to the console.

## Contact

For any questions or feedback, feel free to contact me through my email: isabelledallacarlesso@gmail.com
