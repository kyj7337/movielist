import React, { Component } from "react";
import Axios from "axios";
import SpinContainer from "../Components/SpinContainer";
import MovieCard from "../Components/MovieCard";
class Main extends Component {
  state = { waiting: true, data: null };
  componentDidMount() {
    this._api();
  }
  _api = async () => {
    let api = await Axios.get("https://yts.mx/api/v2/list_movies.json");
    if (api) {
      this.setState({ waiting: false, data: api.data.data });
    }
  };
  render() {
    const { data, waiting } = this.state;
    console.log(this.state);
    if (waiting) {
      return <SpinContainer />;
    } else
      return (
        <div>
          {data.movies.map((item, idx) => (
            <MovieCard data={item} key={item.id} />
          ))}
        </div>
      );
  }
}

export default Main;
