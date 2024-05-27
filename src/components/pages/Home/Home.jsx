import Layout from "components/Layout"

const Home = () => (
  <Layout header={<div className="bg-blue-500 h-full">Header</div>}>
    <div className="bg-blue-300 h-full">Content</div>
  </Layout>
)

export default Home