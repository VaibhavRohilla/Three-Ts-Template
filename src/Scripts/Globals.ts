import { PerspectiveCamera, Scene } from "three";
import { App } from "./App";
// import {  GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {  FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import { ModelLinks } from "./LoaderConfig";

interface Global 
{
    resources: {[key: string]: any };
    App :App | undefined;
    Camera : PerspectiveCamera | undefined;
    Scene : Scene | undefined;
}

export const Globals : Global ={
    Scene :  undefined,
    App : undefined,
    Camera : undefined,
    resources : {},
}


export async function loaderModel()
{
    // const loader = new GLTFLoader();
    const loader = new  FBXLoader();
    for(let key in ModelLinks)
        {
            
            const Char : any =  await Promise.all([
                loader.loadAsync(ModelLinks[key]),
      ]);
      console.log(Char);
      
      Globals.resources[key] = Char[0];
      console.log(Globals.resources);
      
      
    }
}
