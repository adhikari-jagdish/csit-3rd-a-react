import './movies.css';
import { useState, useEffect } from 'react';

const Card = ({ movies }) => {
    if (movies.length === 0) {
        return (
            <>
                <h1>No movies found</h1>
            </>
        )
    }
    return (
        <div className='movie-container'>
            {movies.map((movie, index) => {

                return (
                    <div className='movie-card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className='movie-poster'
                        />
                        <div className='movie-details'>
                            <h2 className='movie-title'>{movie.title}</h2>
                            <p className='movie-release'>{movie.release_date}</p>
                            <p className='movie-overview'>{movie.overview}</p>
                            <p className='movie-rating'>{movie.vote_average}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const Movies = () => {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0');
                const data = await response.json();
                setMoviesList(data.results);

            } catch (e) {
                console.log("Error fetching data from the api");
            }
        }

        fetchMovies();

    }, []);
    return (
        <div>
            <h1>Latest Movies {moviesList.length}</h1>
            <Card movies={moviesList} />
        </div>
    )
}

export default Movies