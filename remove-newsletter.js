const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the newsletter section with just a Contact Us header
    const searchString = /<h4[^>]*>Newsletter<\/h4>\s*<p[^>]*>Subscribe to get the latest news and updates\.<\/p>\s*<form[^>]*>[\s\S]*?<\/form>/g;
    
    if (searchString.test(content)) {
        content = content.replace(searchString, '<h4 style="color: #F97316; margin-bottom: 1.5rem; font-size: 1.2rem;">Contact Us</h4>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Removed newsletter from ${file}`);
    }
});
