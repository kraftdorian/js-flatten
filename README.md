# js-flatten
## Intro
The main purpose of this library is to be able to reduce any JS data structure to a one-level object.

## How to use
1. Flatten primitives
```js
const primitive = 1;
const flat = flatten(primitive, "", ".", "[", "]", []);
console.log(flat); // [['FlatRootPrimitive', 1]] 
```

2. Flatten arrays
```js
const array = [1, 2, 3];
const flat = flatten(array, "", ".", "[", "]", []);
console.log(flat); // [['FlatRootArray[0]', 1], ['FlatRootArray[1]', 2], ['FlatRootArray[2]', 3]]  
```

3. Flatten objects
```js
const object = {foo: "bar"};
const flat = flatten(array, "", ".", "[", "]", []);
console.log(flat); // [['FlatRootObject.foo', 'bar']]
```

## License
See license in [LICENSE](./LICENSE) file.
