import * as THREE from './build/three.module.js';
import {OrbitControls} from './src/OrbitControls.js';
import { GLTFLoader } from './src/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();



renderer.setClearColor(0x000000);
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.set(0,0.35,3);


let planetOne = new THREE.Object3D();
const loaderOne = new GLTFLoader().load(
    "./assets/grayplanet.glb",
    function(gltf) {
    planetOne = gltf.scene;
    planetOne.position.set(0,0,0);
    planetOne.rotation.set(0, 0, 0); 
    planetOne.scale.set(.1, .1, .1);
    scene.add(planetOne);
    },
    undefined,
    function(error) {
    console.error(error);
    }
);

let planetTwo = new THREE.Object3D();
const loaderTwo = new GLTFLoader().load(
    "./assets/grayplanetCopy.glb",
    function(gltftwo) {
    planetTwo = gltftwo.scene;
    planetTwo.position.set(-0.9,0,.5);
    planetTwo.rotation.set(0, .6, .2); 
    planetTwo.scale.set(0.2, .2, .2);
    scene.add(planetTwo);
    },
    undefined,
    function(error) {
    console.error(error);
    }
);

const light = new THREE.DirectionalLight( 0xFFFFFF, 3.5);
light.position.set( 200, 20, 10);
scene.add(light);


const ambientLight = new THREE.AmbientLight(0xD66868, 0.5);
scene.add(ambientLight);

function animate() {
    planetOne.rotation.y += 0.005;
    planetTwo.rotation.y += 0.02;
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
   
}
animate();