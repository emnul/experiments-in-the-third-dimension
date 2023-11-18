#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

void main() {
  // Normalize pixel location
  vec2 st = gl_FragCoord.xy/uResolution;
  // mouseCoords range from -1, 1, convert to 0, 1
  vec2 mouseCoord = (uMouse + 1.) / 2.;
  gl_FragColor = vec4(
    (sin(mouseCoord.x + uTime * PI) + 1.) / 2.,
    (sin(mouseCoord.y + uTime * QTR_PI) + 1.) / 2.,
    (sin(uTime * HALF_PI) + 1.) / 2.,
    1.0);
}