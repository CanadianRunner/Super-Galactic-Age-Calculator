export class LifeExpectancyAverage {
  constructor(bornOnEarth, humanSpecies, sex) {
    this.bornOnEarth = bornOnEarth;
    this.humanSpecies = humanSpecies;
    this.sex = sex;
    this.lifeExpectancyAverage = 71;
  }

  calculateLifeExpectancyAverage() {
    if (this.bornOnEarth === true) {
      this.lifeExpectancyAverage += 1;
    } else {
      this.lifeExpectancyAverage -= 10;
    }
    if (this.humanSpecies == true) {
      this.lifeExpectancyAverage += 1;
    } else {
      this.lifeExpectancyAverage -= 5;
    }
    if (this.sex === "female") {
      this.lifeExpectancyAverage += 7;
    } else {
      this.lifeExpectancyAverage += 1;
    }

  }
}
