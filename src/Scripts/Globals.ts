import { Scene } from "three";
import { App } from "./App";
import {  GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ModelLinks } from "./LoaderConfig";

interface Global 
{
    resources: {[key: string]: any };
    App :App | undefined;
    Scene : Scene | undefined;
}

export const Globals : Global ={
    Scene :  undefined,
    App : undefined,
    resources : {},
}


export async function loaderModel()
{
    const loader = new GLTFLoader()
    for(let key in ModelLinks)
        {

        const Char : any =  await Promise.all([
            loader.loadAsync(ModelLinks[key]),
      ]);
     
      Globals.resources[key] = Char[0].scene;
      
    }
}
