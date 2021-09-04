import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {rows} from './Data'
import {withStyles} from "@material-ui/core";

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
  },
}))(TableCell);

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
      <TableContainer component={Paper} style={{ maxHeight: "100%" }}>
        <Table className={"table"} aria-label="simple table" stickyHeader>
          <TableHead style={{color:"floralwhite"}}>
            <TableRow>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">model (.fbx)</StyledTableCell>
              <StyledTableCell align="right">original photos</StyledTableCell>
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
                      <TableCell><img src={'./models/' + row.folder + '/image.jpg'} width="75" height="100" alt=""/></TableCell>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right"><TableCellText url={row.fbxUrl} text={row.fbxUrlText}/></TableCell>
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