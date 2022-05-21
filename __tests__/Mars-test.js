import { LifeExpectancyAverage } from "../src/js/LifeExpectancy";
import { JupiterLifeExpectancy } from "../src/js/Jupiter";

describe('JupiterLifeExpectancy', () => {

  test('It should correctly return the users age in Jupiter years.  A Jupiter year is 11.86 Earth Years', () => {
    let jupiterUser = new JupiterLifeExpectancy(36);
    jupiterUser.jupiterAgeCalc();
    expect(jupiterUser.ageOnJupiter).toEqual(3);
  });
  test('It should find the difference between the users life expectancy and Jupiter age.', () => {
    let jupiterUser = new JupiterLifeExpectancy(48);
    jupiterUser.jupiterAgeCalc();
    
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    userLifeExpectancy.calculateLifeExpectancyAverage();
    jupiterUser.surpassedLifeExpectancy(userLifeExpectancy.lifeExpectancyAverage);
    expect(jupiterUser.differenceInAge).toEqual(76);
  })
});