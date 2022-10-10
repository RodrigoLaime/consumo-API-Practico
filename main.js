async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;/* obtenemos la propiedad de results de data que tiene las peliculas */
    console.log({data, movies});
}
getTrendingMoviesPreview();