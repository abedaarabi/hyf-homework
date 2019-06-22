// console.log(movieList());
const movie = movieList();

const shortTitel = movie.filter(movie => movie.title <= 10);
const logTitle = movie.filter(movie => movie.title > 10);
const countMovie = movie.filter(
  movie => movie.year >= 1980 && movie.year <= 1989
);
const movieRating = movie.map(movie => {
  let tag;
  if (movie.rating >= 7) {
    tag = "Good!";
  } else if (movie.rating >= 4) {
    tag = "Average!";
  } else {
    tag = "Bad";
  }
  movie.tag = tag;
  return movie;
});
const movieMOreThanSix = movie
  .filter(movie => movie.rating > 6)
  .map(movie => movie.rating);

const countTheTitel = movie.filter(
  movie =>
    movie.title.search("Surfer") != -1 ||
    movie.title.search("Alien") != -1 ||
    movie.title.search("Benjamin") != -1
);


// Find Duplicate 
function findDuplicate(string) {
    const words = string.split(' ')
    let foundDuplicate = false
    words.forEach((word, index) => {
      //console.log(word, index)
      const newWords = words.concat()
      newWords.splice(index, 1)
      if (newWords.includes(word)) foundDuplicate = true
    });
    return foundDuplicate;
}
const movieDuplicated = movie.filter(movie => findDuplicate(movie.title) )

console.log(movieDuplicated);



// console.log(countTheTitel);

// console.log('the movies more than 6 are: ' , movieMOreThanSix)

// console.log(movieRating);
// //countMovie.forEach(m => console.log(m.year))
// movieRating.forEach(m => console.log(m.tag))

