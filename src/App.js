import './App.css';
import React, {useMemo, useRef} from 'react';
import ReactDOM from 'react-dom'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Environment, OrbitControls} from "@react-three/drei";
import {ModelList} from "./ModelList"
import scene from "three/examples/jsm/offscreen/scene";

var modelNames = ["skeleton", "skeleton2"]
var modelInfos = []

function readAllModels() {
  // const fs = require('fs')
  //
  //
  //   fs.readdirSync("./models").forEach(function (modelFolder){
  //     fs.readFile("introduction.txt",'utf8',((err, data) => {
  //         console.log(data);
  //     }))
  //   })

  // for (let modelName in modelNames) {
  //   const reader = new FileReader();
  //   reader.onload = async (e)=>{
  //     const text = e.target.result
  //     console.log(text)
  //     alert(text)
  //   }
  //   reader.readAsText(new File("./models/skeleton/introduction.txt"));
  if (modelInfos.length !== 0) return;

  for (let i = 0; i < modelNames.length; i++) {
    let modelName = modelNames[i];
    let path = './models/' + modelName + '/introduction.txt'
    console.log(path)
    fetch(path)
      .then((r) => r.text())
      .then(text => {
        console.log(text);
      })
  }

}

function sceneFallBack() {
  console.log("scene fall back")
}

//
// function Scene() {
//   const gltf = useLoader(GLTFLoader, './models/skeleton/scene.gltf')
//   return (
//     <Suspense fallback={sceneFallBack}>
//       <OrbitControls/>
//       <primitive object={gltf.scene} scale={0.5}/>
//       <Environment preset="sunset" background/>
//     </Suspense>
//   )
// }

const Model = (props) => {

  return (
    <>

    </>
  );
};

// const ModelList = (props) => {
//   return (
//     <div>
//       <p> skeleton </p>
//       <p> skeleton2 </p>
//     </div>
//   )
// }

function ModelCanvas(props){
  let path = './models/'+modelNames[props.selectedModel] + '/scene.gltf';
  return (
      <Canvas>
        <Suspense fallback={null}>
          <Box url={path}/>
          <OrbitControls/>
          <Environment preset="sunset" background/>
        </Suspense>
      </Canvas>
    )

}

function Box({ url }) {
  const { scene } = useLoader(GLTFLoader, url);
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  return <primitive object={copiedScene} />;
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
        <ModelList selectedModel={this.state.selectedModel} onSelectedModelChange={this.handleSelectedModelChanged}/>
        <div className="Canvas">
          <ModelCanvas selectedModel={this.state.selectedModel}/>
        </div>
      </div>
    );
  }
}

export default App;
//<img src={fountain_img} className="model-image" height="500" width="400"/>
