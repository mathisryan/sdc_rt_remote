const express = require('express');
const express_static = require('express-static');
const app = express();
const db = require('./db/dbPostgresQuery');
const cors = require('cors');
require('newrelic');

app.use(cors());
app.use(express.static('loaderIO'));

app.get('/m/movieinfo/ID/:id', db.getMovieInfobyID);
app.get('/m/movieinfo/name/:name', db.getMovieInfobyName);

app.get('/cr/criticinfo/:name', db.getCriticbyName);

app.get('/rev/reviewinfo/ID/:id', db.getReviewInfobyID);

app.get('/cr/tomotometer/ID/:id', db.getReviewsbyID);
app.get('/cr/tomotometer/name/:name', db.getReviewsbyName);

app.get('/cr/topdozenreviews/ID/:id', db.get12ReviewsbyID);
app.get('/cr/topdozenreviews/name/:name', db.get12ReviewsbyName);

app.get('/cr/topcriticmeter/ID/:id', db.getTopReviewsbyID);
app.get('/cr/topcriticmeter/name/:name', db.getTopReviewsbyName);

app.post('/m/movieinfo', db.createFilm);
app.delete('/m/movieinfo/ID/:id', db.deleteFilmbyID);
app.delete('/m/movieinfo/name/:name', db.deleteFilmbyName);
app.put('/m/movieinfo/ID', db.updateFilmbyID);
app.put('/m/movieinfo/name', db.updateFilmbyName);

app.post('/cr/criticinfo', db.createCritic);
app.delete('/cr/criticinfo/:name', db.deleteCritic);
app.put('/cr/criticinfo/name', db.updateCritic);

app.post('/rev/reviewinfo', db.createReview);
app.delete('/rev/reviewinfo/:id', db.deleteReview);
app.put('/rev/reviewinfo/ID', db.updateReview);

app.use('/assets', express_static('./Scoreboard/dist/Scoreboard/assets/'));


module.exports = app;