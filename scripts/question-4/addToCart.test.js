// import { ShoppingCart } from "./question-4";
// import { milk, bread, cheese, tomato, lettuce } from "./items";


// test('adding items to cart', () => { 
//     const cart = new ShoppingCart();
//     cart.addToCart(milk);

//     console.log(cart.getCart())
//     expect(cart.getCostTotal()).toEqual(19.99)
//     expect(cart.getNumberOfItems()).toEqual(1)
//     expect(cart.getCart()).toEqual([milk])
//  })


//  test 2

// test('adding two items to cart', () => { 
//     const myCart = new ShoppingCart()
//     myCart.addToCart(milk,bread)


//     expect(myCart.getCostTotal()).toEqual()
//     expect(myCart.getNumberOfItems()).toEqual(2)
//     expect(myCart.getCart()).toEqual([milk,bread])
//  })


// test 3

// test('adding three identical items ', () => { 
//     const myCart = new ShoppingCart()
//     myCart.addToCart(lettuce,lettuce,lettuce)

//     expect(myCart.getCostTotal()).toEqual(5.85)
//     expect(myCart.getNumberOfItems()).toEqual(3)
//     expect(myCart.getCart()).toEqual([lettuce,lettuce,lettuce])
//  })


// test 4


// test('add two items and remove one ', () => { 
//     const myCart = new ShoppingCart()
//     myCart.addToCart(tomato,cheese)
//     myCart.removeFromCart(cheese)
    
    
//     expect(myCart.getCostTotal()).toEqual(34)
//     expect(myCart.getNumberOfItems()).toEqual(2)
//     expect(myCart.getCart()).toEqual([cheese])
//  })