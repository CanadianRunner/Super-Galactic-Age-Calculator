
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
    let jupiterExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(jupiterUser.jupiterYear);
    jupiterUser.surpassedLifeExpectancy(jupiterExpectedAge);
    expect(jupiterUser.differenceInAge).toEqual(3);
  });
  test('If the user inputs a number exceeding the life expectancy, it should return a postive number.', () => {
    let jupiterUser = new JupiterLifeExpectancy(90);
    jupiterUser.jupiterAgeCalc(); 
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let jupiterExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(jupiterUser.jupiterYear) 
    jupiterUser.surpassedLifeExpectancy(jupiterExpectedAge);
    expect(jupiterUser.differenceInAge).toEqual(1);
  });
});