
import { LifeExpectancyAverage } from "../src/js/LifeExpectancy";
import { JupiterLifeExpectancy } from "../src/js/Jupiter";

describe('JupiterLifeExpectancy', () => {

  test('It should correctly return the users age in Jupiter years.  A Jupiter year is 11.86 Earth Years', () => {
    let jupiterUser = new JupiterLifeExpectancy(36);
    jupiterUser.jupiterAgeCalc();
    expect(jupiterUser.jupiterAge).toEqual(3);
  })
})