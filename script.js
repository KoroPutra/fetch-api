let movieData = [];

const getMovieData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=iron&apikey=3b7d4f6c`
    );
    movieData = await response.json();
    console.log(movieData);
    renderCardContainer();
  } catch (error) {
    console.error(error);
  }
};

const renderCardContainer = () => {
  const cardContainer = document.querySelector(".card-container");

  cardContainer.innerHTML = movieData.Search.map((data) => {
    return `
      <div class="card">
        <img src="${data.Poster}" alt="film" class="film-thumbnail" />
        <span class="film-title">${data.Title}</span>
        <p class="film-description">${data.Year}</p>
        <div class="button-container">
          <button class="button watch-button">Watch</button>
          <button class="button detail-button">Detail</button>
        </div>
      </div>
    `;
  }).join("");
};

getMovieData();
