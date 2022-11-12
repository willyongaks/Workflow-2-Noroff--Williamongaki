import { convertKrone, getDiscountPercentage } from "./question-3";
import { formatDecimalSpaces } from "./question-3";
import { calculateTax } from "./question-3";

// test 1

test('Calculate the discount percantage ', () => { 
    expect(getDiscountPercentage(100, 75)).toBe(25)
 })


// test 2

test('Format decimal places ', () => { 
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56)
 })

// test 3

test('Converts a value to or from Krone', () => { 
    expect(convertKrone(10)).toBe(101.80)
 })

// test 4

test('calculate tax', () => { 
    expect(calculateTax(100)).toBe(125)
 })


