const Layout = ({ header, children }) => (
  <div className="flex flex-col h-screen">
    <div className="lg:h-[60px]">{header}</div>
    <div className="h-full">{children}</div>
  </div>
)

export default Layout