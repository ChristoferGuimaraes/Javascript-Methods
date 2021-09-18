const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

http.createServer((req,res) => {
    const file = req.url === '/set-timeout' ? 'timeout.html' : req.url;
    const filePath = path.join(__dirname, 'set_timeout', file);
    const extname = path.extname(filePath);

    const allowedFileTypes = [".html", ".css", ".js"];
    const allowed = allowedFileTypes.find(item => item == extname)

    fs.readFile(filePath, (err, content) => {

        res.end(content);
    })

}).listen(port, () => console.log(`Server is running on port ${port}`));