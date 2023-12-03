const express = require("express")
const {getShowReviews} = require("../tmdb_api/tmdb_api")
const router = express.Router()


router.get("/", async(req,res) => {

    const showId = req.query.showId
    const response = await getShowReviews(showId)
    res.send(response)

})

module.exports = router
