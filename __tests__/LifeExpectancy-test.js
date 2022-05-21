import { LifeExpectancyAverage } from "../src/js/LifeExpectancy.js";

describe(LifeExpectancyAverage, () => {
  test("It should change the life expectancy if the user inputs their planet of birth as Earth", () => {
    let lifeExpectancy = new LifeExpectancyAverage(true, true, "female");
    lifeExpectancy.calculateLifeExpectancyAverage();
    expect(lifeExpectancy.lifeExpectancyAverage).toEqual(80);
  });
  test("It should change the life expectancy if the user inputs their species as human", () => {
    let lifeExpectancy = new LifeExpectancyAverage(false, true, "male");
    lifeExpectancy.calculateLifeExpectancyAverage();
    expect(lifeExpectancy.lifeExpectancyAverage).toEqual(63);
  });
  test("It should change the life expectancy if the user inputs their sex as female", () => {
    let lifeExpectancy = new LifeExpectancyAverage(false, false, "female");
    lifeExpectancy.calculateLifeExpectancyAverage();
    expect(lifeExpectancy.lifeExpectancyAverage).toEqual(63);
  });
});
