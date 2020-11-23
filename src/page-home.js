import React from "react";
import Buscador from "./components/buscador.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import PageCard from "./page-cards.js";
class PageHome extends React.Component {
  // state = {};
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Buscador
          // onChange={this.handleChange}
          // busqueda={this.state.busqueda}
          />
          <PageCard />
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default PageHome;
