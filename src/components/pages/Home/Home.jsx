import Layout from "components/Layout"
import Header from "components/Header"
import MovieCatalog from "components/pages/Home/MovieCatalog"

const Home = () => (
  <Layout header={<Header />}>
    <MovieCatalog />
  </Layout>
)

export default Home