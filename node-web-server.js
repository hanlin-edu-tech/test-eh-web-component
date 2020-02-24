const http = require('http');
const path = require("path");
const fs = require('fs');

const ctMap = {
    ".aac" : "audio/aac",
    ".abw" : "application/x-abiword",
    ".arc" : "application/x-freearc",
    ".avi" : "video/x-msvideo",
    ".azw" : "application/vnd.amazon.ebook",
    ".bin" : "application/octet-stream",
    ".bmp" : "image/bmp",
    ".bz" : "application/x-bzip",
    ".bz2" : "application/x-bzip2",
    ".csh" : "application/x-csh",
    ".css" : "text/css",
    ".csv" : "text/csv",
    ".doc" : "application/msword",
    ".docx" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".eot" : "application/vnd.ms-fontobject",
    ".epub" : "application/epub+zip",
    ".gz" : "application/gzip",
    ".gif" : "image/gif",
    ".htm" : "text/html",
    ".html" : "text/html",
    ".ico" : "image/vnd.microsoft.icon",
    ".ics" : "text/calendar",
    ".jar" : "application/java-archive",
    ".jpeg" : "image/jpeg",
    ".js" : "text/javascript",
    ".json" : "application/json",
    ".jsonld" : "application/ld+json",
    ".mid" : "audio/midi audio/x-midi",
    ".midi" : "audio/midi audio/x-midi",
    ".mjs" : "text/javascript",
    ".mp3" : "audio/mpeg",
    ".mpeg" : "video/mpeg",
    ".mpkg" : "application/vnd.apple.installer+xml",
    ".odp" : "application/vnd.oasis.opendocument.presentation",
    ".ods" : "application/vnd.oasis.opendocument.spreadsheet",
    ".odt" : "application/vnd.oasis.opendocument.text",
    ".oga" : "audio/ogg",
    ".ogx" : "application/ogg",
    ".opus" : "audio/opus",
    ".otf" : "font/otf",
    ".png" : "image/png",
    ".pdf" : "application/pdf",
    ".php" : "application/php",
    ".ppt" : "application/vnd.ms-powerpoint",
    ".pptx" : "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".rar" : "application/vnd.rar",
    ".rtf" : "application/rtf",
    ".sh" : "application/x-sh",
    ".svg" : "image/svg+xml",
    ".swf" : "application/x-shockwave-flash",
    ".tar" : "application/x-tar",
    ".tif" : "image/tiff",
    ".tiff" : "image/tiff",
    ".ts" : "video/mp2t",
    ".ttf" : "font/ttf",
    ".txt" : "text/plain",
    ".vsd" : "application/vnd.visio",
    ".wav" : "audio/wav",
    ".weba" : "audio/webm",
    ".webm" : "video/webm",
    ".webp" : "image/webp",
    ".woff" : "font/woff",
    ".xhtml" : "application/xhtml+xml",
    ".xls" : "application/vnd.ms-excel",
    ".xul" : "application/vnd.mozilla.xul+xml",
    ".zip" : "application/zip",
    ".3gp" : "video/3gpp",
    ".3g2" : "video/3gpp2",
    ".7z" : "application/x-7z-compressed"};

const server = http.createServer((req, res) => {
    console.log(req.url);
    let contentType = ctMap[path.extname(req.url)];
    if(contentType){
        res.writeHead(200,{'Content-Type' : contentType});
    }
    fs.readFile(path.join(__dirname, req.url), 'utf8', function(err, contents) {
        res.end(contents);
    });
});
 
server.listen(8080);
 
console.log('Node.js web server at port 8080 is running..')