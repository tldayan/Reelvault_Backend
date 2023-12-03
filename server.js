const express = require("express");
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3300;

const popularShowsRouter = require("./controllers/popularShows");
const categoryMoviesRouter = require("./controllers/categoryMovies")
const genreMoviesRouter = require("./controllers/genreMovies")
const movieReviewsRouter = require("./controllers/movieReviews")
const showReviewsRouter = require("./controllers/showReviews")
const showDetailsRouter = require("./controllers/showDetails")
const movieDetailsRouter = require("./controllers/movieDetails")

app.use(cors(corsOptions))

app.use("/popularShows", popularShowsRouter);
app.use("/categoryMovies", categoryMoviesRouter);
app.use("/genreMovies", genreMoviesRouter);
app.use("/movieReviews", movieReviewsRouter);
app.use("/showReviews", showReviewsRouter);
app.use("/showDetails", showDetailsRouter);
app.use("/movieDetails", movieDetailsRouter);



app.get("/test", (req,res) => {
    res.json("server is online")
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))



