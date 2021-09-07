import React from "react";

export default class SketchfabEmbedding extends React.Component {
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
      <iframe id={this.props.id} title={this.props.title} frameBorder="0" allowFullScreen mozallowfullscreen="true"
              webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true"
              execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
              src={this.props.url}></iframe>
    )
  }
}