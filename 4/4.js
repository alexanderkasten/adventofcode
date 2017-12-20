'use strict';

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

let count = 0;
let lines = input.split('\n');

function part1(){
  let linearray;

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
  part2();
}

function part2(){
  let linearray;

  count = 0;
  
  for(let a = 0; a< lines.length; a++){
    linearray = lines[a].split(' ');
    for(let i = 0; i< linearray.length; i++){
      for(let j = 0; j< linearray.length; j++){
        let sortedI = sortAlphabets(linearray[i]);
        let sortedJ = sortAlphabets(linearray[j]);
        if(sortedI === sortedJ && i !== j){
          count = count+1;
          i=linearray.length;
        }
      }
    }
  }
  console.log(lines.length-count);
}

var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

part1();
