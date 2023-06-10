const fs = require("fs");

function variableCopyFinder(filePath, variableName, assignments = []) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const regex = new RegExp(`\\b(_\\w+)\\s*=\\s*${variableName}\\b`, 'g');
    const matches = content.match(regex);
    if (matches) {
      for (const match of matches) {
        const assignedVariable = match.match(/(_\w+)\s*=/)[1];
        assignments.push(assignedVariable);
        variableCopyFinder(filePath, assignedVariable, assignments);
      }
    }
    return assignments;
}

module.exports = {
    variableCopyFinder
}