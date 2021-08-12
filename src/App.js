import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Leaflet} from "./leaflet";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(folder,name, fbxUrl, photosUrl, coord) {
  return { folder, name, fbxUrl, photosUrl };
}

const rows = [
  createData('skeleton',
    "Monument for Diverse Ethnic and Commonwealth People In War",
    "https://drive.google.com/file/d/1LNMuZXiT8NdX2J66xm80QdM64ZkXIm9_/view?usp=sharing",
    "#",
    ""),
  createData('skeleton2',
    'Drinking Fountain',
    "https://drive.google.com/file/d/1v5fbbISKRjkV5ZrtvZSmvoDCnhAFP8Fr/view?usp=sharing",
    "#"),
];

function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">model (.fbx)</TableCell>
            <TableCell align="right">original photos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell><img src={'./models/'+row.folder+'/image.jpg'} width="75" height="100"/></TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right"><a href={row.fbxUrl}>Download</a></TableCell>
              <TableCell align="right"><a href={row.photosUrl}>Download</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedModelChanged = this.handleSelectedModelChanged.bind(this);
    this.state = {selectedModel: 0};
  }

  handleSelectedModelChanged(selectedModel) {
    this.setState({selectedModel: selectedModel});
    console.log(selectedModel + "is selected");
  }

  render() {

    return (
      <div className="App">
        <h1>Cardiff Public Art Model Repository - Under Construction </h1>
        <p>This site displays 3D models created during the Cardiff University summer project Computational Culture Heritage. These models are reconstructed from photos with Meshroom and Autodesk Recap. All the model meshes and original photos are available to download.
        </p>
        <BasicTable/>
        <Leaflet coord={[51.505, -0.2]}/>
      </div>
    );
  }
}

export default App;