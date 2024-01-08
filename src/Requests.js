const key = "24ab5a59ed1ad9745e01d982ce5ba8bd"

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestDrama: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=18`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestReality: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10764`,
    requestKids: `https://api.themoviedb.org/3/movie/kids?api_key=${key}&language=en-US&page=1&include_adult=false`,
    requestActionAdventure: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10759`
};

  export default requests