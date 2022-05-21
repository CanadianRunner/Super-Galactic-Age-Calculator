export class MercuryLifeExpectancy {
  constructor (ageOnEarth) {
    this.ageOnEarth = ageOnEarth;
    this.ageOnMercury = 0;
    this.mercuryYear = 0.24;
    this.surpassedExpect = 0;
  }
  
  mercuryAgeCalc () {
    this.ageOnMercury = Math.round(this.ageOnEarth / this.mercuryYear);
  }
  surpassedLifeExpectancy(LifeExpectancyAverage) {
    this.differenceInAge = Math.round(Math.abs(LifeExpectancyAverage - this.ageOnMercury));
    
  }

}
