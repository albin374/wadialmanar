const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

const replacementHTML = `<ul>
                        <li><a href="painting-works.html">Painting Works</a></li>
                        <li><a href="electrical-works.html">Electrical Works</a></li>
                        <li><a href="civil.html">Civil</a></li>
                        <li><a href="fit-out-works.html">IT Solutions</a></li>
                        <li><a href="joinery-works.html">Joinery Works</a></li>
                        <li><a href="flooring-works.html">Floor and wall tiling works</a></li>
                        <li><a href="ac-works.html">AC Installation & Services</a></li>
                        <li><a href="gypsum-works.html">Gypsum ceiling and partition works</a></li>
                        <li><a href="renovations.html">Renovations</a></li>
                    </ul>`;

htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We target the Services ul in the footer by matching the <h4>Services</h4> and the following <ul>...</ul>
    const searchRegex = /(<h4>Services<\/h4>\s*)<ul[^>]*>[\s\S]*?(?:<\/ul>)/g;
    
    if (searchRegex.test(content)) {
        content = content.replace(searchRegex, `$1${replacementHTML}`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added all services to footer in ${file}`);
    }
});
