const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the toggle already exists
    if (!content.includes('<span class="mobile-toggle">')) {
        // Replace <a href="services.html">Services</a> with <a href="services.html">Services</a><span class="mobile-toggle">+</span>
        // or <a href="services.html" class="active">Services</a>
        
        content = content.replace(/<a href="services\.html">Services<\/a>/g, '<a href="services.html">Services</a><span class="mobile-toggle">+</span>');
        content = content.replace(/<a href="services\.html" class="active">Services<\/a>/g, '<a href="services.html" class="active">Services</a><span class="mobile-toggle">+</span>');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated menu in ${file}`);
    }
});
