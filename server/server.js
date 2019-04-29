require('newrelic');
const app = require('./app.js');
const angular = require('static-angular');
const options = {
  path: './../Scoreboard/dist/Scoreboard/'
}

app.use(angular(options));

const PORT = 9001;

app.listen(PORT, function() {
  console.log(`RT Scoreboard listening on port ${PORT}!`);
});