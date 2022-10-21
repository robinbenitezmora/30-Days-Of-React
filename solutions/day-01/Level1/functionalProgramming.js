const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const priceEachProduct = (products) => {
  const prices = products.array.forEach(element => {
    console.log(element.price)
  });
  return prices
}

console.log(priceEachProduct(products))

// Path: solutions\day-01\Level1\functionalProgramming.js
const productsItems = (products) => {
  const productsList = products.forEach((product) => {
    console.log(`The price of ${product.product} is ${product.price} euros`)
  })
  return productsList
}

productsItems(products)

// Path: solutions\day-01\Level1\functionalProgramming.js
const sumPrices = (products) => {
  const prices = products.forEach((product) => {
    product.price += product.price
  })
  return prices
}

sumPrices(products)

// Path: solutions\day-01\Level1\functionalProgramming.js
const prices = products.map((product) => product.price)
console.log(prices)

// Path: solutions\day-01\Level1\functionalProgramming.js
const pricesFiltered = products.filter((product) => product.price.includes('prices'))
console.log(pricesFiltered)

// Path: solutions\day-01\Level1\functionalProgramming.js
const sumAllPrices = products.reduce((acc, product) => acc + product.price, 0)
console.log(sumAllPrices)

// Path: solutions\day-01\Level1\functionalProgramming.js
const firstProduct = products.find((product) => !product.price.includes('price')) 
console.log(firstProduct)

// Path: solutions\day-01\Level1\functionalProgramming.js
const indexProduct = products.findIndex((product) => !product.price.includes('price'))
console.log(indexProduct)

// Path: solutions\day-01\Level1\functionalProgramming.js
const someProducts = products.some((product) => !product.price.includes('price'))
console.log(someProducts)

// Path: solutions\day-01\Level1\functionalProgramming.js
const everyProduct = products.every((product) => product.price.includes('price'))
console.log(everyProduct)

// Path: solutions\day-01\Level1\functionalProgramming.js
