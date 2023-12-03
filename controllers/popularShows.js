const express = require("express");
const router = express.Router()

const { getShows } = require("../tmdb_api/tmdb_api");

router.get("/", async(req,res) => {
    const [data1, data2, data3, data4, data5, data6, data7, data8, data9] = await Promise.all([
        getShows(1), getShows(2), getShows(3), getShows(4),
        getShows(5), getShows(6), getShows(7), getShows(8),
        getShows(9)
      ]);
    
      const showsData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9];
    
      res.send(showsData);
})

module.exports = router