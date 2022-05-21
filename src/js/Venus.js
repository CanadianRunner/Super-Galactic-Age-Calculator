export class VenusLifeExpectancy {
  constructor (ageOnEarth) {
    this.ageOnEarth = ageOnEarth;
    this.ageOnVenus = 0;
    this.venusYear = 0.62;
    this.surpassedExpect = 0;
  }
  
  venusAgeCalc () {
    this.ageOnVenus = Math.round(this.ageOnEarth / this.venusYear);
  }
   surpassedLifeExpectancy(LifeExpectancyAverage) {
    this.differenceInAge = Math.abs(LifeExpectancyAverage - this.ageOnVenus);
    
  }

}
