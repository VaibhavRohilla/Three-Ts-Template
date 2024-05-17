import { PerspectiveCamera, Scene } from "three";
import { App } from "./App";

interface Global 
{
    fbxResources: {[key: string]: any };
    textureResources: {[key: string]: any};
    App :App | undefined;
    Camera : PerspectiveCamera | undefined;
    Scene : Scene | undefined;
}

export const Globals : Global ={
    Scene :  undefined,
    App : undefined,
    Camera : undefined,
    fbxResources : {},
    textureResources : {},
}



