export class MarsLifeExpectancy {
  constructor (ageOnEarth) {
    this.ageOnEarth = ageOnEarth;
    this.ageOnMars = 0;
    this.marsYear = 1.88;
    this.surpassedExpect = 0;
  }
  
  marsAgeCalc () {
    this.ageOnMars = Math.round(this.ageOnEarth / this.marsYear);
  }
   surpassedLifeExpectancy(LifeExpectancyAverage) {
    this.differenceInAge = LifeExpectancyAverage - this.ageOnMars;
  }

}
