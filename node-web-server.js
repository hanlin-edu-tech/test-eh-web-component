const http = require('http');
const path = require("path");
const fs = require('fs');

const ctMap = {
    ".aac" : "audio/aac",
    ".abw" : "x-abiword",
    ".arc" : "x-freearc",
    ".avi" : "x-msvideo",
    ".azw" : "amazon.ebook",
    ".bin" : "octet-stream",
    ".bmp" : "image/bmp",
    ".bz" : "x-bzip",
    ".bz2" : "x-bzip2",
    ".csh" : "x-csh",
    ".css" : "text/css",
    ".csv" : "text/csv",
    ".doc" : "application/msword",
    ".docx" : "wordprocessingml.document",
    ".eot" : "ms-fontobject",
    ".epub" : "epub+zip",
    ".gz" : "application/gzip",
    ".gif" : "image/gif",
    ".html" : "text/html",
    ".html" : "text/html",
    ".ico" : "microsoft.icon",
    ".ics" : "text/calendar",
    ".jar" : "java-archive",
    ".jpeg" : "image/jpeg",
    ".jpg" : "image/jpeg",
    ".js" : "text/javascript",
    ".json" : "application/json",
    ".jsonld" : "ld+json",
    ".mid" : "x-midi",
    ".midi" : "x-midi",
    ".mjs" : "text/javascript",
    ".mp3" : "audio/mpeg",
    ".mpeg" : "video/mpeg",
    ".mpkg" : "installer+xml",
    ".odp" : "opendocument.presentation",
    ".ods" : "opendocument.spreadsheet",
    ".odt" : "opendocument.text",
    ".oga" : "audio/ogg",
    ".ogv" : "video/ogg",
    ".ogx" : "application/ogg",
    ".opus" : "audio/opus",
    ".otf" : "font/otf",
    ".png" : "image/png",
    ".pdf" : "application/pdf",
    ".php" : "application/php",
    ".ppt" : "ms-powerpoint",
    ".pptx" : "presentationml.presentation",
    ".rar" : "vnd.rar",
    ".rtf" : "application/rtf",
    ".sh" : "x-sh",
    ".svg" : "svg+xml",
    ".swf" : "shockwave-flash",
    ".tar" : "x-tar",
    ".tif" : "image/tiff",
    ".tiff" : "image/tiff",
    ".ts" : "video/mp2t",
    ".ttf" : "font/ttf",
    ".txt" : "text/plain",
    ".vsd" : "vnd.visio",
    ".wav" : "audio/wav",
    ".weba" : "audio/webm",
    ".webm" : "video/webm",
    ".webp" : "image/webp",
    ".woff" : "font/woff",
    ".woff2" : "font/woff2",
    ".xhtml" : "xhtml+xml",
    ".xls" : "ms-excel",
    ".xlsx" : "spreadsheetml.sheet",
    ".xml" : "section 3)",
    ".xul" : "xul+xml",
    ".zip" : "application/zip",
    ".3gp" : "video/3gpp",
    ".3g2" : "video/3gpp2",
    ".7z" : "7z-compressed"}

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