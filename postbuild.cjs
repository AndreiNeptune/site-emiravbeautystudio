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

      // Find all JS scripts and module preloads
      const preloadRegex = /<link rel="modulepreload"[^>]+href="\/assets\/[^>]+>/g;
      const scriptRegex = /<script type="module" crossorigin src="\/assets\/[^>]+><\/script>/g;

      const preloadLinks = content.match(preloadRegex) || [];
      const scriptLinks = content.match(scriptRegex) || [];

      // Remove scripts from current locations (we leave preloads in the head where Vite put them, or if Vite didn't put them there, we inject them there)
      preloadLinks.forEach(link => { content = content.replace(link, ''); });
      scriptLinks.forEach(link => { content = content.replace(link, ''); });

      // Generate preloads for the actual scripts (since Vite omits them for entry scripts)
      const generatedPreloads = scriptLinks.map(scriptTag => {
        const match = scriptTag.match(/src="(\/assets\/[^"]+)"/);
        return match ? `<link rel="modulepreload" crossorigin href="${match[1]}">` : '';
      }).filter(Boolean);

      // Inject CSS styles and Preloads before </head>
      // We use a Set to remove any duplicate preloads just in case
      const allPreloads = [...new Set([...preloadLinks, ...generatedPreloads])];
      const preloadsToInject = allPreloads.join('\n  ');
      const headInjections = (injectedStyles + '\n  ' + preloadsToInject).trim();
      if (headInjections) {
        content = content.replace('</head>', `\n  ${headInjections}\n</head>`);
      }

      // Inject JS before </body>
      const jsToInject = scriptLinks.map(link => link.replace('<script type="module"', '<script type="module" async')).join('\n  ');
      if (jsToInject) {
        content = content.replace('</body>', `  ${jsToInject}\n</body>`);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Optimized (Inlined) CSS and moved JS in ${file}`);

      // Create folder structure for clean URLs (Hostinger compatibility)
      if (file !== 'index.html' && file !== '404.html') {
        const folderName = file.replace('.html', '');
        const folderPath = path.join(dir, folderName);
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }
        fs.renameSync(filePath, path.join(folderPath, 'index.html'));
        console.log(`Moved ${file} to ${folderName}/index.html`);
      }
    }
  }
}

if (fs.existsSync(distDir)) {
  processHtmlFiles(distDir);
} else {
  console.log('dist directory not found.');
}
