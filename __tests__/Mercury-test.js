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
    userLifeExpectancy.calculateLifeExpectancyAverage();
    mercuryUser.surpassedLifeExpectancy(userLifeExpectancy.lifeExpectancyAverage);
    expect(mercuryUser.differenceInAge).toEqual(30);
  })
});