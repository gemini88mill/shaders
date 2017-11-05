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

//var box;
function addBox(frag, vert, posX, posY, name)
{
    //var mat = new THREE.MeshLambertMaterial({color:0xff00ff});
    var mat = shaderMaterial(frag, vert);
    var geo = new THREE.BoxGeometry( 2, 2, 2 );
    box = new THREE.Mesh( geo, mat );

    box.position.x = posX;
    box.position.y = posY;
    box.name = name;

    scene.add( box );
}


function addSphere(frag, vert, posX, posY, name){
    var geometry = new THREE.SphereGeometry( 1.5, 16, 16 );
    var material = customMat(frag, vert);
    sphere = new THREE.Mesh( geometry, material );

    sphere.position.x = posX;
    sphere.position.y = posY;
    sphere.name = name;

    scene.add( sphere );
}


