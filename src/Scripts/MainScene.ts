import { Scene } from "three";
import * as THREE from 'three';
import { Globals } from "./Globals";

export class MainScene extends Scene {
     clock :  THREE.Clock;
     mixer: THREE.AnimationMixer;

     player : THREE.Object3D;
    constructor() {
        super();

        this.clock = new THREE.Clock()
        // Add lights to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff);
        this.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(10, 10, 20).normalize();
        this.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 5, 1);
        pointLight.position.set(10, 10, 20); // Set the position of the light
        this.add(pointLight);

        const planeG  = new THREE.PlaneGeometry(10,10);
        const planeM = new THREE.MeshBasicMaterial({ color: 0xFFFFFF});
        
        const plane =  new THREE.Mesh(planeG, planeM);
        this.add(plane);
        plane.rotateX(-0.5*Math.PI);

        const sphereG =  new THREE.SphereGeometry(1.2, 100, 100);
        const sphereM = new THREE.MeshBasicMaterial({ color: 0xFFF000});
        const sphere = new THREE.Mesh(sphereG, sphereM);
        this.add(sphere);
        sphereM.wireframe = true;

        this.player = Globals.resources.Angry;
        console.log(this.player);
        this.player.scale.set(0.01,0.01,0.01)

        this.mixer = new THREE.AnimationMixer(this.player)
        this.mixer.clipAction(this.player.animations[0]).play();
        
        this.add(this.player);
    }

    update() {
  
        this.mixer.update(this.clock.getDelta())

    }
}