import LayoutPage from "components/pages/LayoutPage"
import MovieProvider from "components/providers/MovieProvider"
import FavoriteMovies from "./FavoriteMovies"

const Favorites = () => (
  <LayoutPage>
    <MovieProvider>
      <FavoriteMovies />
    </MovieProvider>
  </LayoutPage>
)

export default Favorites