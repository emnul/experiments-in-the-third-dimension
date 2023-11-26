#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec3 vNormal;
varying float vPerlinStrength;


void main() {

  vec3 color = vec3(1., 0., 0.);

  float temp = vPerlinStrength + 0.05;
  temp *= 2.0;
	gl_FragColor = vec4(vec3(temp),1.0);
}