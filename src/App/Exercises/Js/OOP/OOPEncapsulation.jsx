import React from 'react';

export const OOPEncapsulation = () => {
  class Computer {
    #faveWord;
    constructor() {
      this.#faveWord = 'I compute!';
    }
    #add(x, y) {
      return x + y;
    }
    compute(x, y, num) {
      return this.#add(x, y) * num;
    }
    introduce() {
      console.log(this.#faveWord);
    }
  }

  const computer1 = new Computer();
  console.log(computer1);
  const computer2 = new Computer(1, 2);
  console.log(computer2);

  const computer3 = new Computer();
  console.log(computer3.compute(1, 2, 2));

  const computer4 = new Computer();
  console.log(computer4.introduce());

  return <div>OOPEncapsulation</div>;
};
