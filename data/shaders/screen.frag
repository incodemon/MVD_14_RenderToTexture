#version 330

in vec2 v_uv;
uniform sampler2D u_screen_texture;
out vec4 fragColor;

void main(){
vec3 color = texture(u_screen_texture,v_uv).xyz;
	fragColor = vec4(color,1.0);

}