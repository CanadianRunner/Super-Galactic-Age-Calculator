import { LifeExpectancyAverage } from " ";

describe(LifeExpectancyAverage, (test) => {

test('It should change the life expectancy if the user inputs a gender of female', () => {
  const lifeExpectancy = new LifeExpectancyAverage(true, true, "female");
  lifeExpectancy.calculateLifeExpectancy();
  expect(lifeExpectancy.lifeExpectancyAverage).toEqual(78);
});


});
