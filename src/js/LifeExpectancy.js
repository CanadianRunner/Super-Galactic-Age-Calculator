import { LifeExpectancyAverage } from " ";

describe(LifeExpectancyAverage, (test) => {

test('It should change the life expectancy if the user inputs their planet of birth as Earth', () => {
  const lifeExpectancy = new LifeExpectancyAverage(true, true, "female");
  lifeExpectancy.calculateLifeExpectancy();
  expect(lifeExpectancy.lifeExpectancyAverage).toEqual(73);
});


});
