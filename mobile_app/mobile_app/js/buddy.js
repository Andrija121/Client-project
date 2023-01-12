import { GLTFLoader } from "./GLTFLoader.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  125,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

var obj;

loader.load("./js/tiger/scene.gltf", function (gltf) {
  obj = gltf.scene;
  scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xffffff);
let light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(light);
camera.position.set(0, 2, 2);

function animate() {
  requestAnimationFrame(animate);
  //obj.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();
