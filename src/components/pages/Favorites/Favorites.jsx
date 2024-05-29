import LayoutPage from "components/pages/LayoutPage"
import MovieProvider from "components/MovieProvider"
import FavoriteMovies from "./FavoriteMovies"

const Favorites = () => (
  <LayoutPage>
    <MovieProvider>
      <FavoriteMovies />
    </MovieProvider>
  </LayoutPage>
)

export default Favorites