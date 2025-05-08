
//String Formatter Function

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
  } else {
      return input.toLowerCase();
  }
}


//Filter Items by Rating (>= 4)

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const res = items.filter(item => item.rating >= 4);
  return res
}



//Concatenate Multiple Arrays

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}




//Vehicle and Car Classes with Inheritance

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
  }
  getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`)
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
  }
  getModel() {
      console.log(`Model: ${this.model}`)
  }
}



//Process Value: String Length or Number × 2

function processValue(value: string | number): number {
  if (typeof value === "string") {
      const valLength = value.length;
      return valLength;
  } else {
      return value * 2;
  }
}


//Find Most Expensive Product

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
      return null;
  }

  let mostExpensiveProduct = products[0];

  for (const product of products) {
      if (product.price > mostExpensiveProduct.price) {
          mostExpensiveProduct = product;
      }
  }

  return mostExpensiveProduct;
}




//Day Enum and Type Checker

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
      return 'Weekend'
  }
  return 'Weekday'
}



//Square a Number Asynchronously

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (n < 0) {
              reject(new Error('Negative number not allowed'))
          } else {
              resolve(n * n)
          }
      }, 1000)
  })
}


