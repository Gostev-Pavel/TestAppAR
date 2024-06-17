import * as THREE from 'three';
import { DragControls } from 'three/addons/controls/DragControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x8000FF } );
const cube = new THREE.Mesh( geometry, material );
let objects = [cube];
const controls = new DragControls( objects, camera, renderer.domElement );
scene.add( cube );
camera.position.z = 5;
controls.addEventListener( 'drag', function ( event ) {
	event.object.material.emissive.set( 0x00FF80 );

} );
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();