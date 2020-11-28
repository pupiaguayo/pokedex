import React from "react";
import "./page-result.css";
import Buscador from "./components/buscador.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import CardResult from "./cards-result.js";
class PageResult extends React.Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let eleccion = this.props.history.location.search.substr(1);
    this.setState({
      busqueda: eleccion,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      let nuevo = this.props.history.location.search.substr(1);
      this.setState({
        busqueda: nuevo,
      });
    }
  }
  handleChange = (e) => {
    this.props.history.push("/resultado?" + this.state.busqueda.toLowerCase());
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Buscador />
          <CardResult busqueda={this.state.busqueda} />
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default PageResult;
