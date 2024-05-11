import { Scene } from "three";
import { App } from "./App";

interface Global 
{
    resources: any;
    App :App | undefined;
    scene : Scene | undefined;
}

export const Globals : Global ={
    scene :  undefined,
    App : undefined,
    resources : {}

}