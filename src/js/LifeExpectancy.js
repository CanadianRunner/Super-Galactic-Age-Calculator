import { LifeExpectancyAverage } from "../src/lifeExpectancyAverage";

describe(LifeExpectancyAverage, (test) => {

test('It should change the life expectancy if the user inputs their planet of birth as Earth', () => {
  const lifeExpectancy = new LifeExpectancyAverage(true, true, "female");
  lifeExpectancy.calculateLifeExpectancy();
  expect(lifeExpectancy.lifeExpectancyAverage).toEqual(72);
});
test('It should change the life expectancy if the user inputs their species as human', () => {
  const lifeExpectancy = new LifeExpectancyAverage(false, true, "male");
  expect(lifeExpectancy.LifeExpectancyAverage).toEqual(62)
});

});
