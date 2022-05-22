import { LifeExpectancyAverage } from "../src/js/LifeExpectancy";
import { MercuryLifeExpectancy } from "../src/js/Mercury";

describe('MecuryLifeExpectancy', () => {

  test('It should correctly return the users age in Mercury years.  A Mercury year is .24 Earth Years', () => {
    let mercuryUser = new MercuryLifeExpectancy(36);
    mercuryUser.mercuryAgeCalc();
    expect(mercuryUser.ageOnMercury).toEqual(150);
  });
  test('It should find the difference between the users life expectancy and Mercury age.', () => {
    let mercuryUser = new MercuryLifeExpectancy(12);
    mercuryUser.mercuryAgeCalc();
    
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let mercuryExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(mercuryUser.mercuryYear);
    mercuryUser.surpassedLifeExpectancy(mercuryExpectedAge);
    expect(mercuryUser.differenceInAge).toEqual(283);
  });
  test('If the user inputs a number exceeding the life expectancy, it should return a postive number.', () => {
    let mercuryUser = new MercuryLifeExpectancy(90);
    mercuryUser.mercuryAgeCalc(); 
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let mercuryExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(mercuryUser.mercuryYear) 
    mercuryUser.surpassedLifeExpectancy(mercuryExpectedAge);
    expect(mercuryUser.differenceInAge).toEqual(42);
  });
});