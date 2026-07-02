const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<span class="mobile-toggle">+</span>')) {
        content = content.replace(/<span class="mobile-toggle">\+<\/span>/g, '<span class="mobile-toggle">▼</span>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated mobile toggle icon in ${file}`);
    }
});
