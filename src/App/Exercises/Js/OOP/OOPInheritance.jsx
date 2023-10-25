import React from 'react';

export const OOPInheritance = () => {
  class Person {
    introduce() {
      return `I am a Person`;
    }
  }
  const person1 = new Person();
  console.log(person1.introduce());

  class Builder extends Person {
    introduce() {
      return `${super.introduce()}  I am also a Builder`;
    }
  }
  const person2 = new Builder();
  console.log(person2.introduce());

  class Doctor extends Person {
    introduce() {
      return `${super.introduce()}  I am also a Doctor`;
    }
  }
  const person3 = new Doctor();
  console.log(person3.introduce());

  class Pediatrician extends Doctor {
    introduce() {
      return `I am also a Pediatician`;
    }
  }
  const person4 = new Pediatrician();
  console.log(person4.introduce());

  return <div>OOPInheritance</div>;
};
