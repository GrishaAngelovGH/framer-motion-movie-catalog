import LayoutPage from "components/pages/LayoutPage"
import MovieProvider from "components/MovieProvider"
import MovieCatalog from "components/pages/Home/MovieCatalog"

const Home = () => (
  <LayoutPage>
    <MovieProvider>
      <MovieCatalog />
    </MovieProvider>
  </LayoutPage>
)

export default Home