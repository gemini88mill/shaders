var uniforms = {
    amplitude: {
        type: 'f', // a float
        value: 0
    }
};

var attributes = {
    displacement: {
        type: 'f', // a float
        value: [] // an empty array
    }
};

var box;
function addBox(frag, vert, posX, posY)
{
    //var mat = new THREE.MeshLambertMaterial({color:0xff00ff});
    var mat = shaderMaterial(frag, vert);
    var geo = new THREE.BoxGeometry( 2, 2, 2 );
    box = new THREE.Mesh( geo, mat );

    box.position.x = posX;
    box.position.y = posY;

    scene.add( box );
}

var sphere;
function addSphere(){
    var geometry = new THREE.SphereGeometry( 1.5, 16, 16 );
    var material = customMat('fragment', 'vertex');
    var sphere = new THREE.Mesh( geometry, material );

    sphere.position.x = 2;
    sphere.position.y = 2;

    scene.add( sphere );
}


