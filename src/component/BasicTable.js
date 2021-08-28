import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {rows} from './Data'

class TableCellText extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const url = this.props.url;
    const text = this.props.text;
    if (url === null || url === ""){
      return(
        "Not available yet"
      )
    }else {
      return(
        <>
          <a href={url}>Download</a>
          <br/>
          <text>{text}</text>
        </>
      )
    }
  }
}

export default class BasicTable extends React.Component {
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
                      <TableCell align="right"><TableCellText url={row.fbxUrl}/></TableCell>
                      <TableCell align="right"><TableCellText url={row.photosUrl} text={row.photoUrlText}/></TableCell>
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