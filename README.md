# **What are some differences between interfaces and types in TypeScript?**

In TypeScript, both `interface` and `type` can be used to describe the shape of data. While they often appear similar, there are key differences that make each suited for different scenarios.

### **✅ Primitive Types: Only with Type Alias:**

    - type RollNumber = number;

We cannot use `interface` for primitives like `number`, `string`, etc., because `interface` is designed to describe the shape of objects.

### **✅ Objects: Both Type Alias and Interface**
Both type and interface can be used to describe object shapes:

```
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type alias
type User = {
  name: string;
  age: number;
};
```

**Explanation:**

Both type and interface work well for defining objects. We can use either based on preference.

- interface is better suited for building extensible and extendable shapes (especially with extends).
- type allows more complex combinations like unions and intersections.

### **✅ Extending Types**

We can extend or compose types in both:

### **Using type with intersection:**

```
type User = {
  name: string;
  age: number;
};

type UserWithRole = User & { role: string };

const user: UserWithRole = {
  name: 'Forklin',
  age: 22,
  role: 'admin',
};
```

### **Using interface with extends:**

```
interface User {
  name: string;
  age: number;
}

interface UserWithRole extends User {
  role: string;
}

const user: UserWithRole = {
  name: 'Forklin',
  age: 22,
  role: 'admin',
};
```

**Explanation:**

- type uses intersection (&) to combine multiple types.

- interface uses extends to inherit properties from other interfaces.

- Both are useful for composition, but interface is generally preferred when working with class-like or hierarchical structures.

### **✅ Arrays: Possible with Both, Cleaner with Type Alias**

Type aliases are generally cleaner for arrays:
```
type RollNumbers = number[];

const rolls: RollNumbers = [1, 2, 3];
```


Using interface for arrays requires index signatures:
```
interface RollNumbers {
  [index: number]: number;
}

const rolls: RollNumbers = [1, 2, 3];
```

**Explanation:**

- While both type and interface can define array shapes, type offers a much cleaner and intuitive syntax.

- Use interface if you need more complex index signatures or object-like array behaviors.

### **✅ Functions: Both Work**

We can describe function types using both:

```
// Using type alias
type Add = (num1: number, num2: number) => number;

// Using interface
interface AddFn {
  (num1: number, num2: number): number;
}

const add: AddFn = (num1, num2) => num1+ num2;
```

**Explanation:**

- Both `type` and `interface` can be used to define function signatures.
- `type` is often simpler and easier to read for standalone function types.
- `interface` is useful when the function is part of a structure or object contract.


## **🎯 Finally**
- Use `type` for **primitives**, **arrays**, **tuples, and union types**.
- Use `interface` when working with **object shapes**, especially when you expect to extend them.
- For **arrays and functions**, `type` is often cleaner, but both approaches are valid.


_____________________________________________________________________________________________

# **🔑 What is the use of the keyof keyword in TypeScript?**

The `keyof` keyword in TypeScript is used to extract the **keys of an object type** as a union of string literal types. It enables type-safe property access and helps prevent runtime errors when accessing object properties dynamically.

### **✅ Example 1: Extracting Keys Automatically**
```
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = 'bike' | 'car' | 'ship';  // manual
type Owner2 = keyof Vehicle;          // automatic
```
**Explanation:**
Instead of manually writing 'bike' | 'car' | 'ship', we can use keyof Vehicle to get the same result. This is helpful when the object type is large or frequently changes.

### **✅ Example 2: Safe Dynamic Property Access**

```
const getUserData = <O, K extends keyof O>(obj: O, key: K) => {
  return obj[key];
};

const user = {
  name: 'Yeamin Madbor',
  age: 23,
  address: 'Shariatpur'
};

const result = getUserData(user, 'age'); // 27
```
### **Explanation:**
The function ensures that the key must be a valid property of the object obj.
If we try getUserData(user, 'invalidKey'), TypeScript will give a compile-time error, making your code safer.

## **🚀 Final Thoughts**
The keyof keyword is a game-changer when writing generic utilities in TypeScript. It helps maintain correctness, improves developer experience, and makes APIs safer by catching bugs at compile-time.