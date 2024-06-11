import LayoutPage from "components/pages/LayoutPage"
import MovieProvider from "components/providers/MovieProvider"
import MovieCatalog from "components/pages/Home/MovieCatalog"

const Home = () => (
  <LayoutPage>
    <MovieProvider>
      <MovieCatalog />
    </MovieProvider>
  </LayoutPage>
)

export default Home