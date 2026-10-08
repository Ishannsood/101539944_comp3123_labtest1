const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    files.forEach(file => {
        const filePath = path.join(logsPath, file);

        console.log(`Deleting file: ${file}`);

        fs.rmSync(filePath, { recursive: true, force: true });
    });

    fs.rmdirSync(logsPath);

    console.log("Logs directory removed.");
} else {
    console.log("Logs directory does not exist.");
}