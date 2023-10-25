import React from 'react';

export const OOPComposition = () => {
  const GPSsay = ['turn right', 'turn left', 'drive straight'];
  const index = Math.floor(Math.random() * GPSsay.length);

  class Engine {
    start() {
      console.log('Engine is turned on');
    }
    stop() {
      console.log('Engine is turned off');
    }
  }
  class Klaxon {
    beep() {
      console.log('BEEEP!');
    }
  }
  class SteeringWheel {
    turn(direction) {
      console.log(`Skręcamy w ${direction}`);
    }
  }
  class GPS {
    navigate() {
      console.log(GPSsay[index]);
    }
  }
  class Car {
    constructor(engine, klaxon, steeringWheel, gps) {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }
    startCar() {
      this.engine.start();
    }
    stopCar() {
      this.engine.stop();
    }
    beepHorn() {
      this.klaxon.beep();
    }
    turnSteeringWheel(direction) {
      this.steeringWheel.turn(direction);
    }
    navigateGPS() {
      this.gps.navigate();
    }
  }

  const myCar = new Car();
  console.log(myCar.beepHorn());

  const myCar2 = new Car();
  console.log(myCar2.navigateGPS());

  const myDirection = new SteeringWheel();
  console.log(myDirection.turn('lewo'));

  const myCar3 = new Car();
  console.log(myCar3.turnSteeringWheel('lewo'));

  return <div>OOPComposition</div>;
};
