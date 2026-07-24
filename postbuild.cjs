const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

function processHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Find all stylesheet links
      const cssRegex = /<link rel="stylesheet"[^>]+href="(\/assets\/[^>]+)">/g;
      const cssLinks = [];
      let match;
      
      // Keep replacing until no more matches
      let tempContent = content;
      while ((match = cssRegex.exec(tempContent)) !== null) {
        cssLinks.push({
          fullMatch: match[0],
          href: match[1]
        });
      }

      // Read CSS files and replace links with <style>
      let injectedStyles = '';
      for (const cssLink of cssLinks) {
        const cssFilePath = path.join(distDir, cssLink.href.replace('/assets/', 'assets/'));
        if (fs.existsSync(cssFilePath)) {
          const cssContent = fs.readFileSync(cssFilePath, 'utf8');
          injectedStyles += `\n<style>\n${cssContent}\n</style>\n`;
          content = content.replace(cssLink.fullMatch, '');
        }
      }

      // Find all JS scripts and module preloads (we want them at the bottom of the body)
      const preloadRegex = /<link rel="modulepreload"[^>]+href="\/assets\/[^>]+>/g;
      const scriptRegex = /<script type="module" crossorigin src="\/assets\/[^>]+><\/script>/g;

      const preloadLinks = content.match(preloadRegex) || [];
      const scriptLinks = content.match(scriptRegex) || [];

      // Remove them from current locations
      preloadLinks.forEach(link => { content = content.replace(link, ''); });
      scriptLinks.forEach(link => { content = content.replace(link, ''); });

      // Inject CSS styles before </head>
      if (injectedStyles) {
        content = content.replace('</head>', `${injectedStyles}</head>`);
      }

      // Inject JS before </body>
      const jsToInject = [...preloadLinks, ...scriptLinks].join('\n  ');
      if (jsToInject) {
        content = content.replace('</body>', `  ${jsToInject}\n</body>`);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Optimized (Inlined) CSS and moved JS in ${file}`);
    }
  }
}

if (fs.existsSync(distDir)) {
  processHtmlFiles(distDir);
} else {
  console.log('dist directory not found.');
}
