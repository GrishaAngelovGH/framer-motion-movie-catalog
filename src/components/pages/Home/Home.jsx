import Layout from "components/Layout"
import Header from "components/Header"
import MovieProvider from "components/MovieProvider"
import MovieCatalog from "components/pages/Home/MovieCatalog"

const Home = () => (
  <Layout header={<Header />}>
    <MovieProvider>
      <MovieCatalog />
    </MovieProvider>
  </Layout>
)

export default Home