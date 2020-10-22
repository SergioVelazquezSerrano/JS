

function load(){
    var scene = new THREE.Scene();

    var geometry = new THREE.CubeGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false});
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );



}





window.onload = load;