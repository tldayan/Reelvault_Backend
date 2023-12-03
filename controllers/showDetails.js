const express = require("express")
const { getShowDetails } = require("../tmdb_api/tmdb_api")
const router = express.Router()


router.get("/", async(req,res) => {

    const showId = req.query.showId
    const response = await getShowDetails(showId)
    res.send(response)

})

module.exports = router

