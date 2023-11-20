#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec3 vNormal;

void main() {

  vec3 color = vec3(1., 0., 0.);


	gl_FragColor = vec4(vNormal,1.0);
}