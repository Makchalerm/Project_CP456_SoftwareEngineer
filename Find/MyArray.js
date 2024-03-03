const { format } = require("express/lib/response");

class MyArray {

  // Create constructor
  constructor() {

    // It store the length of array.
    this.length = 0;

    // Object to store elements.
    this.data = {};
  }

  push(element) {
    console.time("push");
    this.data[this.length] = element;
    this.length++;
    console.timeEnd("push");
    return this.data;
  }

  pop() {

    return this.data;
  }

  size() {
    return this.length;
  }

  getMax() {
    console.time("getMax");
    let index1 = 0;
    let elementMax = this.data[0].wage;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].wage > elementMax) {
        elementMax = this.data[i].wage;
        index1 = i;
      }

    }
    console.timeEnd("getMax");
    return this.data[index1];
  }

  getMin() {
    console.time("getMin");
    let index = 0;
    let elementMin = this.data[0].wage;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].wage < elementMin) {
        elementMin = this.data[i].wage;
        index =i;
      }

    }
    console.timeEnd("getMin");
    return this.data[index];
  }
 

  getCountTeacher() {
    console.time("getCountTeacher");
    let numberA = 0;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].job == 'teacher') {
        numberA += 1;

      }
   
    }
    console.timeEnd("getCountTeacher");
    return numberA;
  }
  getCountDancer() {
    console.time("getCountDancer");
    let numberB = 0;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].job == 'dancer') {
        numberB += 1;

      }
      

    }
    console.timeEnd("getCountDancer");
    return numberB;
  }
  getCountSinger() {
    console.time("getCountSinger");
    let numberC = 0;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].job == 'singer') {
        numberC += 1;

      }
    
    }
    console.timeEnd("getCountSinger");
    return numberC;
  }
  getCountDoctor() {
    console.time("getCountDoctor");
    let numberD = 0;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].job == 'doctor') {
        numberD += 1;

      }
    
    }
    console.timeEnd("getCountDoctor");
    return numberD;
  }


  getCountActor() {
    console.time("getCountActor");
    let numberE = 0;
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].job == 'actor') {
        numberE += 1;

      }
    }
    console.timeEnd("getCountActor");
    return numberE;
  }

  getAvg(){
    console.time("getCountAvg");
    let numAvg = 0;
    let qty = 0;
    for(let i = 0; i< this.size(); i++){
      numAvg += this.data[i].wage;
      qty+=1;
    }
    numAvg = numAvg / qty;
    console.timeEnd("getCountAvg");
    return numAvg;
  }
    }


module.exports = MyArray;