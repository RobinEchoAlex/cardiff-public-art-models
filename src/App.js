import './App.css';
import ReactDOM from 'react-dom'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Environment, OrbitControls} from "@react-three/drei";
import {ModelList} from "./ModelList"

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
  if (modelInfos.length!==0) return;

  for (let i=0; i<modelNames.length;i++) {
    let modelName = modelNames[i];
    let path = './models/'+ modelName +'/introduction.txt'
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

function Scene() {
  const gltf = useLoader(GLTFLoader, './models/skeleton/scene.gltf')
  return (
    <Suspense fallback={sceneFallBack}>
      <OrbitControls/>
      <primitive object={gltf.scene} scale={0.5}/>
      <Environment preset="sunset" background/>
    </Suspense>
  )
}

const Model = (props) => {
  let path = './models/'+ props.name +'/scene.gltf'
  const gltf = useLoader(GLTFLoader, path);
  return (
    <>
      <primitive object={gltf.scene} scale={0.8}/>
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


function App() {
  return (
    <div className="App">
      <ModelList/>
      <div className="Canvas">
        <Canvas>
          <Suspense fallback={null}>
            <Model name="skeleton"/>
            <OrbitControls/>
            <Environment preset="sunset" background/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
//<img src={fountain_img} className="model-image" height="500" width="400"/>
