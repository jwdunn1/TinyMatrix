# TinyMatrix
[![license][license-image]][license-url]
> A tiny matrix class in JavaScript. Useful for things like tiny neural networks.

## Example

```js
var a = new Matrix([
  [ 1, 2, 3],
  [-8, 2, 4]
]);

var b = new Matrix([
  [0, 1],
  [3, 2],
  [6, 0]
]);

var c = a.dot(b);
console.log(c.$); // [ [24, 5], [30, -4] ]
console.log(c.map(Math.abs).mean()); // 15.75
```

This OpenProcessing sketch uses the Matrix class to create a rudimentary neural network: https://www.openprocessing.org/sketch/386736

## API

### Matrix instantiation

Create a new instance of Matrix. Pass in a multidimensional array:

```js
var m = new Matrix([
  [2, 6, 4],
  [9, 3, 1],
  [8, 2, 4]
]);
```
or pass a row count to create an empty matrix,
or pass a row, column count to create a matrix initialized to zero.

```js
var m = new Matrix(2,3);
console.log(m.$); // [ [0, 0, 0], [0, 0, 0] ]
```

Use the utility method `randomize` to create an array randomly initialized -1 to 1:

```js
var m = Matrix.randomize(3,2);
console.log(m.$); // ~[ [0.4820, -0.2079], [-0.5767, 0.2396], [0.5877, -0.1864] ]
```

### Matrix properties

Access array values using the `.$` property: `m.$[0][1]`, with `0` corresponding to the row number and `1` corresponding to the column number. Access row size and column size using `.row` and `.col` getters.

### Matrix methods
Methods are non-destructive (returning a new matrix) and chainable.

#### .add()

```js
a.add(b);
```

#### .sub()

```js
a.sub(b);
```

#### .dot()

```js
a.dot(b);  // matrix product
```

#### .mul()

```js
a.mul(b);  // entrywise product
```

#### .map()

```js
a.map(f);  // apply function f to each element in matrix a
```

#### .T()

```js
a.T();  // transpose
```

#### .mean()

```js
a.mean();  // scalar mean (not chainable)
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license
