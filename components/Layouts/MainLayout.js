import Header from "../UI/Header";



const MainLayout = (props) => {
  return (
    <div style={{ background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)', minHeight: '100vh' }}>
      <Header />
      <section className="content-cotnainer">
        {props.children}
      </section>
    </div>
  )
}

// 5. Create Side Nav @0:38sec
export default MainLayout;