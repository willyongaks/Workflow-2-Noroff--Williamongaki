import { getDiscountPercentage } from "./question-3";
import { formatDecimalSpaces } from "./question-3";


// test('Calculate the discount percantage ', () => { 
//     expect(getDiscountPercentage(100, 75)).toBe(25)
//  })

test('Format decimal places ', () => { 
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56)
 })


