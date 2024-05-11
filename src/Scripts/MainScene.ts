import { Scene } from "three";
import * as THREE from 'three';


export class MainScene extends Scene {
    
    constructor() {
        super();

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
        this.add(plane)
        plane.rotateX(-0.5*Math.PI);
        // const gridHelper = new THREE.GridHelper(100, 10);
        // this.add(gridHelper);
        const sphereG =  new THREE.SphereGeometry(1, 10, 10);
        const sphereM = new THREE.MeshBasicMaterial({ color: 0xFFF000});
        const sphere = new THREE.Mesh(sphereG, sphereM);
        sphere.position.x = plane.position.x+ 5;
        plane.add(sphere);
    }

    update() {
    }
}