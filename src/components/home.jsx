import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <h1>Home</h1>
           
            <Link to="/movies">Movies</Link>
        </>
    )
}

export default Home