
import { useState, useEffect } from 'react';

const Card = ({ moviesList }) => {

    return (
        <>
            
        </>
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
            <h1>Latest Movies</h1>
            <Card moviesList={moviesList} />
        </div>
    )
}

export default Movies