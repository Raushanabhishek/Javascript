// Program to check Leap year or not.
const prompt = require("prompt-sync")({sigint: true});

//Initializing Value Of PI
const pi = 3.14159;

//Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes.
// Program to get the volume of a Cylinder.
class Cylinder {
    radius;
    height;
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let volume = pi * this.radius * this.radius * this.height;
        console.log(`The Volume of Cylinder of ${this.radius} radius & ${this.height} height  is ${volume.toFixed(4)}`);
    }
}
const r = prompt('Enter the Radius : ');
const h = prompt('Enter the Height : ');
const cylinderObj = new Cylinder(r,h);
cylinderObj.getVolume();

// Program to get the volume of Sphere.
class Sphere {
    radius;
    constructor(radius, height){
        this.radius = radius;
    }
    getVolume(){
        let volume = (4/3) * (pi * this.radius * this.radius * this.radius);
        console.log(`The Volume of Sphere of ${this.radius} radius is ${volume.toFixed(4)}`);
    }

}
const r1 = prompt('Enter the Radius : ');
const sphereObj = new Sphere(r1);
sphereObj.getVolume();

// Program to get the volume of Cone.
class Cone{
    radius;
    height;
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let volume = (pi * this.radius * this.radius * this.height)/3;
        console.log(`The Volume of Cone of ${this.radius} radius & ${this.height} height  is ${volume.toFixed(4)}`);
    }
}
const r2 = prompt('Enter the Radius : ');
const h2 = prompt('Enter the Height : ');
const coneObj = new Cone(r2,h2);
coneObj.getVolume();