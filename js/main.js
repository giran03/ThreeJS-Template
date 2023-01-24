import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { RectAreaLightHelper } from './RectAreaLightHelper.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );

scene.background = new THREE.Color( 0x525252 );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ⚙️ S E T T I N G S ⚙️
let wireframeStatus = false; // set to 'true' to enable wireframe. 'true'|'false'
let enableGridHelper = false; // set to 'true' to enable grid helper. 'true'|'false'
let enableLightHelper = false; // set to 'true' to enable light helper. 'true'|'false'
let enableTextures = true; // set to 'true' to enable textures. 'true'|'false'

// 🕶️ S H D A D O W S 🕶️
renderer.shadowMap.enabled = true; // set to 'true' to enable shadows. 'true'|'false'
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 📝 V A R I A B L E S 📝
let rotateNinetyDeg = Math.PI*0.5; // used for 90 degrees rotation.


// 🕳️ T E X T U R E S 🕳️
if (enableTextures == true)
{
    // Insert Code
}

// 💡 L I G H T S 💡


// 🕶️⚙️ S H A D O W  P R O P E R T I E S ⚙️🕶️
// change light to desired light
// Light.shadow.mapSize.width = 512;
// Light.shadow.mapSize.height = 512;

// 🫂 H E L P E R 🫂
const gridHelper = new THREE.GridHelper( 15, 15 );
if (enableGridHelper == true)
    scene.add( gridHelper );

if (enableLightHelper == true)
{
    // insert code
}

// 📷 C A M E R A  P O S I T I O N  &  L O O K  A T 📷
// update values on desired cords
// camera.position.set( 0,0,0 );
// camera.lookAt(0, 0, 0);
// controls.update();

function animate() {
	requestAnimationFrame( animate );

    controls.update();
    
renderer.render( scene, camera );
}
animate();