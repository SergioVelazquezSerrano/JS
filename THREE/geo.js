

function load(){
    var scene = new THREE.Scene();

    var geometry = new THREE.CubeGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false});
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100);


    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(new THREE.Color(0xFF0000, 1.0));
    document.body.appendChild( renderer.domElement );

    render.render(escena, camara);
}





window.onload = load;