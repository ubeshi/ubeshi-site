import React, {
  PureComponent,
} from 'react';
import {
  Scene, PerspectiveCamera, PointLight,
  WebGLRenderer, Group, AnimationMixer,
  Clock, TextureLoader, NearestFilter, Vector2,
  WebGLRenderTarget, DepthTexture, UnsignedShortType,
} from 'three';
import {
  GLTFLoader,
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
  EffectComposer,
} from 'three/examples/jsm/postprocessing/EffectComposer';
import {
  RenderPass,
} from 'three/examples/jsm/postprocessing/RenderPass';
import {
  ShaderPass,
} from 'three/examples/jsm/postprocessing/ShaderPass';
import fontFile from '../../../assets/font2.png';
import modelFile from '../../../assets/ubeshi.glb';
import AsciiShader from './shaders/AsciiShader';

class ThreeJS extends PureComponent {
  constructor (props) {
    super(props);

    this.init = this.init.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.resizeRenderer = this.resizeRenderer.bind(this);
    this.stop = this.stop.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.resizeCanvasToDisplaySize = this.resizeCanvasToDisplaySize.bind(this);
    this.getLowResSize = this.getLowResSize.bind(this);
    this.updateAsciiRenderSize = this.updateAsciiRenderSize.bind(this);

    this.container = null;
    this.backLight = null;
    this.ambientLight = null;
    this.mainScene = null;
    this.mainCamera = null;
    this.fillLight = null;
    this.keyLight = null;
    this.renderer = null;
    this.loader = null;
    this.modelContainer = null;
    this.clock = null;
    this.requestId = null;
    this.finalComposer = null;

    this.mixer = null;
    this.action = null;
    this.asciiPass = null;
    this.lowResRenderTarget = null;
    this.fontMapSize = null;
    this.fontCharSize = null;
  }

  componentDidMount () {
    setTimeout(() => {
      this.init();
    }, 1000);
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.mousemove);
    window.removeEventListener('resize', this.resizeRenderer);
    this.container.removeChild(this.renderer.domElement);
    this.stop();

    this.modelContainer = null;
    this.mixer = null;
    this.loader = null;
    this.scene = null;
    this.camera = null;
    this.composer = null;
    this.renderer = null;
  }

  resizeCanvasToDisplaySize () {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      this.renderer.setSize(width, height, false);
      this.mainCamera.aspect = width / height;
      this.mainCamera.updateProjectionMatrix();
    }
  }

  // Create Scene + Camera
  init () {
    this.container = document.createElement('div');
    this.mount.appendChild(this.container);
    this.mainScene = new Scene();

    this.mainCamera = new PerspectiveCamera(
      45,
      2,
      1,
      1000,
    );
    this.mainCamera.position.z = 12.1;
    this.mainCamera.position.x = 0.1;
    this.mainCamera.position.y = 0.1;

    // Add Point Lights
    this.backLight = new PointLight(0xff8180, 3, 20);
    this.backLight.position.set(-5, 5, 3);
    this.mainScene.add(this.backLight);

    this.fillLight = new PointLight(0xbdaec5, 0.7, 20);
    this.fillLight.position.set(1, 0, 5);
    this.mainScene.add(this.fillLight);

    this.keyLight = new PointLight(0xbdaec5, 2, 20);
    this.keyLight.position.set(5, 0, 0);
    this.mainScene.add(this.keyLight);

    // Create Renderer
    this.renderer = new WebGLRenderer({alpha: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.devicePixelRatio > 1) {
      this.renderer.setPixelRatio(window.devicePixelRatio);
    }
    this.container.appendChild(this.renderer.domElement);

    // Load 3D Model
    this.loader = new GLTFLoader();
    this.modelContainer = new Group();
    this.modelContainer.layers.enable(this.OCCLUSION_LAYER);

    this.mainScene.add(this.modelContainer);

    this.loader.load(
      modelFile,
      (gltf) => {
        this.modelContainer.add(gltf.scene);
        this.mixer = new AnimationMixer(gltf.scene);
        this.action = this.mixer.clipAction(gltf.animations[0]);
        this.action.play();
      },
      undefined,
      () => {},
    );

    this.finalComposer = new EffectComposer(this.renderer);

    // Load font texture for render pass
    const fontLoader = new TextureLoader();
    const tFont = fontLoader.load(fontFile);
    tFont.minFilter = NearestFilter;
    tFont.magFilter = NearestFilter;

    // Calculate render target and setup first pass
    this.fontMapSize = new Vector2(64, 64);
    this.fontCharSize = new Vector2(8, 8);
    const startingSizeData = this.getLowResSize();

    // Should match whatever was set in updateAsciiRenderSize
    this.lowResRenderTarget = new WebGLRenderTarget(
      startingSizeData.charCountCeil[0] * 2,
      startingSizeData.charCountCeil[1] * 2,
    );

    const lowResDepthTexture = new DepthTexture();
    lowResDepthTexture.type = UnsignedShortType;
    this.lowResRenderTarget.depthTexture = lowResDepthTexture;

    this.asciiPass = new ShaderPass(AsciiShader());
    this.asciiPass.uniforms.tLowRes.value = this.lowResRenderTarget.texture;
    this.asciiPass.uniforms.tDepth.value = lowResDepthTexture;
    this.asciiPass.uniforms.cameraNear.value = 5;
    this.asciiPass.uniforms.cameraFar.value = 18;
    this.asciiPass.uniforms.tFont.value = tFont;

    // Precalculate render values
    const fontCountX = this.fontMapSize.x / this.fontCharSize.x;
    const fontCountY = this.fontMapSize.y / this.fontCharSize.y;

    this.asciiPass.uniforms.fontCharTotalCount.value =
      Math.floor(fontCountX) * Math.floor(fontCountY);
    this.asciiPass.uniforms.fontCharSize.value.set(1 / fontCountX, 1 / fontCountY);
    this.asciiPass.uniforms.fontCharCount.value.set(fontCountX, fontCountY);
    this.updateAsciiRenderSize();

    this.finalComposer.addPass(this.asciiPass);
    // this.finalComposer.addPass(new RenderPass(this.mainScene, this.mainCamera));

    this.clock = new Clock();
    this.modelContainer.rotation.x = Math.PI / 12;
    this.modelContainer.rotation.y = -Math.PI / 3;
    this.modelContainer.rotation.z = Math.PI / 12;

    window.addEventListener('mousemove', this.mousemove);
    window.addEventListener('resize', this.resizeRenderer);

    this.renderScene();
  }

  mousemove (event) {
    if (this.lightCone) {
      this.lightCone.position.x = 5 * (event.clientX / window.innerWidth * 2 - 1);
      this.backLight.position.x = this.lightCone.position.x;
    }
    this.modelContainer.rotation.x = Math.PI / 6 + 0.0001 * event.clientY * 24;
    this.modelContainer.rotation.y = Math.PI / 2 + 0.0001 * event.clientX * 12;
  }

  // Handle Window Resize
  resizeRenderer () {
    this.mainCamera.aspect = window.innerWidth / window.innerHeight;
    this.mainCamera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Render Scene
  renderScene () {
    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }
    this.resizeCanvasToDisplaySize();

    this.modelContainer.rotation.z += 0.005;

    this.renderer.setRenderTarget(this.lowResRenderTarget);
    this.renderer.render(this.mainScene, this.mainCamera);
    this.renderer.setRenderTarget(null);

    this.finalComposer.render();
    this.requestId = requestAnimationFrame(this.renderScene);
  }

  updateAsciiRenderSize () {
    const size = this.getLowResSize();

    this.asciiPass.uniforms.renderCharSize.value.set(
      1 / size.charCountPrecise[0],
      1 / size.charCountPrecise[1],
    );

    this.asciiPass.uniforms.renderCharCount.value.set(
      size.charCountPrecise[0],
      size.charCountPrecise[1],
    );

    // This affects the level of detail. The higher the ratio is
    // (times mutliplier) the bigger each render block will be, and
    // the sharper the shape / less detailed each block will be.
    this.lowResRenderTarget.setSize(
      size.charCountCeil[0] * 5,
      size.charCountCeil[1] * 5,
    );
  }

  getLowResSize () {
    const charCountPrecise = [
      window.innerWidth / this.fontCharSize.x,
      window.innerHeight / this.fontCharSize.y,
    ];

    const charCountCeil = charCountPrecise.map(Math.ceil);

    return {
      charCountCeil,
      charCountPrecise,
    };
  }

  stop () {
    this.action.stop();
    cancelAnimationFrame(this.requestId);
    this.requestId = undefined;
  }

  render () {
    return (
      <div ref={(ref) => {
        this.mount = ref;
      }} />
    );
  }
}

export default ThreeJS;
