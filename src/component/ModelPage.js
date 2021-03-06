import React from "react";
import {Leaflet} from "./leaflet";
import SketchfabEmbedding from "./SketchfabEmbedding";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {IconButton} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import "./css/ModelPage.css"

class ModelIntro extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="intro-indi">
        <p>{this.props.obj.introduction}</p>
      </div>
    );
  }

}

export default class ModelPage extends React.Component {
  constructor(props) {
    super(props);
    this.returnHomePage = this.returnHomePage.bind(this);
    //https://stackoverflow.com/questions/43304599/cannot-read-property-of-null-using-state-in-react
    //State var must be declared in constructor before use
    //If you forget to declare this, it will complain cannot read property 'isReturnTo...' of null, which is confusing as it doesn't point out the real null thing is state
    this.state = {}
  }

  componentDidMount() {
    document.title=this.props.obj.name;
  }

  returnHomePage(){
    this.setState({isReturnToHomeClicked: true})
  }

  render() {
    if (this.state.isReturnToHomeClicked){
      document.title = "Cardiff Public Art Model Repository"
      return <Redirect push to={"/"}/>;
    }

    const obj = this.props.obj;
    return (
      // component id here need to be globally unique, i.e. cannot conflict home page element.
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <ArrowBackIcon onClick={this.returnHomePage}/>
            </IconButton>
            <Typography variant="h6">
              {obj.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <ModelIntro obj={obj}/>
        <div className="sketchfab-embed-wrapper-indi">
          <SketchfabEmbedding id="sketchfab-indi" url={obj.sketchfabUrl} title={obj.name}/>
        </div>
        <div id="map-indi">
          <Leaflet id="map" coord={obj.coord}/>
        </div>
      </div>
    )
  }

}