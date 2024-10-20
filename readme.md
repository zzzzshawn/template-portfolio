# Installation Instructions

To install this site locally, follow these steps:

1. **Clone the repository**: Open your terminal and run the commandto clone the repository to your local machine.

```bash
git clone https://github.com/zzzzshawn/template-portfolio.git
```

2.  **Navigate to the project directory**: Change into the project directory by running

```bash
cd template-portfolio
```

3. **Install dependencies**: Run the below commands to install all the project dependencies.

```bash
npm install
```




4.  **Start the development server**: Run 
```
npm run dev
```
to start the development server. 
 
5. **Access the site**: Open your web browser and navigate to `http://localhost:5173` to access the site.

6. **Create .env**: Create an account on Emailjs `https://www.emailjs.com/` if you want to send emails directly from client side 
```
    VITE_EMAILJS_SERVICEID=
    VITE_EMAILJS_TEMPLATEID=
    VITE_EMAILJS_PUBLICKEY=
```

7. **Make changes in `src/constants/index` and you're good to go 👍**

**Note:** Make sure you have Node.js and npm or yarn installed on your machine. If you don't have them installed, you can download and install them from the official Node.js website.

**Troubleshooting:**

- If you encounter any issues during installation, check the project's `package.json` file for specific installation instructions or dependencies that might be missing.
- If you're using a virtual environment, ensure it's activated before running the installation commands.
- If you're behind a proxy, ensure your npm or yarn configuration is set up to use the proxy correctly.
