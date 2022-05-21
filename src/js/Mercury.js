export class MercuryLifeExpectancy {
  constructor (ageOnEarth) {
    this.ageOnEarth = ageOnEarth;
    this.ageOnMercury = 0;
    this.mercuryYear = 1.88;
    this.surpassedExpect = 0;
  }
  
  mercuryAgeCalc () {
    this.ageOnMercury = Math.round(this.ageOnEarth / this.mercuryYear);
  }
   surpassedLifeExpectancy(LifeExpectancyAverage) {
    this.differenceInAge = LifeExpectancyAverage - this.ageOnMercury;
  }

}
