import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaG91c3Nub3UiLCJhIjoiY2pzb3Y1MzFjMHF2NDQzbXJiZnFyYXJxYyJ9.4Hxx99nq1-FphHd_fNljag"
});

class Mapbox extends Component {
  state = {}

  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "75vh",
          width: "72vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    )
  }
}




export default Mapbox;