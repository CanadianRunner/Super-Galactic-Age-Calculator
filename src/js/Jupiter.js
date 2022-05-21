export class JupiterLifeExpectancy {
  constructor (ageOnEarth) {
    this.ageOnEarth = ageOnEarth;
    this.ageOnJupiter = 0;
    this.jupiterYear = 11.86;
    this.surpassedExpect = 0;
  }
  
  jupiterAgeCalc () {
    this.ageOnJupiter = Math.round(this.ageOnEarth / this.jupiterYear);
  }
   surpassedLifeExpectancy(LifeExpectancyAverage) {
    this.differenceInAge = LifeExpectancyAverage - this.ageOnJupiter;
  }

}
