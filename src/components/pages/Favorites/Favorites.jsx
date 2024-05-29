import Header from "components/Header"
import Layout from "components/Layout"
import MovieProvider from "components/MovieProvider"
import FavoriteMovies from "./FavoriteMovies"

const Favorites = () => (
  <Layout header={<Header />}>
    <MovieProvider>
      <FavoriteMovies />
    </MovieProvider>
  </Layout>
)

export default Favorites