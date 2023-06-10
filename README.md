# unobfuscator-js

## Description
**unobfuscator-js** is a Node.js project that simplifies the process of reading JavaScript files that have been obfuscated using obfuscator.io. It provides a **main function** that returns the parsed values from obfuscated code, making it easier to analyze and understand the obfuscated JavaScript files.

## Installation

To use **unobfuscator-js** on your local machine, you need to follow these steps:

1. Fork the repository: Go to the [unobfuscator-js repository](https://github.com/KMKINGMAN/unobfuscator-js) and click on the "Fork" button to create a copy of the project under your GitHub account.

2. Clone the repository: Open your terminal and navigate to the desired directory where you want to store the project. Run the following command to clone the repository to your local machine:

   ```
   git clone https://github.com/KMKINGMAN/unobfuscator-js.git
   ```

3. Change directory: Navigate to the project directory using the following command:

   ```
   cd unobfuscator-js
   ```

4. Install dependencies: Run the following command to install the required packages:

   ```
   npm install
   ```

## Usage

To use **unobfuscator-js**, follow these steps:

1. Edit the `main_function.js` file: Open the `main_function.js` file in a text editor of your choice and add the necessary code or modify it as per your requirements. This file contains the `main` function that will be used to parse the obfuscated code.

   ```javascript
   // main_function.js

   // Your code here
   // add a main function from original_file that you want to use 
   function _0x37273f(_0x8563f) {
 
     return;
   }

   module.exports = _0x37273f;
   ```

2. Save the changes to `main_function.js`.

3. Use the command line interface (CLI) in Windows or Linux to execute the following command:

   ```
   node index.js <file_path> <main_function_name>
   ```

   - `file_path`: The path to the JavaScript file that you want to unobfuscate.
   - `main_function_name`: The name of the `main` function defined in `main_function.js`.

   Replace `file_path` with the actual path to the obfuscated JavaScript file and `main_function_name` with the name of the `main` function you defined.

4. The unobfuscated code will be generated and saved in a file named `data-output.js`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [unobfuscator-js repository](https://github.com/KMKINGMAN/unobfuscator-js).
