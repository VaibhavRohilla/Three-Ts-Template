import {  PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
    
    constructor() {
        super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        this.position.z = 4;
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
        this.position.y = 10;

    }

    onResize()
    {
        console.log();
        
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
    }
}