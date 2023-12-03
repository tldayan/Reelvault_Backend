const express = require("express")
const { fetchMovieData } = require("../tmdb_api/tmdb_api")
const router = express.Router()



router.get("/", async(req,res) => {

    const movieId = req.query.movieId
    const response = await fetchMovieData(movieId)

    res.send(response)
})

module.exports = router