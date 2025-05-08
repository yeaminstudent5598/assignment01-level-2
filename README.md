# TypeScript Interview Blog

## 1. Differences Between Interfaces and Types in TypeScript

Both `interface` and `type` in TypeScript are used to describe the shape of an object, but they have a few key differences:

### ✅ Interface:
- Extensible: Interfaces can be extended using `extends`.
- Preferred for object shapes and OOP patterns.
- Can be merged (declaration merging).

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}
// Now Person has both name and age
