export class LifeExpectancyAverage {
  constructor(bornOnEarth, humanSpecies, gender) {
    this.bornOnEarth = bornOnEarth;
    this.humanSpecies = humanSpecies;
    this.gender = gender;
    this.LifeExpectancyAverage = 72;
  }

  calculateLifeExpectancyAverage() {
    if(this.bornOnEarth === true) {
      this.lifeExpectancyAverage += 1;
    } else {
      this.lifeExpectancyAverage -= 10;
    }
  }
}