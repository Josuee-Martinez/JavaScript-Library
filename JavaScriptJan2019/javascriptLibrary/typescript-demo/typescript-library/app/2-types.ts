
/******************
 * 01 - Declaration
 ******************/
let str: string = 'Hello World';
let jsStr = 'test';

let userId: number = 2;
let jsNumber = 2;

let isColdOut: boolean = true;
let jsBool = true;

/*****************
 * 02 - Basic Types
 *******************/
let instructors: string[] = []

let nums: number[] = [1,2,3];

let bools: boolean[] = [true, false];

//ANY

let testStr: any = 'i m=am a string';

testStr = true;

//VOID

function sayHi() : void {

}

//NULL 

//UNDF

let students: Array<string> = [];
/****************
 * 03 - Union Types
 ****************/

 let stringNumber: string | number = 'i am a astring';

 stringNumber = 2;
