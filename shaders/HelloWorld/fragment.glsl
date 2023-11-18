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

void main() {
  gl_FragColor = vec4(abs(sin(uTime / 2. + HALF_PI)), abs(sin(uTime / 4. )), abs(sin(uTime + PI)), 1.0);
}