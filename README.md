# LiquPay

LiquPay is a modern payment processing application designed to handle transactions efficiently and securely. This project leverages a variety of technologies to provide a robust and scalable solution for payment processing.

## Technologies Used

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **PostgreSQL**: A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Frontend
- **React**: A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.
- **Redux**: A predictable state container for JavaScript apps, often used with React for state management.

### Environment Management
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

### Development Tools
- **nvm (Node Version Manager)**: A version manager for Node.js, allowing you to switch between different versions of Node.js easily.
- **npm (Node Package Manager)**: A package manager for JavaScript, included with Node.js, used to install dependencies and run scripts.

## Project Setup

**Node.js Version: v20.17.0**

Make sure you have Node.js version `v20.17.0` installed. You can use a version manager like `nvm` to install and manage different Node.js versions.

To set up and run the project, follow these steps:

1. **Install Dependencies**:
    Run the following command to install all the necessary dependencies for the project:
    ```sh
    npm install
    ```

2. **Set Up Environment Variables**:
    Create a [.env](http://_vscodecontentref_/0) file in the root directory of the project and add the following environment variables:
    ```properties
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/liqupay_db
    LIQUPAY_API_KEY=your_actual_liqupay_api_key
    LIQUPAY_SECRET=your_actual_liqupay_secret
    APP_URL=http://localhost:5000
    ```

    Make sure to replace `your_actual_liqupay_api_key` and `your_actual_liqupay_secret` with your actual values.

3. **Create the Database**:
    Before starting the application, you need to create the database in PostgreSQL. Run the following command in the PostgreSQL console:
    ```sql
    CREATE DATABASE liqupay_db;
    ```

4. **Start Development Server**:
    After installing the dependencies, setting up the environment variables, and creating the database, start the development server using the following command:
    ```sh
    npm run dev
    ```

    This will start the development server and you can view the project in your browser at the specified local address (usually `http://localhost:5000`).