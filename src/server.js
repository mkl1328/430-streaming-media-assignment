const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      // htmlHandler.getIndex(request, response);
      htmlHandler.getPage(request, response, '/../client/client.html');
      break;
    case '/page2':
      // htmlHandler.getPage2(request, response);
      htmlHandler.getPage(request, response, '/../client/client2.html');
      break;
    case '/page3':
      // htmlHandler.getPage3(request, response);
      htmlHandler.getPage(request, response, '/../client/client3.html');
      break;
    case '/party.mp4':
      mediaHandler.getMedia(request, response, '../client/party.mp4', 'video/mp4');
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, '../client/bird.mp4', 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, '../client/bling.mp3', 'audio/mpeg');
      break;
    default:
      htmlHandler.getPage(request, response, '/../client/client.html');
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
