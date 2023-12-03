const express = require("express")
const {getGenreMovies} = require("../tmdb_api/tmdb_api")
const router = express.Router()


router.get("/", async(req,res) => {

    const genre = req.query.genre

    const [data1,data2] = await Promise.all([getGenreMovies(1,genre),getGenreMovies(2,genre)])

    const data = [...data1,...data2]

    res.send(data)

})

module.exports = router