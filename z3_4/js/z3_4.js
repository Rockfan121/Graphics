//DOKOŃCZYĆ - NIE SKONCZYLAM Z LADOWANIEM TEKSTUR (JAKO TABLICE MATERIALS)
var camera;
var scene;
var render;
var mesh;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,
    1, 1000); //vertical field, aspect, near plane, far plane

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0,1,1).normalize();
  scene.add(light);

  var geometry = new THREE.CubeGeometry(10,10,10);
  var material1 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/crate.jpg')});
  var material2 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/brick.jpg')});
  var material3 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/clouds.jpg')});
  var material4 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/stone-wall.jpg')});
  var material5 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/water.jpg')});
  var material6 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('img/wood-floor.jpg')});

  var materials = [material1, material2, material3, material4, material5, material6];



  mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -50;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  render();
}
function animate() {
  mesh.rotation.x += .05;
  mesh.rotation.y += .05;
  render();
  requestAnimationFrame(animate);
}
function render() {
  renderer.render(scene, camera);
}