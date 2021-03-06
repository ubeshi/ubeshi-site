import {
  Vector2,
} from 'three';

const AsciiShader = () => {
  return {
    fragmentShader: `
   #include <packing>

    varying vec2 vUv;
    uniform sampler2D tLowRes;
    uniform sampler2D tDepth;
    uniform sampler2D tFont;

    uniform float cameraNear;
    uniform float cameraFar;

    uniform float fontCharTotalCount;
    uniform vec2 fontCharSize;
    uniform vec2 fontCharCount;

    uniform vec2 renderCharCount;
    uniform vec2 renderCharSize;

    float readDepth(sampler2D depthSampler, vec2 coord) {
      float fragCoordZ = texture2D(depthSampler, coord).x;
      float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
      return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
    }

    void main()
    {
      vec2 roundedUv = vec2(
        floor(vUv.x * renderCharCount.x),
        floor(vUv.y * renderCharCount.y)
      ) * renderCharSize;

      float depth = readDepth(tDepth, roundedUv);
      vec4 color = texture2D(tLowRes, roundedUv);
    
      float charIndex = depth * fontCharTotalCount;

      vec2 fontuv = vec2(
        mod(vUv.x, renderCharSize.x),
        mod(vUv.y, renderCharSize.y)
      ) * renderCharCount * fontCharSize + vec2(
        floor(mod(charIndex, fontCharCount.x)) * fontCharSize.x,
        floor(charIndex * fontCharSize.x) * fontCharSize.y
      );
      
      color.r = color.r + 0.2;
      color.g = color.g + 0.1;
      color.b = color.b + 0.3;
      gl_FragColor = texture2D(tFont, fontuv) * color;
    }
  `,
    uniforms: {
      cameraFar: {value: 1},
      cameraNear: {value: 0},
      fontCharCount: {value: new Vector2(1, 1)},
      fontCharSize: {value: new Vector2(1, 1)},
      fontCharTotalCount: {value: 0},
      renderCharCount: {value: new Vector2(1, 1)},
      renderCharSize: {value: new Vector2(1, 1)},
      tDepth: {value: null},
      tFont: {value: null},
      tLowRes: {value: null},
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  };
};

export default AsciiShader;
