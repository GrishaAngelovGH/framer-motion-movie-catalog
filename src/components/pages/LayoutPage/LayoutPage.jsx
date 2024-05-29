import Layout from "components/Layout"
import Header from "components/Header"

const LayoutPage = ({ children }) => (
  <Layout header={<Header />}>
    {children}
  </Layout>
)

export default LayoutPage
