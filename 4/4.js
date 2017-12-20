'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

function start(){
  let lines = input.split('\n');
  let linearray;

  let count = 0;

  for(let a = 0; a< lines.length; a++){
    linearray = lines[a].split(' ');
    for(let i = 0; i< linearray.length; i++){
      for(let j = 0; j< linearray.length; j++){
        if(linearray[i] === linearray[j] && i !== j){
          count = count+1;
          i=linearray.length;
        }
      }
    }
  }
  console.log(lines.length-count);
}

start();
