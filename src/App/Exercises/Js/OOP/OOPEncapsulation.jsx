import React from 'react';

export const OOPEncapsulation = () => {
  class Computer {
    #faveWord;
    constructor(x, y, num) {
      this.x = x;
      this.y = y;

      this.#faveWord = 'I compute!';
    }
    #add(x, y) {
      return x + y;
    }
    compute(num) {
      return this.#add(this.x, this.y) * num;
    }
    introduce() {
      console.log(this.#faveWord);
    }
  }

  const computer1 = new Computer();
  console.log(computer1);
  const computer2 = new Computer(1, 2);
  console.log(computer2);

  const computer3 = new Computer(1, 2);
  console.log(computer3.compute(2));

  const computer4 = new Computer();
  console.log(computer4.introduce());

  return <div>OOPEncapsulation</div>;
};
