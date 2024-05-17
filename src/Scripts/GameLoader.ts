import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ModelLinks, TextureLinks } from "./LoaderConfig";
import { Globals } from "./Globals";
import { TextureLoader } from "three";
// import {  GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class Loader {
    constructor()
    {
        this.loaderModel();
    }

    async  loaderModel()
    {
        // const loader = new GLTFLoader();
        const objectLoader = new  FBXLoader();
        const textureLoader = new  TextureLoader();

        for(let key in ModelLinks)
            {
                const Char : any =  await Promise.all([
                    objectLoader.loadAsync(ModelLinks[key]),
                ]);
                console.log("Loaded Object : ",Char);
                Globals.fbxResources[key] = Char[0];
            }
        for(let key in TextureLinks)
            {
                console.log("Loading Textures : ",key);
                
                const texture = await textureLoader.load(TextureLinks[key],()=>{});
                console.log("Loaded Textures : ",texture);
                Globals.textureResources[key] = texture;
            }
            
            console.log(Globals.textureResources,Globals.fbxResources);
            
        }
    }
