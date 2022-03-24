/**
 * Vector.ts
 * Exports a class representing basic implementation of the Vector for Classical Mechanics applications.
 */

type VectorArray = Array<number>;

export default class Vector{
    components: VectorArray;

    constructor(components: VectorArray){
        this.components = components;
    }

    calcModule(){
        const squared_components = this.components.map((component)=>{
            return component**2;
        });
        const squared_components_sum = squared_components.reduce((a,b)=>{
            return a+b;
        });
        return Math.sqrt(squared_components_sum);
    }

}