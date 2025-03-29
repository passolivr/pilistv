import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import wawoff2 from 'wawoff2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/fonts');
const targetDir = path.join(__dirname, '../public/assets/fonts');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Copy OTF and convert to WOFF2
async function processFont(inputPath) {
    const otfBuffer = fs.readFileSync(inputPath);
    const baseName = path.basename(inputPath);

    // Copy OTF file
    const otfOutputPath = path.join(targetDir, baseName);
    fs.copyFileSync(inputPath, otfOutputPath);
    console.log(`Copied ${baseName} to public directory`);

    // Convert to WOFF2
    const woff2Buffer = await wawoff2.compress(otfBuffer);
    const woff2OutputPath = path.join(
        targetDir,
        path.basename(inputPath, '.otf') + '.woff2'
    );

    fs.writeFileSync(woff2OutputPath, woff2Buffer);
    console.log(`Converted ${baseName} to WOFF2`);
}

// Process all OTF files
const files = fs.readdirSync(sourceDir);
const otfFiles = files.filter(file => file.endsWith('.otf'));

Promise.all(otfFiles.map(file => {
    const inputPath = path.join(sourceDir, file);
    return processFont(inputPath).catch(err => {
        console.error(`Error processing ${file}:`, err);
    });
})).then(() => {
    console.log('All fonts processed successfully!');
}); 