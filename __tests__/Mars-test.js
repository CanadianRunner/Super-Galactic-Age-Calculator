import { LifeExpectancyAverage } from "../src/js/LifeExpectancy";
import { MarsLifeExpectancy } from "../src/js/Mars";

describe('MarsLifeExpectancy', () => {

  test('It should correctly return the users age in Martian years.  A Martian year is 1.88 Earth Years', () => {
    let marsUser = new MarsLifeExpectancy(36);
    marsUser.marsAgeCalc();
    expect(marsUser.ageOnMars).toEqual(19);
  });
  test('It should find the difference between the users life expectancy and Martian age.', () => {
    let marsUser = new MarsLifeExpectancy(48);
    marsUser.marsAgeCalc();
    
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let marsExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(marsUser.marsYear);
    marsUser.surpassedLifeExpectancy(marsExpectedAge);
    expect(marsUser.differenceInAge).toEqual(17);
  })
});