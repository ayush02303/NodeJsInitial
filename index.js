const mongoose = require('mongoose');

main().catch(err => console.log("Connection error:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log("Database connected successfully!");

  const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    score: Number, 
    rating: String
  });

  const Movie = mongoose.model('Movie', movieSchema);

  const data = await Movie.insertMany([
    { title: "Amadeus", year: 1997, score: 9.2, rating: "R" },
    { title: "Interstellar", year: 2014, score: 9.0, rating: "PG-13" },
    { title: "Inception", year: 2010, score: 8.8, rating: "PG-13" },
    { title: "The Dark Knight", year: 2008, score: 9.0, rating: "PG-13" }
  ]);

  console.log("It worked!");
  console.log(data);
}
