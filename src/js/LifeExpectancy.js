export class LifeExpectancyAverage {
  constructor(bornOnEarth, humanSpecies, sex) {
    this.bornOnEarth = bornOnEarth;
    this.humanSpecies = humanSpecies;
    this.sex = sex;
    this.lifeExpectancyAverage = this.calculateLifeExpectancyAverage(71);
  }
  
  calculateLifeExpectancyAverage(initialAge) {
    if (this.bornOnEarth === true) {
      initialAge += 1;
    } else {
      initialAge -= 10;
    }
    if (this.humanSpecies == true) {
      initialAge += 1;
    } else {
      initialAge -= 5;
    }
    if (this.sex === "female") {
      initialAge += 7;
    } else {
      initialAge += 1;
    }

    return initialAge;

  }

  calcExpectedAgePerPlanet(planetNum){
    return  this.lifeExpectancyAverage / planetNum;
  }

}
