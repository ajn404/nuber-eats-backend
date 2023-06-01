## !!
在 TypeScript（TS）中，双感叹号 !! 是一个逻辑运算符，用于将一个值转换为布尔值。它的作用是先对一个值取反（使用单个感叹号 !），然后再对结果取反（再次使用单个感叹号 !）。这样，任何真值（truthy）都会被转换为 true，而任何假值（falsy）都会被转换为 false。

例如：

```ts
const truthyValue = 'some string';
const falsyValue = '';

console.log(!!truthyValue); // 输出 true
console.log(!!falsyValue); // 输出 false
```
