function loadShader(shadertype)
{
    return document.getElementById(shadertype).textContent;
}

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

// // now populate the array of attributes
// //var vertices = sphere.geometry.vertices;
// var values = attributes.displacement.value;
// for(var v = 0; v < vertices.length; v++) {
//     values.push(Math.random() * 2);
// }


// create the material and now
// include the attributes property
function shaderMaterial(frag, vert) {
    return new THREE.ShaderMaterial({
        uniforms: uniforms,
        attributes: attributes,
        vertexShader: loadShader(vert),
        fragmentShader: loadShader(frag)
    })
}




var timeUniform = { time: { type: 'f', value: 0.0 } };
var textureUniform = { op: {type: 'i', value: 0}, tDiffuse: {type: "t", value: THREE.ImageUtils.loadTexture('assets/images/earth.jpg') } };
//var texture2Uniform = { time: {type: 'f', value: 0}, tDiffuse: {type: "t", value: THREE.ImageUtils.loadTexture('images/background.png') } };



function customMat(fragName, vertName){
    var frag = loadShader(fragName);
    var vert = loadShader(vertName);
    return new THREE.ShaderMaterial({
        uniforms: uniforms,
        attributes: attributes,
        vertexShader: vert,
        fragmentShader: frag
    })
}