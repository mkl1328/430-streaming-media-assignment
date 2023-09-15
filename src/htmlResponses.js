const fs = require('fs');

const getPage = (request, response, pathName) => {
  const page = fs.readFileSync(`${__dirname}${pathName}`);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

module.exports.getPage = getPage;
