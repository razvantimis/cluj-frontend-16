import { BASE_URL_SERVER } from "../../shared/api.js";
console.log(BASE_URL_SERVER);

class Movie {
  constructor(Title, imdbRating, Poster, _id) {
    this.Title = Title;
    this.imdbRating = imdbRating;
    this.Poster = Poster;
    this.movieDOM = document.createElement("div");
  }

  renderMovies() {
    //const movieDOM = document.createElement("div");
    // this.movieDOM.addEventListener("click", redirectMovieDetails);

    //styled each div for the movies here
    this.movieDOM.style.backgroundColor = "white";
    this.movieDOM.style.width = "50px";
    this.movieDOM.style.width = "250px";
    this.movieDOM.style.margin = "20px";
    this.movieDOM.style.wordWrap = "break-word";

    this.movieDOM.innerHTML = `
            <h4>${this.Title}</h4>
            <p>${this.imdbRating}<p>
            <img src="${this.Poster}" style="width: 170px; height: 250px;"></img>`;

    return this.movieDOM;

  }

}

/*const redirectMovieDetails = () => {
  window.location.href = `../movieDetails/movieDetails.html?id=${this._id}`;
}*/

async function getMovies() {
  const response = await fetch(BASE_URL_SERVER);
  return response.json();
}

const moviesContainer = document.querySelector("#moviesContainer");

//styled the movie continer here
moviesContainer.style.display = "flex";
moviesContainer.style.flexDirection = "row";
moviesContainer.style.flexWrap = "wrap";
moviesContainer.style.textAlign = "center";
moviesContainer.style.justifyContent = "center";

// function displayMoviesInHTML() {
//   getMovies()
//     .then((movies) => {
//       console.log(movies);

//       movies.results.forEach((movie) => {
//         const movieDOM = new Movie(
//           movie.Title,
//           movie.imdbRating,
//           movie.Poster
//         ).renderMovies();

//         moviesContainer.appendChild(movieDOM);
//       });
//     })
//     .catch((e) => {
//       console.log(e);
//       movieContainer.innerHTML = "Server Error";
//     });
// }
// displayMoviesInHTML();

//without closure
// function redirectMovieDetails(movieId) {
//   window.location.href = `../movieDetails/movieDetails.html?id=${movieId}`
// }
//with closure
function redirectMovieDetailsV2(movieId) {
  const url = '../movieDetails/movieDetails.html';
  console.log(movieId);
  //closure:
  return function (event) {
    window.location.href = `${url}?id=${movieId}`
    console.log(event)
  }
}
async function displayMoviesInHTMLv2() {
  try {
    const movies = await getMovies();
    console.log(movies);

    movies.results.forEach((movie) => {
      const movieDOM = new Movie(
        movie.Title,
        movie.imdbRating,
        movie.Poster,
      ).renderMovies();

      // function redirectMovieDetails() {
      //   window.location.href = `../movieDetails/movieDetails.html?id=${movie._id}`
      // }

      //v1
      // movieDOM.addEventListener("click", function () { redirectMovieDetails(movie._id) });
      //v2
      // const callback = redirectMovieDetailsV2(movie._id);
      // movieDOM.addEventListener("click", callback);
      //v3 = v2
      movieDOM.addEventListener("click", redirectMovieDetailsV2(movie._id));

      moviesContainer.appendChild(movieDOM);
    });
  }
  catch (e) {
    console.log(e);
    moviesContainer.innerHTML = "Server Error";
  };
}
displayMoviesInHTMLv2();

//slideshow
// function slideshows() {
//   (now = movieDivs.filter(":visible")),
//     (next = now.next().length ? now.next() : moviesContainer.first()),
//     (speed = 1000);

//   now.fadeOut(speed);
//   next.fadeIn(speed);
// }

// setInterval(slideshows, 1400);
//function redirectMovieDetails() {
 // window.location.href = `../movieDetails/movieDetails.html?id=${movie._id}`}