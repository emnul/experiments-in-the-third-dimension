uniform float uTime;
uniform float uDistortionFrequency;
uniform float uDistortionStrength;
uniform float uDisplacementFrequency;
uniform float uDisplacementStrength;
uniform float uTimeFrequency;

varying vec3 vNormal;
varying float vPerlinStrength;

#include "lygia/generative/cnoise.glsl"


void main() {
  vec3 displacementPosition = position;
  displacementPosition += cnoise(vec4(displacementPosition * uDistortionFrequency, uTime * uTimeFrequency)) * uDistortionStrength;

  float perlinStrength = cnoise(vec4(displacementPosition * uDisplacementFrequency, uTime * uTimeFrequency)) * uDisplacementStrength;
  vec3 newPosition = position;
  newPosition += normal * perlinStrength;

  vec4 viewPosition = viewMatrix * vec4(newPosition, 1.0);

  gl_Position = projectionMatrix * viewPosition;

  vPerlinStrength = perlinStrength;
  vNormal = normal;
}
