import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import "./leaflet.css"

//https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat
//https://github.com/PaulLeCam/react-leaflet/issues/453
export class Leaflet extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    let coord = this.props.coord
    console.log(coord)
    return(
      <MapContainer center={coord} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}