import Header from "../UI/Header";



const MainLayout = (props) => {
  return (
    <>
      <Header />
      <section className="content-cotnainer">
        {props.children}
      </section>
    </>
  )
}


export default MainLayout;