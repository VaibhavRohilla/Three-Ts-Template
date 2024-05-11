 // Adjust the import path as necessary

 import { Loader, FontLoader } from "three";
import { Globals } from "./Globas";

class LoaderManager {
    private loader: Loader;
    private resources: { [key: string]: any }; // Adjust the type as necessary

    constructor() {
        this.loader = new Loader();
        this.resources = {}; // Initialize your resources object
    }

    async preload() {
        return new Promise(resolve => {
        // Preload resources
        for (const key in this.resources) {
          const res =  this.loader.load(key,this.onLoad) 
                Globals.resources = res;
    
                const fontArray: any[] = [];
                const fontData = ['FontName1', 'FontName2']; // Example font names, adjust as necessary
    
                fontData.forEach((fontName: string) => {
                    fontArray.push(new FontLoader (fontName).load());
                });
    
                if (fontArray.length === 0) {
                    resolve(0);
                } else {
                    Promise.all(fontArray).then(() => {
                        resolve(0);
                    });
                }
            ;
        }

        // Load resources asynchronously
        
}
)}
onLoad()
{

}
}