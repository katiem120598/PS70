// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

// Default uniforms in 'Book of Shaders' (platform-specific)
uniform vec2 u_resolution;   // screen size in pixels
uniform vec2 u_mouse;		 // mouse location (XY) and click (ZW) in pixels
uniform float u_time;		 // elapsed program time in seconds

// Main fragment function
void main() {
    // Compute the gray value in relation to one of the dimensions
    float gray = 0.5 * (sin(gl_FragCoord.x / 10.0) + 1.0);
    
    // Add alpha by composing a vec4 using a vec3 and a float
    vec4 pixelColor = vec4(gray, gray, gray, 1.0);
    
    // Set the RGBA color of this pixel
    // by assigning a vec4 value to the built-in `gl_FragColor` variable
    gl_FragColor = pixelColor;
}