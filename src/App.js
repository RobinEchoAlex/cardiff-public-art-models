import fountain_img from './img/drinking_fountain.jpg';
import './App.css';
import ReactDOM from 'react-dom'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from "@react-three/drei";


function sceneFallBack(){
  console.log("scene fall back")
}

function Scene() {
  const gltf = useLoader(GLTFLoader, './skeleton/scene.gltf')
  return (
    <Suspense fallback={sceneFallBack}>
      <OrbitControls />
      <primitive object={gltf.scene} scale={0.5}/>
      <Environment preset="sunset" background />
    </Suspense>
  )
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./skeleton/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.8} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <div className="Canvas">
        <Canvas>
          <Suspense fallback={null}>
            <Model/>
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
