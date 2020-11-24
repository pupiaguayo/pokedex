import React from "react";
import Buscador from "./components/buscador.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import PageCard from "./page-cards.js";
class PageHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Buscador />
          <PageCard />
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default PageHome;
