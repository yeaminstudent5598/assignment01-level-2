// Function to format string based on boolean
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
  // Function to filter items by rating >= 4
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  
  // Generic function to concatenate arrays
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  
  // Vehicle and Car classes
  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  // Function to process string or number
  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
  
  // Product interface and function to get most expensive product
  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, product) => product.price > max.price ? product : max);
  }
  
  // Day enum and function to return day type
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
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }
  
  // Async function to return square or throw error
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        n < 0 ? reject(new Error("Negative number not allowed")) : resolve(n * n);
      }, 1000);
    });
  }
  