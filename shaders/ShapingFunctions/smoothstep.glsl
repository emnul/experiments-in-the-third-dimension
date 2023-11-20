#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;


float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    // Change origin to middle of screen
    vec2 st = (gl_FragCoord.xy - .5 * uResolution)/uResolution;

    // Start forking out at values in the range 0-0.5
    // Remember, range for x and y values are -.5 - .5
    float fork = smoothstep(0.,.5,st.y);

    float forkWidth = 0.1;

    // Smooth interpolation between 0.1 and 0.9
    float y = smoothstep(
      // Use mix to dial in the end of the fork
      mix(0.05, 0.01,fork),
      0.0,
      // Use abs to get two edges for the price of 1
      abs(
        // Another abs to get 4 edges
        abs(st.x) - fork * forkWidth));
    vec3 color = vec3(y);

    // float pct = plot(st,y);
    // color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}