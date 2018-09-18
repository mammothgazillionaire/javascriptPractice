import {add,deduct,divide,multiply} from './app';

test("Adding 1 + 1 equals 2", () => {
  expect(add(1, 1)).toBe(2)
})

test("deduct 2 - 1 equals 1", () => {
  expect(deduct(2, 1)).toBe(1)
})
test("multiply 2 * 2 equals 4", () => {
  expect(multiply(2, 2)).toBe(4)
})
test("divide 4 / 2 equals 2", () => {
  expect(divide(4, 2)).toBe(2)
})