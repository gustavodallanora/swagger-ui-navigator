const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const cors = require('cors');
const path = require('path');
var serveIndex = require('serve-index');

let API_REPO_DIR      = path.join(__dirname, "../api-repo");
let TEMPLATE_NAME      = path.join(__dirname, "../templates/custom_listing.html");

console.log(API_REPO_DIR);

// Read port from command line, config, or default
var port = (process.argv[2] || (process.env.npm_package_config_port || 3000));

var options = {
  swaggerUrl: '/'
}

app.use(cors());
app.use('/ui', swaggerUi.serve, swaggerUi.setup(null,options));
app.use('/', serveIndex(API_REPO_DIR,{'icons': true, 'template': TEMPLATE_NAME}));
app.use('/', express.static(API_REPO_DIR));


app.listen(port, function () {
  console.log('Listening on port ' + port +'...');
});

