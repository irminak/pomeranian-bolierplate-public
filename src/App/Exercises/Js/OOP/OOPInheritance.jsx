import React from 'react';

export const OOPInheritance = () => {
  class Person {
    constructor(name) {
      this.name = name;
    }
    introduce() {
      console.log(`I am a Person and my name is ${this.name}`);
    }
  }
  const person1 = new Person('Janusz');
  console.log(person1.introduce());

  class Builder extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a builder');
    }
  }
  const person2 = new Builder('Grazyna');
  console.log(person2.introduce());

  class Doctor extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a doctor');
    }
  }
  const person3 = new Doctor('Marek');
  console.log(person3.introduce());

  class Pediatrician extends Doctor {
    introduce() {
      console.log(`I am a Pediatrician and my name is ${this.name}`);
    }
  }
  const person4 = new Pediatrician('Parycja');
  console.log(person4.introduce());

  return <div>OOPInheritance</div>;
};
