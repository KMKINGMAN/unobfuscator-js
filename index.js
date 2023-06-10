const yargs = require('yargs');
const fs = require('fs');
const lib = require('./lib');
const main_function = require('./main_function');

const argv = yargs
    .usage('Usage: node index.js <file_path> <variable_name>')
    .demandCommand(2, 'Please provide at least 2 arguments.')
    .argv;

const file_path = argv._[0];
const variable_name = argv._[1];

if (!fs.existsSync(file_path)) {
    console.error('Error: The file does not exist.');
    process.exit(1);
}

if (!file_path.endsWith('.js')) {
    console.error('Error: The file is not a JavaScript file.');
    process.exit(1);
};

const all_variables = lib.variableCopyFinder(file_path, variable_name).join("|");
console.log(`found ${all_variables.split("|").length} function copy`);
const regex = new RegExp(`(${all_variables})\\((.*?)\\)`, 'g');
const file_content = fs.readFileSync(file_path, "utf-8");
let new_file_content = file_content.replace(regex, (match, funcName, code) => {
    try {
        let number = Number(code.split(", ")[0]);
        let string = code.split(", ")[1] === undefined ?? code.split(", ")[1].split("'").join("");

        const result = main_function(number, string);
        console.log(`${funcName}(${number}${string === true ? "" : `, ${string}`}) => ${result}`)

        return `'${result}'`;
    } catch (error) {
        console.log(error);
        console.log(code)
        return match;
    }
});
new_file_content = new_file_content.replace(/(\[[\'\"])(\w+)([\'\"]\])/g, (match, p1, p2, p3) => {
    return `.${p2}`;
});
new_file_content = `\n\/\/From :${file_path}\n\/\/By :https://github.com/kmkingman\n` + new_file_content
new_file_content = lib.HexToDecimal(new_file_content);
date = new Date();
fs.writeFileSync(`${date.getTime()}-output.js`, new_file_content, 'utf-8');
console.log(`Done Saved at ${date.getTime()}-output.js`);