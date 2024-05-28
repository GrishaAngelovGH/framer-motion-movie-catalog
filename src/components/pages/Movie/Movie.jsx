import Layout from "components/Layout"
import Header from "components/Header"

const Movie = ({ id }) => {
  return (
    <Layout header={<Header />}>
      <div className="bg-blue-800 min-h-full">
        <h1>Movie: {id}</h1>
      </div>
    </Layout>
  )
}

export default Movie