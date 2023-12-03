const express = require("express")
const {getMovieReviews} = require("../tmdb_api/tmdb_api")
const router = express.Router()


router.get("/", async(req,res) => {

    const movieId = req.query.movieId
    const response = await getMovieReviews(movieId)
    res.send(response)

})

module.exports = router
