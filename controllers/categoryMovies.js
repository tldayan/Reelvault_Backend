const express = require("express")
const router = express.Router()

const {getMovies} = require("../tmdb_api/tmdb_api")


router.get("/", async(req,res) => {
    
  const category = req.query.category  


    const [data1, data2, data3, data4, data5] = await Promise.all([
        getMovies(1, category),
        getMovies(2, category),
        getMovies(3, category),
        getMovies(4, category),
        getMovies(5, category)
      ]);

      const Data = [...data1, ...data2, ...data3, ...data4, ...data5]

      res.send(Data)

})

module.exports = router