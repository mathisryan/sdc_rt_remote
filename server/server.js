require('newrelic');
const app = require('./app.js');
const cors = require('cors');
const angular = require('static-angular');
const options = {
  path: './../Scoreboard/dist/Scoreboard/'
}

app.use(angular(options));
app.use(cors());

const PORT = 9001;

app.listen(PORT, function() {
  console.log(`RT Scoreboard listening on port ${PORT}!`);
});