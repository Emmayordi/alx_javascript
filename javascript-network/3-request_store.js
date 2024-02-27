#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/route_0') {
    // Small text route
    fs.writeFileSync('output.txt', 'C is fun!\n');
  } else if (req.url === '/route_1') {
    // Big text route
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."; // (Add your full text here)
    fs.writeFileSync('output.txt', loremIpsum);
  } else if (req.url === '/route_2') {
    // Empty text route
    fs.writeFileSync('output.txt', '');
  }

  res.end('File saved to output.txt\n');
});

const PORT = 5050;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Check the existence of files and print error messages
if (!fs.existsSync('w_file_0')) {
  console.error('[stderr]: cat: w_file_0: No such file or directory');
}

if (!fs.existsSync('w_file_1')) {
  console.error('[stderr]: cat: w_file_1: No such file or directory');
}

if (!fs.existsSync('w_file_2')) {
  console.error('[stderr]: cat: w_file_2: No such file or directory');
}


