import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Leaflet} from "./leaflet";
import "./App.css"
import MediaQuery from 'react-responsive'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(folder, name, fbxUrl, photosUrl, photoUrlText, coord, sketchfabUrl) {
  return {folder, name, fbxUrl, photosUrl, photoUrlText, coord, sketchfabUrl};
}

const rows = [
  createData('skeleton',
    "Memorial to Diverse Ethnic and Commonwealth People In War",
    "https://drive.google.com/file/d/1LNMuZXiT8NdX2J66xm80QdM64ZkXIm9_/view?usp=sharing",
    "https://dubox.com/s/1VnGIEdoklHLI7NNVEAWeJA ",
    '2hzm',
    [51.485999751019435, -3.1802259356889366],
    "https://sketchfab.com/models/ca05b951486840cda1a45e7a890128f9/embed"),
  createData('skeleton2',
    'Drinking Fountain',
    "https://drive.google.com/file/d/1v5fbbISKRjkV5ZrtvZSmvoDCnhAFP8Fr/view?usp=sharing",
    "https://dubox.com/s/1MASqbt5wlH7pJmiUOToYzw",
    '5vux',
    [51.48374634245954, -3.1782340219244305],
    "https://sketchfab.com/models/a24b2438e3674b3b8c334d136dc89126/embed"),
  createData('magistrates',
    'Magistrate Court',
    "https://drive.google.com/file/d/1-q6LwWB1VO4VjxMqtHlYMdinxTKZPByG/view?usp=sharing",
    "https://dubox.com/s/1DvC2F4VCx8Zj3cGj8XaQZQ",
    'xgrs',
    [51.48152690383384, -3.1663288597426518]),
  createData('girl',
    'Girl',
    '',
    'https://dubox.com/s/1CXHVuStqZRE8HWiU6ho2IA',
    'd439',
    [51.485165905517405, -3.1768937541292517])
];

class BasicTable extends React.Component {
  //const classes = useStyles();
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.state = ({
      selected: "Memorial to Diverse Ethnic and Commonwealth People In War"
    })
  }

  handleClick(event, name) {
    this.props.onSelectedModelChanged(name);
    this.setState({selected: name})
  };

  isSelected(name) {
    return name === this.state.selected;
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className={"table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">model (.fbx)</TableCell>
              <TableCell align="right">original photos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {//https://stackoverflow.com/questions/52313755/material-ui-table-how-to-make-cells-selectable
              rows.map((row) => {
                  const isSelected = this.isSelected(row.name);
                  return (
                    <TableRow key={row.name} hover={true} selected={isSelected} onClick={(e) => {
                      this.handleClick(e, row.name)
                    }}>
                      <TableCell><img src={'./models/' + row.folder + '/image.jpg'} width="75" height="100"/></TableCell>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right"><a href={row.fbxUrl}>Download</a></TableCell>
                      <TableCell align="right"><a href={row.photosUrl}>Download</a><br/>{row.photoUrlText}</TableCell>
                    </TableRow>
                  )
                }
              )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

class SketchfabEmbedding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.title == null || this.props.url == null) return (
      <iframe title="Drinking Fountain" frameBorder="0" allowFullScreen mozallowfullscreen="true"
              webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true"
              execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
              src="https://sketchfab.com/models/a24b2438e3674b3b8c334d136dc89126/embed"></iframe>
    )
    else return (
      <iframe title={this.props.title} frameBorder="0" allowFullScreen mozallowfullscreen="true"
              webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true"
              execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
              src={this.props.url}></iframe>
    )
  }
}

const LaptopLayout = (props) => {
  const handleSelectedModelChanged = props.handleSelectedModelChanged
  const obj = props.obj

  return (
    <div className="app">
      <h1 id="title">Cardiff Public Art Model Repository - Site Under Construction </h1>
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
        <Leaflet id="map" coord={obj.coord}/>
      </div>
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