import {sumOfTwoNumbers} from 'shared/services/helper.service';

test('3+2=5', () => {
  expect(sumOfTwoNumbers(3, 2)).toBe(5);
});
