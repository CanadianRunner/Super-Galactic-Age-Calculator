import { LifeExpectancyAverage } from "../src/js/LifeExpectancy";
import { VenusLifeExpectancy } from "../src/js/Venus";

describe('VenusLifeExpectancy', () => {

  test('It should correctly return the users age in Venus years.  A Venus year is 0.62 Earth Years', () => {
    let venusUser = new VenusLifeExpectancy(36);
    venusUser.venusAgeCalc();
    expect(venusUser.ageOnVenus).toEqual(58);
  });
  test('It should find the difference between the users life expectancy and Venus age.', () => {
    let venusUser = new VenusLifeExpectancy(48);
    venusUser.venusAgeCalc();
    
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let venusExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(venusUser.venusYear)
    venusUser.surpassedLifeExpectancy(venusExpectedAge);
    expect(venusUser.differenceInAge).toEqual(27.4);
  });







  
  test('If the user inputs a number exceeding the life expectancy, it should return a postive number.', () => {
    let venusUser = new VenusLifeExpectancy(90);
    venusUser.venusAgeCalc();
    
    let userLifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    let venusExpectedAge = userLifeExpectancy.calcExpectedAgePerPlanet(venusUser.venusYear)
    venusUser.surpassedLifeExpectancy(venusExpectedAge);
    expect(venusUser.differenceInAge).toEqual(6);
  });
});