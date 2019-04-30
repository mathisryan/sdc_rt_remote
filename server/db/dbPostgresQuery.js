var dbHost = require('./database_env').dbHost;
var dbPassword = require('./database_env').dbPassword;

const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'mysdc',
//   host: dbHost,
//   database: 'scorecard',
//   password: dbPassword,
//   port: 5432,
// })

const pool = new Pool({
  user: 'postgres',
  host: 'ec2-3-14-96-84.us-east-2.compute.amazonaws.com',
  database: 'scorecard',
  password: '1qazXSW!',
  port: 5432,
})

const getMovieInfobyID = (request, response) => {
  console.log('ID', request.params.id);
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getMovieInfobyName = (request, response) => {
  const filmTitle = request.params.name;
  pool.query('SELECT * FROM movies WHERE title = $1', [filmTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCriticbyName = (request, response) => {
  const name = request.params.name;
  pool.query('SELECT * FROM critic_reviews WHERE critic_id = ' +
    '(SELECT id FROM critics WHERE name = $1)', [name], (error, results) => {
    if (error) {
      console.log(results, error);
      throw error;
    }
    response.status(200).json(results.rows)
  })
};

const getReviewInfobyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critic_reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
    console.log(results.rows);
  })
};

const getReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = ' +
    '(SELECT id FROM movies WHERE title = $1)', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = $1 LIMIT 12', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('(SELECT * FROM critic_reviews WHERE movie_id = ' +
  '(SELECT id FROM movies WHERE title = $1)) LIMIT 12', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  const topC = 1;
  pool.query('SELECT * FROM critic_reviews JOIN critics ON (critic_reviews.critic_id = critics.id) ' +
    'WHERE critics.top_Critic = 1 AND critic_reviews.movie_id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('SELECT * FROM critic_reviews JOIN critics ON (critic_reviews.critic_id = critics.id) ' +
  'WHERE critics.top_Critic = 1 AND critic_reviews.movie_id = (SELECT id FROM movies WHERE title = $1)',
  [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createFilm = (request, response) => {
  const { newID, newTitle, newTitleURL, newPoster, newBackdrop } = request.query;
  pool.query('INSERT INTO movies (id, title, title_url, tmdb_poster_path, tmdb_backdrop_path) ' +
    'VALUES ($1, $2, $3, $4, $5) RETURNING *', [newID, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`${results.rows[0]['title']} has been added to film database!`)
  })
}

const updateFilmbyID = (request, response) => {
  const id = parseInt(request.query.id);
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.query;
  pool.query(
    'UPDATE movies SET title = $2, title_url = $3, tmdb_poster_path = $4, tmdb_backdrop_path = $5 ' +
      'WHERE id = $1 RETURNING *',
    [id, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.rows[0]['title']} has been modified.`)
    }
  )
}

const updateFilmbyName = (request, response) => {
  var filmName = request.query.newTitle;
  var titleChange = request.query.altTitle;
  const { newTitleURL, newPoster, newBackdrop} = request.query;
  if (!titleChange) titleChange = filmName;
  pool.query(
    'UPDATE movies SET title = $2, title_url = $3, tmdb_poster_path = $4, tmdb_backdrop_path = $5 ' +
      'WHERE title = $1 RETURNING *',
    [filmName, titleChange, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).send(`${results.rows[0]['title']} has been modified.`)
    }
  )
}

const deleteFilmbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.rows[0]['title']} has been deleted from film database!`);
  })
}

const deleteFilmbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('DELETE FROM movies WHERE title = $1 RETURNING *', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.rows[0]['title']} has been deleted from film database!`);
  })
}

const createCritic = (request, response) => {
  const { topCritic, name, newImage, org } = request.query;
  pool.query('INSERT INTO critics (top_critic, name, img_url, organization) ' +
    'VALUES ($1, $2, $3, $4) RETURNING *', [topCritic, name, newImage, org],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`${results.rows[0]['name']} has been added to critics database!`)
  })
}

const updateCritic = (request, response) => {
  const nameCritic = request.query.name;
  var nameChange = request.query.alias;
  const { topCritic, newImage, org } = request.query;
  if (!nameChange) nameChange = nameCritic;
  pool.query(
    'UPDATE critics SET name = $2, top_critic = $3, img_url = $4, organization = $5' +
      'WHERE name = $1 RETURNING *',
    [nameCritic, nameChange, topCritic, newImage, org],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.rows[0]['name']}'s profile has been modified.`)
    }
  )
}

const deleteCritic = (request, response) => {
  const nameCritic = request.params.name;
  pool.query('DELETE FROM critics WHERE name = $1 RETURNING *', [nameCritic], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.rows[0]['name']} has been deleted.`)
  })
}

const createReview = (request, response) => {
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.query;
  pool.query('INSERT INTO critic_reviews (review_date, fresh, review_text, movie_id, critic_id, score) ' +
    'VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`New review added!`)
  })
}

const updateReview = (request, response) => {
  const reviewID = parseInt(request.query.id);
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.query;
  pool.query(
    'UPDATE critic_reviews SET review_date = $2, fresh = $3, review_text = $4, movie_id = $5, critic_id = $6, ' +
      'score = $7 WHERE id = $1 RETURNING *',
    [reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Review has been modified!`)
    }
  )
}

const deleteReview = (request, response) => {
  const reviewID = parseInt(request.params.id);
  pool.query('DELETE FROM critic_reviews WHERE id = $1 RETURNING *', [reviewID], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Review has been deleted!`)
  })
}

module.exports = {
  getMovieInfobyID,
  getMovieInfobyName,
  getCriticbyName,
  getReviewInfobyID,
  getReviewsbyID,
  getReviewsbyName,
  getTopReviewsbyName,
  getTopReviewsbyID,
  get12ReviewsbyID,
  get12ReviewsbyName,
  createFilm,
  updateFilmbyID,
  updateFilmbyName,
  deleteFilmbyID,
  deleteFilmbyName,
  createCritic,
  updateCritic,
  deleteCritic,
  createReview,
  updateReview,
  deleteReview,
}