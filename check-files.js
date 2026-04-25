const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let errors = [];

files.forEach(file => {
    try {
        // Node's -c (check syntax) doesn't support JSX by default.
        // But we can check if it's valid enough or at least if there's corrupted encoding.
        // Actually, we can use a small regex to check for the '?' corruption which is the main issue.
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('\ufffd') || content.includes('?')) {
             errors.push(`Encoding issue in ${file}`);
        }
    } catch (e) {
        errors.push(`Error reading ${file}: ${e.message}`);
    }
});

if (errors.length > 0) {
    console.log("Found issues:");
    errors.forEach(e => console.log(e));
} else {
    console.log("No encoding issues found in .js/.jsx files.");
}
