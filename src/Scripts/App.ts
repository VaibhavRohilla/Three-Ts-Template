// App.ts
import * as THREE from 'three';
import { Camera } from './Camera';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {MainScene} from './MainScene';
import { Globals, loaderModel } from './Globals';

export class App {
    renderer!: THREE.WebGLRenderer;
    camera!: Camera;


    scene !: MainScene;
    constructor() {

        Globals.App = this;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('app') as HTMLCanvasElement,
            antialias: true 
        });
        this.camera = new Camera();
        document.body.appendChild(this.renderer.domElement)
        this.renderer.setPixelRatio( window.devicePixelRatio  ||1)
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        
    
        
        const orbital = new OrbitControls(this.camera, this.renderer.domElement);
        orbital.enableZoom = true; // Enable zoom control
        orbital.enableRotate = true; // Enable rotation control
        orbital.enablePan = true; // Enable panning control
        
        window.addEventListener('resize', () => this.onResize(), false);
        loaderModel().then(()=>{
            this.scene = new MainScene();
            Globals.Scene = this.scene;
            this.animate();
    });
}

animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.scene.update();
    this.renderer.render(this.scene, this.camera);
}

    onResize() {
        this.camera.onResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene, this.camera);
    }
    
	recievedMessage(msgType: string, msgParams: any) {
		console.log(`Message : ${msgType} : ${msgParams}`);
	}
}

