# Project Setup

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
    DATABASE_URL=postgresql://your_username:your_password@localhost:5432/liqupay_db
    LIQUPAY_API_KEY=your_actual_liqupay_api_key
    LIQUPAY_SECRET=your_actual_liqupay_secret
    APP_URL=http://localhost:5000
    ```

    Make sure to replace `your_username`, `your_password`, `liqupay_db`, `your_actual_liqupay_api_key`, and `your_actual_liqupay_secret` with your actual values.

3. **Start Development Server**:
    After installing the dependencies and setting up the environment variables, start the development server using the following command:
    ```sh
    npm run dev
    ```

    This will start the development server and you can view the project in your browser at the specified local address (usually `http://localhost:5000`).

