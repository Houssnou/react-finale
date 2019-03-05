import React, { Component } from "react";
import Mapbox from './components/mapbox';
import Fullmapbox from './components/mapboxhtml'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron bg-dark text-light my-2 p-1">
          <p className="leader">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam suscipit voluptatibus atque dolorum tempora id dolorem vel incidunt natus, molestias ullam aut odit quas. Ut ducimus illo quas quo!
        </p>
        </div>

        <Fullmapbox/>
      </div>
    );
  }
}

export default App;
