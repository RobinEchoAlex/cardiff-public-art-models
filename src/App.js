import React from 'react';
import {rows} from './component/Data'
import BasicTable from './component/BasicTable'
import SketchfabEmbedding from './component/SketchfabEmbedding'
import {Leaflet} from "./component/leaflet";
import "./App.css"
import MediaQuery from 'react-responsive'

const LaptopLayout = (props) => {
  const handleSelectedModelChanged = props.handleSelectedModelChanged
  const obj = props.obj

  return (
    <div className="app">
      <h1 id="title">Cardiff Public Art Model Repository</h1>
      <p id="intro">This site displays 3D models created during the Cardiff University summer project Computational
        Culture Heritage. These models are reconstructed from photos with Meshroom and Autodesk Recap. All the model
        meshes and original photos are available to download.
      </p>
      <div id="table">
        <BasicTable onSelectedModelChanged={handleSelectedModelChanged}/>
      </div>
      <div id="map">
        <Leaflet id="map" coord={obj.coord}/>
      </div>
      <div className="sketchfab-embed-wrapper">
        <SketchfabEmbedding url={obj.sketchfabUrl} title={obj.name}/>
      </div>
      <footer id = "footer">
        <hr/>
        <p>For all the works displayed on this website and are covered by the freedom of panorama, they are released under CC BY-SA 4.0.
          For all other works, the are intended for non-commercial research and study under the fair dealing terms.
        </p>
      </footer>
    </div>
  )
}

const MobileLayout = (props) => {
  const handleSelectedModelChanged = props.handleSelectedModelChanged
  const obj = props.obj

  return (
    <div className="app-mobile">
      <h1 id="title">Cardiff Public Art Model Repository - Site Under Construction </h1>
      <p id="intro">This site displays 3D models created during the Cardiff University summer project Computational
        Culture Heritage. These models are reconstructed from photos with Meshroom and Autodesk Recap. All the model
        meshes and original photos are available to download.
      </p>
      <div id="table-mobile">
        <BasicTable onSelectedModelChanged={handleSelectedModelChanged}/>
      </div>
      <div className="sketchfab-embed-wrapper-mobile">
        <SketchfabEmbedding url={obj.sketchfabUrl} title={obj.name}/>
      </div>
      <div id="map-mobile">
        <Leaflet id="map" coord={obj.coord} text={obj.name}/>
      </div>
      <footer id="footer-mobile">
        <p>For all the works displayed on this website and are covered by the freedom of panorama, they are released under CC BY-SA 4.0.
          For all other works, the are intended for non-commercial research and study under the fair dealing terms.
        </p>
      </footer>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedModelChanged = this.handleSelectedModelChanged.bind(this);
    this.getObj = this.getObj.bind(this);
    this.state = {
      selectedModel: "Memorial to Diverse Ethnic and Commonwealth People In War",
    };
  }

  handleSelectedModelChanged(selectedModel) {
    this.setState({selectedModel: selectedModel});
  }

  getObj() {//TODO map rather than array
    return rows.find(obj => {
      return obj.name === this.state.selectedModel
    })
  }

  render() {
    let obj = this.getObj();
    return (
      <MediaQuery minWidth={826}>
        {
          (matches) => matches ? <LaptopLayout obj={obj} handleSelectedModelChanged={this.handleSelectedModelChanged}/>
            : <MobileLayout obj={obj} handleSelectedModelChanged={this.handleSelectedModelChanged}/>
        }
      </MediaQuery>
    );
  }
}

export default App;